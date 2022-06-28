<template>
    <div>
      <nav class="navbar navbar-expand-lg" style="background:black;height:80px;">
  <a class="navbar-brand" href="/home" style="margin-left:40px;font-size:40px;color:white;font-family:Helvetica"">Cesi</a>
    <a class="navbar-brand" href="/home" style="font-size:40px;color:#64F58D;font-family:Helvetica">Eats</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>
        <div style="padding-top: 150px;">
    <h1 style="font-weight: 700;color:black;box-shadow: rgba(0, 0, 0.70, 0.35) 0px 5px 15px;">Commandes des clients</h1>
        <div class="container mt-2" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
            <table class="table bg-light" style="box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;">
                <thead>
                    <tr>
                    <th scope="col"># Numéro Commande</th>
                    <th scope="col">Product</th>
                    <th scope="col">Client</th>
                    <th scope="col">Action</th>
                    <th scope="col">Statut</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :class="{ active: index == currentIndex }"
          v-for="(Order, index) in Orders.slice().reverse()"
          :key="index">
                    <td>{{Order._id}}</td>
                      <td>
                        <ul class="{ active: index == currentIndex }"
                        v-for="(id_article, index) in Order.ids_article"
                        :key="index" >
                          <li>{{id_article}}</li>
                        </ul>
                      </td>
                    <td>{{Order.id_client}}</td>
                      <td>
                        <ul class="list-group"> 
                          <li class="list-group-item">
                            <button v-if="Order.statut_restaurant == '0'" @click="DropOrder(Order._id)" class="btn btn-sm btn-danger"> Refuser </button>
                            <button v-if="Order.statut_restaurant == '1'" disabled class="btn btn-sm btn-danger"> Refuser </button>
                          </li>
                          <li class="list-group-item">
                            <button v-if="Order.statut_restaurant == '0'" @click="AcceptOrder(Order._id)" class="btn btn-sm btn-success"> Accepter </button>
                            <button v-if="Order.statut_restaurant == '1'" disabled class="btn btn-sm btn-success"> Accepter </button>
                          </li>
                        </ul>

                      </td>
                    <td>
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
                    </td>
                    </tr>
                </tbody>
            </table>    
        </div>
    </div>


<div style="padding-top:50px;">
<div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></div>


<footer data-aos="fade-up" class="text-light">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-lg- col-xl-3">
          <strong><h5>
            À propos
          </h5></strong>
          <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
          <p class="mb-0">
            Cesi Eats est un service de livraison de plats cuisinés lancé par 
            A4 Oran en 2022 et basé à Oran, en Algérie. Les commandes 
            sont prises via le site web de Cesi Eats auprès 
            des restaurants partenaires et sont livrées par des coursiers indépendants.
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3">
          <strong><h5>
            Contact
          </h5></strong>
          <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
          <ul class="list">
            <li><i class="fa fa-envelope mr-2"></i> contact@cesieats.dz</li>
            <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
            <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
            <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
          </ul>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-3 mx-auto">
           <strong><h5>
            Retrouvez-nous sur :
          </h5></strong>
          <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
          <ul class="list-unstyled">
            <li>
              <a href="#" class="fb btn" target="_blank" style="background-color: lightgray;color: white;"><i class="fa fa-facebook fa-fw fa-2x" style="" ></i></a>
            </li>
            <li>
              <br>
            <a href="#" class="twitter btn" target="_blank" style="background-color: lightgray;color: white;"><i class="fa fa-twitter fa-fw fa-2x"></i></a>
            </li>
            <li>
              <br>
            <a href="#" class="twitter btn" target="_blank" style="background-color: lightgray;color: white;"><i class="fa fa-instagram fa-fw fa-2x"></i></a>
            </li>
          </ul>
        </div>
        
        <div class="col">
          <center>
            <strong><p>Copyright © 2022. All rights reserved to Cesi Oran A4.</p></strong>
          </center>
          </div>
          </div>
          </div>
        </footer>
        </div>


    </div>

    
</template>
<script>
import OrderService from "@/services/OrderService";
import { io } from 'socket.io-client';
import NotificationService from "@/services/NotificationService";
import JQuery from 'jquery';
window.$ = JQuery


// import JQuery from 'jquery'
// window.$ = JQuery

export default {
  name: "Commande-list",
  data() {
    return {
      Orders: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
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
        id_user : 20,
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

<style>
  @import '@/assets/css/Restaurateur.css';
</style>