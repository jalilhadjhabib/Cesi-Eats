<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Client</h1>
            <h4 style="font-weight: bolder;color:white;
        text-shadow: 5px 5px 5px black;">
              Bienvenue sur votre espace Client
            </h4>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      
      
      <div class="section section-contacts">
        <center><h1>Panier</h1></center>
        <div class="" style="margin-left: 150px;">
            <div class="">
        <div class="">
            
          
          
<div style="padding-top:50px;">
    <div class="" style="width: 1000px;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
	    <table id="cart" class="table bg-light" style="background: white">
    		<thead style="background-color: ;width: 500px;">
					<tr>
            <th style="width:50%">Produit</th>
            <th style="width:10%">Prix</th>
            <th style="width:20%">Photo du produit</th>
            <th style="width:20%">Action sur le produit</th>
          </tr>
        </thead>
        <tbody style="text-align: center;">
          <tr style="background: ;box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;" :class="{ active: index == currentIndex }"
          v-for="(Article, index) in Articles"
          :key="index">
						<td data-th="Product" >
							<div class="row">
								<div class="col-sm-2 hidden-xs"></div>
								<div class="col-sm-10">
									<h4 style="font-weight: bolder;" class="nomargin">{{Article.name}}</h4>
									<p>Description</p>
                </div>
              </div>
            </td>
            <td style="font-weight: bolder;" data-th="Price">{{Article.price}} DA</td>
            <td><img class="img-fluid" style="width:500px;height:100px;margin: 10px;" :src="'http://127.0.0.1:4000\\'+Article.picture.path" alt="Card image cap"></td>
            <td class="actions" data-th="">
              <md-button class="md-danger"><md-icon>delete</md-icon></md-button>								
            </td>
          </tr>            
        </tbody>
        <tfoot>
          
            
             <div><center><h3 style="font-weight: 700;" for="payment">Méthode de paiement </h3></center></div>
              <div class="select">
                 <select name="format" id="format" >
                 <option v-bind="order.payementMethod='Paiement main a main'"
                  >Paiement Main a main </option>
                  <option v-bind="order.payementMethod='Paiement En ligne'"
                  >Paiement En ligne</option>
                </select>
              </div>
           
          <tr>
            <td style="padding-top: 50px;"><a href="/client/displayarticle" class="btn btn-warning"><md-button class="md-primary" ><i class="fa fa-angle-left"></i> Continue vos achats</md-button></a></td>
            <td colspan="0" class="hidden-xs"></td>
            <td  class="hidden-xm text-center"><strong><p style="width: 120px;padding-top: 50px;">Total: {{this.order.total}} DA</p></strong></td>
            
            
            
            
            
            
            
          
          
          <td style="padding-top: 50px;"><md-button 
                class="md-success" style="width: 200px;"
                @click="classicModal = true; saveorder()"
                >Commander 
            <i class="fa fa-angle-right"></i></md-button></td>
              
              <modal v-if="classicModal" @close="classicModalHide">
                <template slot="header">
                  <h4 class="modal-title" style="font-weight: 700;">Succès</h4>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body">
                  <p>
                    Votre commande a été ajouté avec succès
                  </p>
                </template>

                <template slot="footer">
                  <md-button
                    class="md-danger md-simple"
                    @click="classicModalHide"
                    >Close</md-button
                  >
                </template>
              </modal>  
          
          
          
          
          
          </tr>
        </tfoot>
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
import ArticleService from "@/services/ArticleService";
import CartService from "@/services/CartService";
import OrderService from "@/services/OrderService";
import NotificationService from "@/services/NotificationService";
import JQuery from 'jquery'
window.$ = JQuery
var ids_cart = CartService.getCookie('testuser');
import { Modal } from "@/components";

export default {
                     classicModal: false,
components: {
    Modal
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
        id_restaurant : 'testidrestaurant',
        id_client : 'testidclient'
      };
      var NotificationData = {
        type_user : "restaurateur",
        id_restaurant : 'testidrestaurant',
        message : "une Commande de hamster"
      }
      OrderService.post(data)
        .then(response => {
          console.log(response.data);
            NotificationService.post(NotificationData)
            .then(response => {
              
              console.log(response.data);
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
select {
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    appearance:none;
    outline:0;
    box-shadow:none;
    border:0!important;
    background: white;
    font-weight: 700;
    background-image: none;
    flex: 1;
    padding: 0 .5em;
    color:black;
    cursor:pointer;
    font-size: 1em;
    font-family: 'Open Sans', sans-serif;
 }
 select::-ms-expand {
    display: none;
 }
 .select {
    position: relative;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    width: 25em;
    height: 3em;
    line-height: 3;
    color: white;
    overflow: hidden;
    border-radius: .25em;
    margin-left: 20px;

 }
 .select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: black;
    cursor:pointer;
    pointer-events:none;
    transition:.25s all ease;
 }
 .select:hover::after {
    color: white;
 }
</style>
