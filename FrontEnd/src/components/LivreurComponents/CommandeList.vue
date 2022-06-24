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
                    <th scope="col">Action</th>
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
                    <td>{{Order.id_livreur}}</td>
                      <td>
                        <ul class="list-group"> 
                          <li class="list-group-item">
                            <button  @click="DropOrder(Order._id)" class="btn btn-sm btn-danger"> Delete </button>
                          </li>
                          <li v-if="Order.statut_livreur == 0" class="list-group-item">
                            <button @click="AcceptOrder(Order._id)"  class="btn btn-sm btn-success"> Prendre en charge </button>
                          </li>
                          <li v-if="Order.statut_livreur == 1 && Order.id_livreur =='testidlivreur'" class="list-group-item">
                            <button  @click="AcquitOrder(Order._id)" class="btn btn-sm btn-success"> Acquitter  </button>
                          </li>
                          <li v-if="Order.statut_livreur == 1 && Order.id_livreur != 'testidlivreur'" class="list-group-item">
                            <button disabled  class="btn btn-sm btn-secondary"> Prise En Charge </button>
                          </li>
                        </ul>

                      </td>
                    <td>
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

// import JQuery from 'jquery'
// window.$ = JQuery

export default {
  name: "Commande-list",
  data() {
    return {
      Orders: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
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
    var data = {
        state : 1,
        id_livreur : 'testidlivreur'
      };
    OrderService.updateStateLivreurOrder(id,data)
    .then(response => {
            console.log(response.data);
            this.$router.go();
        })
        .catch(e => {
          console.log(e);
        });
  },
  AcquitOrder(id){
    var data = {
        state : 2,
      };
    OrderService.updateStateLivreurOrder(id,data)
    .then(response => {
            console.log(response.data);
            this.$router.go();
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