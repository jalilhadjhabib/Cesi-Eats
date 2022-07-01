<template>
  <div class="wrapper">
    <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">

    </div>
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Restaurateur</h1>
            <h4 style="font-weight: bolder;color:white;
        text-shadow: 5px 5px 5px black;">
              Bienvenue sur votre compte Restaurateur
            </h4>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      
      
      <div class="section section-contacts">
        <div class="container">
            <div class="md-layout">
        <div class="md-layout-item md-size-200 mx-auto md-small-size-50">
            <center><h1 style="font-weight: 700;">Liste des commandes</h1></center>
          
            <div style="padding-top: 20px;">
        <div class="container mt-2" >
            <table class="table bg-light" style="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                <thead>
                    <tr>
                    <th scope="col">Numéro de la Commande</th>
                    <th scope="col">Product</th>
                    <th scope="col">Client</th>
                    <th scope="col">Action</th>
                    <th scope="col">Statut</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #F5F5F5;text-align: center;" :class="{ active: index == currentIndex }"
          v-for="(Order, index) in Orders.slice().reverse()"
          :key="index">
                    <td>{{Order._id}}</td>
                      <td>
                        <ul class="{ active: index == currentIndex }"
                        v-for="(id_article, index) in Order.ids_article"
                        :key="index" >
                          <td>{{id_article}}</td>
                        </ul>
                      </td>
                    <td>{{Order.id_client}}</td>
                      <td>
                            <div><md-button class="md-success" v-if="Order.statut_restaurant == '0'" @click="AcceptOrder(Order._id)" > Accepter </md-button></div>
                            <div><md-button  v-if="Order.statut_restaurant == '1'" disabled > Accepter </md-button></div>
                            <div><md-button class="md-warning" v-if="Order.statut_restaurant == '0'" @click="DropOrder(Order._id)"> Refuser </md-button></div>
                            <div><md-button  v-if="Order.statut_restaurant == '1'" disabled> Refuser </md-button></div>
                            
                        

                      </td>
                    <td>
                      <ul>
                      <div><td v-if="Order.statut_restaurant == '0'"  class="list-group-item d-flex justify-content-between align-items-center">
                      En attente
                      <span class="badge badge-warning badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </td></div>
                      <div><td v-if="Order.statut_restaurant == '1'"  class="list-group-item d-flex justify-content-between align-items-center">
                      Acceptée
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </td></div>
                      <div><td v-if="Order.statut_livreur == '1'"  class="list-group-item d-flex justify-content-between align-items-center">
                      En cours de livraison
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </td></div>
                      <div><td v-if="Order.statut_livreur == '2'"  class="list-group-item d-flex justify-content-between align-items-center">
                      Livrée
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </td></div>
                      </ul>
                    </td>
                    </tr>
                </tbody>
            </table>    
        </div>
    </div>

          
        </div>
      </div>
          </div>
    </div>
  </div>
  </div>
</template>
<script>
import OrderService from "@/services/OrderService";
import { io } from 'socket.io-client';
import NotificationService from "@/services/NotificationService";
// import JQuery from 'jquery'
// window.$ = JQuery

export default {
  components: {
    //Modal
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bghome.jpg")
    },
    resto: {
      type: String,
      default: require("@/assets/img/resto.png")
    },
    client: {
      type: String,
      default: require("@/assets/img/client.jpg")
    },
    livreur: {
      type: String,
      default: require("@/assets/img/livreur.jpg")
    }
  },
  data() {
    
    return {
             classicModal: false,

      Orders: [],
      currentTutorial: null,
      currentIndex: -1,
      socket : io('http://localhost:4000', { transports: ['websocket', 'polling', 'flashsocket']}),
      title: ""
    };
  },
   computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    classicModalHide() {
      this.classicModal = false;
    },
    retrieveOrders() {
        OrderService.getAll()
        .then(response => {
            this.Orders = response.data ;
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    },
    DropOrder(id){
      OrderService.delete(id)
      .then(response => {
            console.log(response.data);
            // this.$router.go();

        })
        .catch(e => {
            console.log(e);
        });
    },
    AcceptOrder(id){
       this.socket.on('connect', connectUser);
        var sio = this.socket;
        function connectUser () {  // Called whenever a user signs in
        var userId = 20 // Retrieve userId
        if (!userId) return;
        sio.emit('userConnected',  userId);
      }
      var sio = this.socket;
      var NotificationData = {
        type_user : "restaurateur",
        id_user : 30,
        message : "Vous avez une nouvelle commande a livrée"
      }
      OrderService.updateStateRestaurateurOrder(id)
      .then(response => {
            console.log(response.data);
            var statut_restaurant  = response.data.statut_restaurant;
            var statut_livreur = response.data.statut_livreur;
            NotificationService.post(NotificationData)
            .then(response => {
              console.log(response.data);
              sio.emit('sendnotif',{
                  id_user : NotificationData.id_user,
                  type_user : NotificationData.type_user,
                  message : NotificationData.message
                });
              sio.emit('realtimemanagercommande',{
                statut_restaurant : 1,
                id :id 
              });
            }).catch(e => {
            console.log(e);
            });  
        })
        .catch(e => {
            console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveOrders();
  }
};
</script>


<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
<style>
.menu{
    padding-top: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

}
.menutr{
    background-color: white;
    padding-top:20px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    
}
</style>