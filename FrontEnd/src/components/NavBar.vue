<template>
<div>
<div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></div>

<!--NavBar-->
<nav class="navbar navbar-expand-md">
  <div>
    <b-button v-b-toggle.sidebar-backdrop style="color: white;
    background-color: transparent;
    border-color: transparent;text-shadow: 4px 4px 4px black;"><i class="fa fa-2xl fa-bars" style="font-size: 30px;"></i></b-button>

    <b-sidebar
      id="sidebar-backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      <div><b-button style="background-color: black; color:white;padding: 12px 16px;
    justify-content: center;width: 150px;font-weight: bolder;">Connexion</b-button></div>
      <div><b-button style="background-color: #EEEEEE; color:black;padding: 12px 16px;margin-top:20px;
    justify-content: center;width: 150px;font-weight: bolder;">Inscription</b-button></div>
    <div style="padding-top:100px;font-size:14px;"><a href="#" style="color:black;">Restaurateurs? Devenez partenaire ICI!</a></div>
    <div style="padding-top:20px;font-size:14px;"><a href="#" style="color:black;">Travaillez avec nous en tant que livreur !</a></div>
    <div>
        <center>
        <img alt="Vue logo" src="../assets/logo.png" class="sidemenulogo">
        </center>
    </div>
 <div>
        <center>
            <strong><p style="margin-top:50px;">Copyright © 2022. All rights reserved to Cesi Oran A4.</p></strong>
        </center>
    </div>
    </b-sidebar>
  </div>

        <div class="container">
            <span>
            <a href="/home" >
                <img alt="Vue logo" src="../assets/logo.png" class="logoimg">
            </a>
            </span>
           
            <!--<button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>-->
             <div id="navbarNav" class="col-md-5 col-lg-3 collapse navbar-collapse ml-5">
                <router-link to="/connect"><b-button style="position : relative;background: #FFFFFF;min-height: 48px;white-space: nowrap;border-radius: 500px;
      line-height: 20px;padding: 12px 16px;-webkit-box-pack: center;
    justify-content: center;    -webkit-box-align: center;
    align-items: center;width: auto;    font-weight: bolder;font-family: UberMoveText, sans-serif;box-sizing: border-box;
    color: #000000;font-size: 16px;box-shadow: 0px 0px 8px rgb(0 0 0 / 10%), 0px 4px 4px rgb(0 0 0 / 4%);"><i class="fa fa-user" style="font-size: 20px;"></i>
    Connexion</b-button></router-link>

    <div style="padding: 0 10px;"></div>
      <router-link to="/register"><b-button style="position : relative;background: black;min-height: 48px;white-space: nowrap;border-radius: 500px;
      line-height: 20px;-webkit-box-pack: center;
    justify-content: center;  -webkit-box-align: center;
    align-items: center;width: auto;    font-weight: bolder;font-family: UberMoveText, sans-serif;box-sizing: border-box;
    color: #000000;font-size: 16px;color: white;">Inscription</b-button></router-link>
            </div>
        </div>
       
        
    </nav>


  
  </div>
</template>
  <script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {}
</script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>
var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}
</script>

<script lang="ts">
  export default {
    data() {
      return {
        variant: 'dark',
      }
    }
  }
</script>