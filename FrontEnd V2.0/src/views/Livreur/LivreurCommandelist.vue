<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Livreur</h1>
            <h4 style="font-weight: bolder;color:white;
        text-shadow: 5px 5px 5px black;">
              Bienvenue sur votre espace Livreur
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
                    <th scope="col">Restaurant</th>
                    <th scope="col">Action</th>
                    <th scope="col">Statut</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background-color: #F5F5F5;text-align: center;" 
                    :class="{ active: index == currentIndex }"
          v-for="(Order, index) in Orders"
          :key="index">
                    <td>{{Order._id}}</td>
                      <td>
                        <ul :class="{ active: index == currentIndex }"
                        v-for="(id_article, index) in Order.ids_article"
                        :key="index" >
                          <td>{{id_article}}</td>
                        </ul>
                      </td>
                    <td>{{Order.id_client}}</td>
                    <td>{{Order.id_livreur}}</td>
                      <div>
                          <div class="list-group-item">
                            <md-button  @click="DropOrder(Order._id)" class="md-danger"> Delete </md-button>
                          </div>
                          <div v-if="Order.statut_livreur == 0" class="list-group-item">
                            <md-button @click="AcceptOrder(Order._id)"  class="md-success"> Prendre en charge </md-button>
                          </div>
                          <div v-if="Order.statut_livreur == 1 && Order.id_livreur =='testidlivreur'" class="list-group-item">
                            <md-button  @click="AcquitOrder(Order._id)" class="md-primary"> Acquitter  </md-button>
                          </div>
                          <div v-if="Order.statut_livreur == 1 && Order.id_livreur != 'testidlivreur'" class="list-group-item">
                            <md-button disabled  class="md-disable"> Prise En Charge </md-button>
                          </div>
                        

                      </div>
                    <td>
                      <div v-if="Order.statut_livreur == 0" class="list-group-item d-flex justify-content-between align-items-center">
                      En Attente
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </div>
                       <div v-if="Order.statut_livreur == 1" class="list-group-item d-flex justify-content-between align-items-center">
                        Prise en Charge
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </div>
                      <div v-if="Order.statut_livreur == 2" class="list-group-item d-flex justify-content-between align-items-center">
                        Livrée
                      <span class="badge badge-success badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </div>
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
import JQuery from 'jquery'
window.$ = JQuery

export default {
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

      socket : io('http://localhost:4000', { transports: ['websocket', 'polling', 'flashsocket']}),
      Orders: [],
      currentTutorial: null,
      currentIndex: -1,
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
    retrieveOrders() {
        OrderService.getAcceptedRestaurantOrder(1)
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
            this.$router.go();
        })
        .catch(e => {
            console.log(e);
        });
    },
  AcceptOrder(id){
      var sio = this.socket;
      var NotificationData = {
        type_user : "restaurateur",
        id_user : 20,
        message : "une commande est prise en charge"
      }
    sio.on('connect', connectUser);
        function connectUser () {  // Called whenever a user signs in
        var userId = 30 // Retrieve userId
        if (!userId) return;
       sio.emit('userConnected',  userId);
      }
    var data = {
        state : 1,
        id_livreur : 'testidlivreur'
      };
    OrderService.updateStateLivreurOrder(id,data)
    .then(response => {
            console.log(response.data);
            NotificationService.post(NotificationData)
            .then(response => {
              console.log(response.data);
              sio.emit('sendnotif',{
                  id_user : NotificationData.id_user,
                  type_user : NotificationData.type_user,
                  message : NotificationData.message
                });
              sio.emit('realtimemanagercommande',{
                statut_livreur : 1,
                id :id 
              });
            }).catch(e => {
            console.log(e);
            });  
            // this.$router.go();
        })
        .catch(e => {
          console.log(e);
        });
  },
  AcquitOrder(id){
    var sio = this.socket;
      var NotificationData = {
        type_user : "restaurateur",
        id_user : 20,
        message : "une commande est livrée"
      }
      var NotificationDataClient = {
        type_user : "client",
        id_user : 10,
        message : "votre commande est prete"
      }
    sio.on('connect', connectUser);
        function connectUser () {  // Called whenever a user signs in
        var userId = 50 // Retrieve userId
        if (!userId) return;
       sio.emit('userConnected',  userId);
      }
    var data = {
        state : 2,
      };
    OrderService.updateStateLivreurOrder(id,data)
    .then(response => {
            console.log(response.data);
            NotificationService.post(NotificationData)
            .then(response => {
              console.log(response.data);
              sio.emit('sendnotif',{
                  id_user : NotificationData.id_user,
                  type_user : NotificationData.type_user,
                  message : NotificationData.message
                });
              sio.emit('realtimemanagercommande',{
                statut_livreur : 2,
                id :id 
              });
            }).catch(e => {
            console.log(e);
            });  
            // this.$router.go();
        })
        .catch(e => {
          console.log(e);
        });
            NotificationService.post(NotificationDataClient)
            .then(response => {
              sio.emit('sendnotif',NotificationDataClient);
            console.log(response.data)
            }).catch(e => {
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
