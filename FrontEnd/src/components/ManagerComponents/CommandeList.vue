<template>
    <div style="padding-top: 150px;">
    <h1 style="font-weight: 700;color:black;box-shadow: rgba(0, 0, 0.70, 0.35) 0px 5px 15px;">Commandes des clients</h1>
        <div class="container mt-2" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
            <table class="table bg-light">
                <thead>
                    <tr>
                    <th scope="col"># Numéro Commande</th>
                    <th scope="col">Product</th>
                    <th scope="col">Client</th>
                    <th scope="col">Restaurant</th>
                    <th scope="col">Livreur</th>
                    <th scope="col">Statut</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :class="{ active: index == currentIndex }"
          v-for="(Order, index) in Orders"
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
                    <td>{{Order.id_restaurant}}</td>
                    <td>{{Order.id_livreur}}</td>
                    <td :id="'state-'+Order._id">
                      <li v-if="Order.statut_livreur == 0" class="list-group-item d-flex justify-content-between align-items-center">
                      En Attente
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>
                       <li v-if="Order.statut_livreur == 1" class="list-group-item d-flex justify-content-between align-items-center">
                        Prise en Charge
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>
                      <li v-if="Order.statut_livreur == 2" class="list-group-item d-flex justify-content-between align-items-center">
                        Livrée
                      <span class="badge badge-success badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>
                    </td>
                    </tr>
                </tbody>
            </table>    
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
    realtimeOrder(){
        var sio = this.socket;
        sio.on('connect', connectUser);
        function connectUser () {  // Called whenever a user signs in
        var userId = 50 // Retrieve userId
        if (!userId) return;
        sio.emit('userConnected',  userId);
      }
        sio.on('getcommandesatut',function(data){
            $('#state-'+data.id).empty();
            console.log(data);
            if(data.statut_restaurant == 1){
            $('#state-'+data.id).append( `<li  class="list-group-item d-flex justify-content-between align-items-center">
                      Acceptée
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>` );
            }
            
            
            
            if(data.statut_livreur == 1){
            $('#state-'+data.id).append( `<li  class="list-group-item d-flex justify-content-between align-items-center">
                      Prise en charge
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>` );

            }

            if(data.statut_livreur == 2){
            $('#state-'+data.id).append( `<li  class="list-group-item d-flex justify-content-between align-items-center">
                      Livrée
                      <span class="badge badge-primary badge-pill"><i class="bi h4 bi-dot"></i></span>
                      </li>` );

            }
            

        });

    }
        },
  mounted() {
    this.retrieveOrders();
        this.realtimeOrder();

  }
};
</script>
<style>
  @import '@/assets/css/Restaurateur.css';
</style>