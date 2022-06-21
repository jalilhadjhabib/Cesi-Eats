<template>
<div class="">
  <table class="table ">
  <thead>
    <tr>
      <th scope="col text-center">Article Name</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    <tr  :class="{ active: index == currentIndex }"
          v-for="(Article, index) in Articles"
          :key="index">
      <td>
        <h5 class="card-title">{{Article.name}}</h5>
        <small>{{Article.price}}</small>
      </td>
      
      <td>
        <!-- <button @click="AddToCart(Article._id)"  class="btn btn-sm mx-1 btn-success" ><i class="bi bi-bag-plus-fill"></i></button> -->
        <span class="badge pill mx-3 badge-success">1</span>
      </td>
      
    </tr>
    <tr>
        <td class="text-right justify-text-center">
            <button class="btn mx-3 btn-danger">Supprimer</button>
            </td>
         <td class="d-flex justify-content-left">
            <div class="form-group">
                <label>payement Method</label>
                <input type="text" 
                required
                v-model="order.payementMethod"
                name="payementMethod"
                class="form-control">
            </div>
            <p>{{this.order.total}}</p>
            <button @click="saveorder"  class="btn mx-3 btn-success ">Commander</button>
        </td>
    </tr>
  </tbody>
</table>
  </div> 
</template>
<script>
import ArticleService from "../services/ArticleService";
import CartService from "../services/CartService";
import OrderService from "../services/OrderService";

var ids_cart = CartService.getCookie('testuser');
console.log(ids_cart);

export default {
  name: "Articles-list",
  data() {
    return {
      Articles: [],
      order: {
        id: null,
        ids_article :[],
        n_commande : "",
        date: "",
        total: 0,
        payementMethod : "",
        published: false
      },
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveArticles() {
        for (var key in ids_cart){
            var value = ids_cart[key];
            ArticleService.get(value)
            .then(response => {
                this.Articles.push(response.data) ;
                this.order.ids_article.push(response.data._id);
                this.order.total = +this.order.total + +parseInt(response.data.price);
                console.log(this.order.ids_article);
                console.log(this.order.total);
            })
            .catch(e => {
                console.log(e);
            });

    }  
    
    
    },
    saveorder(){
        
        var data = {
        payementMethod: this.order.payementMethod,
        date : Date.now(),
        ids_article : this.order.ids_article,
        price : this.order.total,
      };
      OrderService.post(data)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    
  },
  mounted() {
    this.retrieveArticles();
  }
};
</script>

