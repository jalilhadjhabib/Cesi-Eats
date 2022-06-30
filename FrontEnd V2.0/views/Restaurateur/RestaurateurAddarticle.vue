<template>
  <div class="wrapper">
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
        <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
            <center><h1>Ajouter un article</h1></center>
          
            <div>
              <div class="md-layout">
        <div
          class="md-layout-item md-size-25 md-large-size-100 md-large-size-50 md-medium-size-25"
        >
          <md-field>
            <md-input placeholder="Nom de l'article" type="text" 
        class="form-control"
        id="name"
        required
        v-model="article.name"
        name="name"></md-input>
          </md-field>
        </div>
        
        </div>
        <div class="md-layout">
          <div
          class="md-layout-item md-size-25 md-large-size-100 md-large-size-50 md-medium-size-25"
        >
          <md-field>
            <md-input placeholder="Prix de l'article" type="number" 
        required
        v-model="article.price"
        name="price"></md-input>
          </md-field>
        </div>
        </div>
        <div class="custom-file form-group" style="padding-top: 20px;">
       <center><input  type="file"  
        id="picture" ref="picture" v-on:change="handleFileUpload()" style="width:"></center>
    
    </div>
    <div class="text-center my-3" style="padding-top: 20px;">
        



<md-button 
                class="md-danger"
                @click="classicModal = true; saveArticle()"
                ><md-icon>add</md-icon> Ajouter</md-button>
              
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
                    Votre article a été ajouté avec succès
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
import { Modal } from "@/components";

import JQuery from 'jquery'
window.$ = JQuery
let data = new FormData();  

export default {
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
      

      article: {
        id: null,
        name: "",
        price: "",
        picture: "",
        id_menu :"",
        published: false
      },
      submitted: false

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
    saveArticle() {
    data.append('name', this.article.name);
    data.append('price', this.article.price);
    data.append('id_menu', this.$route.query.id_menu);

    console.log(this.article);
      ArticleService.post(data)
        .then(response => {
          this.article.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newArticle() {
      this.submitted = false;
      this.article = {};
    },
    handleFileUpload(){
    this.picture = this.$refs.picture.files[0];
    console.log(this.picture);
    data.append('picture', this.picture);
  }
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
