<template>
<div class="">
  <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">
  </div>
  <div>
    <nav class="navbar navbar-expand-lg" style="background:black;height:80px;">
      <a class="navbar-brand" href="/home" style="margin-left:40px;font-size:40px;color:white;font-family:Helvetica"">Cesi</a>
      <a class="navbar-brand" href="/home" style="font-size:40px;color:#64F58D;font-family:Helvetica">Eats</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
  <h1 style="font-weight: 700;padding-top:20px;">Votre Panier</h1>
  <div style="padding-top:50px;">
    <div class="container" style="background: #FBFBFF;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
	    <table id="cart" class="table table-hover table-condensed" >
    		<thead>
					<tr>
            <th style="width:50%">Produit</th>
            <th style="width:10%">Prix</th>
            <th style="width:20%">Photo du produit</th>
            <th style="width:20%">Action sur le produit</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="{ active: index == currentIndex }"
          v-for="(Article, index) in Articles"
          :key="index">
						<td data-th="Product">
							<div class="row">
								<div class="col-sm-2 hidden-xs"></div>
								<div class="col-sm-10">
									<h4 class="nomargin">{{Article.name}}</h4>
									<p>Description</p>
                </div>
              </div>
            </td>
            <td data-th="Price">{{Article.price}} DA</td>
            <td><img class="img-fluid" style="width:300px;height:100px;" :src="'http://127.0.0.1:4000\\'+Article.picture.path" alt="Card image cap"></img></td>
            <td class="actions" data-th="">
              <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
              <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i> </button>								
            </td>
          </tr>            
        </tbody>
        <tfoot>
          <tr class="visible-xs">
            <td class="d-flex justify-content-left">
             <div><label for="payment">Méthode de paiement </label></div>
              <div class="select">
                <select name="format" id="format" >
                  <option v-model="order.payementMethod='Paiement main a main'"
                  name="payementMethod">Paiement Main a main </option>
                  <option v-model="order.payementMethod='Paiement En ligne'"
                  name="payementMethod">Paiement En ligne</option>
                </select>
              </div>
            </td>		
          </tr>
          <tr>
            <td><a href="/client/displayarticle" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue vos achats</a></td>
            <td colspan="2" class="hidden-xs"></td>
            <td class="hidden-xm text-center"><strong><p style="width: 120px;padding-top: 20px;">Total {{this.order.total}} DA</p></strong></td>
            <td><button class="btn btn-success" style="width: 200px;" @click="saveorder">Commander <i class="fa fa-angle-right"></i></button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <div style="padding-top:50px;">
    <div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></div>
    <footer data-aos="fade-up" class="text-light">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-lg- col-xl-3">
            <strong><h5>À propos</h5></strong>
            <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
            <p class="mb-0">
              Cesi Eats est un service de livraison de plats cuisinés lancé par 
              A4 Oran en 2022 et basé à Oran, en Algérie. Les commandes 
              sont prises via le site web de Cesi Eats auprès 
              des restaurants partenaires et sont livrées par des coursiers indépendants.
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3">
            <strong><h5>Contact</h5></strong>
            <hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
            <ul class="list">
              <li><i class="fa fa-envelope mr-2"></i> contact@cesieats.dz</li>
              <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
              <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
              <li><i class="fa fa-phone mr-2"></i> (+213) 077 77 77 77</li>
            </ul>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-3 mx-auto">
            <strong><h5>Retrouvez-nous sur :</h5></strong>
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
  
  <!-- POP UP FOR SUCCESS -->
  <div class="modal fade" id="popupsuccess" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title d-flex justify-text-between" id="exampleModalLabel">Bien Recu <i class="bi mx-3 bi-emoji-laughing"></i></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="text-center h5 my-3"> Votre Commande a bien été reçu </p>
        </div>
        <div class="modal-footer">
            <button  class="btn  btn-outline-primary"><i class="bi bi-house"></i></button>
            <button data-dismiss="modal" class="btn btn-light"><i class="bi bi-x"></i></button>
        </div>
      </div>

    </div>
  </div>

</div> 
</template>
<style>@import '@/assets/css/Cart.css';</style>
<script>
import ArticleService from "@/services/ArticleService";
import CartService from "@/services/CartService";
import OrderService from "@/services/OrderService";
import NotificationService from "@/services/NotificationService";
import { io } from 'socket.io-client';
import JQuery from 'jquery'
window.$ = JQuery
var ids_cart = CartService.getCookie('testuser');

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
      socket : io('http://localhost:4000', { transports: ['websocket', 'polling', 'flashsocket']}),
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
        this.socket.on('connect', connectUser);
        var sio = this.socket;
        function connectUser () {  // Called whenever a user signs in
        var userId = 13 // Retrieve userId
        if (!userId) return;
        sio.emit('userConnected',  userId);
        }
        var data = {
        payementMethod: this.order.payementMethod,
        date : Date.now(),
        ids_article : this.order.ids_article,
        price : this.order.total,
        id_restaurant : 'testidrestaurant',
        id_client : 'testidclient'
      };
      var NotificationData = {
        type_user : "restaurateur",
        id_user : 10,
        message : "Vous avez une nouvelle commande"
      }
      OrderService.post(data)
        .then(response => {
          console.log(response.data);
          $('#popupsuccess').modal('toggle');
            NotificationService.post(NotificationData)
            .then(response => {
              console.log(response.data);
              sio.emit('sendnotif',{
                  id_user : NotificationData.id_user,
                  type_user : NotificationData.type_user,
                  message : NotificationData.message
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
    this.retrieveArticles();
  }
};
</script>

