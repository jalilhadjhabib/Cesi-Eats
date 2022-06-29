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
            <center><h1>Tableau d'édition des articles du menu</h1></center>
          
            <div class="menu" >
  <center>
<tr  :class="{ active: index == currentIndex }"
          v-for="(Article, index) in Articles"
          :key="index" class="menutr">
<div style="width: 500px;">
<h1>{{Article.name}}</h1> 
<span class="w3-center w3-tag w3-dark-grey w3-round">{{Article.price}} DA</span>
</div>
<div>
    <img class="img-fluid" style="width:150px;height:150px;padding-top: 20px;" :src="'http://127.0.0.1:4000\\'+Article.picture.path" alt="Card image cap">
</div>
<div>
<md-button @click="DropArticle(Article._id)"  class="md-danger" >Supprimer l'article</md-button></div>
<div><router-link :to="{path : '/restaurateur/editarticle', query : {id_article :Article._id}}" >
<md-button class="md-default">Editer l'article</md-button></router-link>
</div>
        


<hr>

</tr>
</center>


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
//import { Modal } from "@/components";

import JQuery from 'jquery'
window.$ = JQuery
let data = new FormData();  

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
      Articles: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",

       classicModal: false,
      

     
      

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
    retrieveArticlesofMenu() {
      ArticleService.getbymenu(this.$route.query.id_menu)
        .then(response => {
          this.Articles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    
    },
    DropArticle(id){
      ArticleService.delete(id)
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
    this.retrieveArticlesofMenu();
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