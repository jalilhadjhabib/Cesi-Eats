<template>
<div>
  



 
<div class="">
  <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">    


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
<div>

<div style="padding-top:150px;">



<center>
<div style="background:white;height:500px;width:700px;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;">
    
    <div class="form-group" style="padding-top:20px;">
      <div style="width:500px;background:white;height:100px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"><strong><h1 style="padding-top:20px;">Ajouter un Menu</h1></strong></div>
        <label style="font-weight:700;font-size:40px;text-align:left;"></label>
        <input placeholder="Nom du menu" type="text" 
        class="form-control"
        id="name"
        required
        v-model="menu.name"
        name="name" style="padding: 0.875rem 1rem;
  font-size: .875rem;
  width: 500px;
  border: none;
  height: 4rem!important;font-family: Muli,Merriweather,Georgia,serif;border-style: solid;">
    </div>
    <div class="form-group">
        <label></label>
        <input placeholder="Prix du menu" type="number" 
        required
        v-model="menu.price"
        name="price"
        class="form-control" style="padding: 0.875rem 1rem;
  font-size: .875rem;
  width: 500px;
  border: none;
  height: 4rem!important;font-family: Muli,Merriweather,Georgia,serif;border-style: solid;">
    </div>
    <div class="custom-file form-group">
       <center><input  type="file"  
        id="picture" ref="picture" v-on:change="handleFileUpload()" style="width:"></center>
    
    </div>



    <div class="text-center my-3">
        <button @click="saveMenu" class="btn btn-light" style="background-color:black;color:white;width:80px;">Ajouter</button>
    </div>
    
</div>
</center>
</div></div>
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
  


</div>
</template>
<style>@import '../assets/css/Navbar.css';</style>







    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class MenuAdd extends Vue created(){
    created(){
        document.title = "Restaurateur - Ajouter un menu"
    }
  }
</script>
<style>
  @import '../assets/css/AddMenu.css';
</style>
<script>
import MenuService from "../services/MenuService.js";

let data = new FormData();  
export default {
  name: "MenuAdd",
  data() {
    return {
      menu: {
        id: null,
        name: "",
        price: "",
        picture: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
       
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
  }
  }
};
</script>
