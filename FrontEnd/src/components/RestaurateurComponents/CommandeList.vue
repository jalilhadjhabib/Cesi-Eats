<template>
    <div class="bg-white">
        <div class="container mt-2 bg-white">
            <table class="table bg-light">
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
      OrderService.updateStateRestaurateurOrder(id)
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