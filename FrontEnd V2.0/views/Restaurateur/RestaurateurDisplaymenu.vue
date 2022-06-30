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
            <center><h1>Tableau d'édition des menus</h1></center>
          
            <div class="menu" >
  <center>
<tr  :class="{ active: index == currentIndex }"
          v-for="(Menu, index) in Menus"
          :key="index" class="menutr">
<div style="width: 500px;">
<h1>{{Menu.name}}</h1> 
<span class="w3-center w3-tag w3-dark-grey w3-round">{{Menu.price}} DA</span>
</div>
        <div style="padding-top: 20px;">
        <router-link class="btn" :to="{path : '/restaurateur/addarticle', query : {id_menu :Menu._id}}">
        <md-button class="md-success">Ajouter un article</md-button>  
</router-link>
<router-link class="btn" :to="{path : '/restaurateur/articleofmenu', query : {id_menu :Menu._id}}"><md-button class="md-primary">Voir les articles</md-button>  
</router-link></div>
<div>
<md-button class="md-danger" @click="DropMenu(Menu._id)">Supprimer le menu</md-button>
 <router-link :to="{path : '/restaurateur/editmenu', query : {id_menu :Menu._id}}"><md-button class="md-default">Editer le menu</md-button></router-link>
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
import MenuService from "@/services/MenuService.js";
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
      Menus: [],
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
    saveMenu() {
    data.append('name', this.menu.name);
    data.append('price', this.menu.price);
    
      MenuService.post(data)
        .then(response => {
          this.menu.id = response.data.id;
          console.log(response.data);
           
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newMenu() {
      this.submitted = false;
      this.menu = {};
    },
    handleFileUpload(){
    this.picture = this.$refs.picture.files[0];
    console.log(this.picture);
    data.append('picture', this.picture);
  },
  retrieveMenus() {
      MenuService.getAll()
        .then(response => {
          this.Menus = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    DropMenu(id){
      MenuService.delete(id)
        .then(response => {
          console.log(response.data);
          this.$router.go();
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
   mounted() {
    this.retrieveMenus();
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