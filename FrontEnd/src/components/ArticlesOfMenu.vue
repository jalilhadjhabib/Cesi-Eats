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
<div>

<div style="padding-top:150px;">
<!-- Start Content -->
 <div class="bgmenu">

<div id="home" class="w3-content" style="width:600px;">
<center><h1 style="font-size: 45px;
    font-family: UberMove, sans-serif;
    font-weight: bolder;
    text-shadow: 5px 5px 5px white;color:black;width: 400px;">Tableau d'édition des articles</h1></center>
<!-- Menu -->
<div id="menu" class="w3-container w3-black w3-xxlarge w3-padding-60">

<div class="w3-row w3-center w3-border w3-border-dark-grey">
<div><strong><p style="padding-top:20px;">Les articles du menu</p></strong></div>
</div>

<div id="pizza" class="w3-container w3-white w3-padding-32">
  <center>
<tr  :class="{ active: index == currentIndex }"
          v-for="(Article, index) in Articles"
          :key="index">
<p style="font-size:30px;"><b>{{Article.name}}</b> <span class="w3-right w3-tag w3-dark-grey w3-round">{{Article.price}} DA</span>
<div>
    <img class="img-fluid" style="width:150px;height:150px;" :src="'http://127.0.0.1:4000\\'+Article.picture.path" alt="Card image cap">
</div>
<div>
<button @click="DropArticle(Article._id)"  class="btn btn-md mx-1 btn-danger" >Supprimer l'article</button>
        <router-link :to="{path : '/restaurateur/editarticle', query : {id_article :Article._id}}" class="btn btn-md mx-1 btn-warning">Editer l'article</router-link>
</div>
</p>

<hr>

</tr>
</center>


</div>
</div>
</div>
<!-- End Content -->
</div>
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
  
</template>
<style>@import '../assets/css/Navbar.css';</style>
<script>
import ArticleService from "../services/ArticleService";
export default {
  name: "Articles-list",
  data() {
    return {
      Articles: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
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
