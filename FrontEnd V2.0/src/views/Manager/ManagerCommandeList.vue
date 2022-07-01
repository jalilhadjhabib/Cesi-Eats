<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Manager</h1>
            <h4 style="font-weight: bolder;color:white;
        text-shadow: 5px 5px 5px black;">
              Bienvenue sur votre espace Manager
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
            <center><h1>Suivi des commandes</h1></center>
                    <div class="container mt-2" >
          <table class="table bg-light" style="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                <thead>
                    <tr>
                    <th scope="col">Numéro de la Commande</th>
                    <th scope="col">Product</th>
                    <th scope="col">Client</th>
                    <th scope="col">Restaurant</th> 
                    <th scope="col">Livreur</th>
                    <th scope="col">Statut</th>
                    </tr>
                </thead>
                <tbody id="tbody">
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
                    <td>{{Order.id_restaurant}}</td>
                    <td>{{Order.id_livreur}}</td>
                    <td >
                      <ul :id="'state-'+Order._id">

                        <li v-if="Order.statut_restaurant == '0'"  class="list-group-item d-flex justify-content-between align-items-center">
                      En attente
                      <span class="badge badge-warning badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>
                      <li v-if="Order.statut_restaurant == '1'"  class="list-group-item d-flex justify-content-between align-items-center">
                      Acceptée
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>
                      <li v-if="Order.statut_livreur == '1'"  class="list-group-item d-flex justify-content-between align-items-center">
                      En cours de livraison
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>
                      <li v-if="Order.statut_livreur == '2'"  class="list-group-item d-flex justify-content-between align-items-center">
                      Livrée
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>
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












  
</template>

<script>
import OrderService from "@/services/OrderService";
import { io } from 'socket.io-client';
// import NotificationService from "@/services/NotificationService";
import JQuery from 'jquery'

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
      name: null,
      email: null,
      message: null,
      currentIndex: -1,

       classicModal: false,
      selectedDate: new Date("2018/03/26"),
      carousel1: require("@/assets/img/restaurateur.jpg"),
      carousel2: require("@/assets/img/restaurateur2.jpg"),
      carousel3: require("@/assets/img/restaurateur3.jpg"),

      Orders: [],
      socket : io('http://localhost:4000', { transports: ['websocket', 'polling', 'flashsocket']}),
    };
  },
    methods: {
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
    realtimeOrder(){
        var sio = this.socket;
        sio.on('connect', connectUser);
        function connectUser () {  // Called whenever a user signs in
        var userId = 50 // Retrieve userId
        if (!userId) return;
        sio.emit('userConnected',  userId);
      }
      sio.on('getnewcommand',function(data){
        OrderService.get(data)
        .then(response => {
        console.log(response.data);    
        $("#tbody").prepend(`<tr style="background-color: #F5F5F5;text-align: center;" :class="{ active: index == currentIndex }"
          >
                    <td>`+response.data._id+`</td>
                      
                          <td>62bafde3f9be33175ccaf1ba</td>
                      
                    <td>`+response.data.id_client+`</td>
                    <td>`+response.data.id_restaurant+`</td>
                    <td>`+response.data.id_livreur+`</td>
                    <td >
                      <ul :id="'state-'+response.data._id">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                      En attente
                      <span class="badge badge-warning badge-pill"><i class="bi h4 bi-dot"></i></span>
                        </li>
                      </ul>

                    </td>
                    </tr>`  );      
        })
        .catch(e => {
            console.log(e);
        });
      });
        sio.on('getcommandesatut',function(data){
            $('#state-'+data.id).empty();
            
            console.log(data);
            if(data.statut_restaurant == 1){
               $('#state-'+data.id).append(
                `<li class="list-group-item d-flex justify-content-between align-items-center">
                      Acceptée
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>`
                );
            }
            
            
            
            if(data.statut_livreur == 1){
               $('#state-'+data.id).append(
                `<li class="list-group-item d-flex justify-content-between align-items-center">
                En cours de livraison
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>`
);
            
            }

            if(data.statut_livreur == 2){
               $('#state-'+data.id).append(
                `<li class="list-group-item d-flex justify-content-between align-items-center">
                     Livrée
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>`
);
            
            }
            

        });

    }
        },
  mounted() {
    this.retrieveOrders();
        this.realtimeOrder();

  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
}
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
