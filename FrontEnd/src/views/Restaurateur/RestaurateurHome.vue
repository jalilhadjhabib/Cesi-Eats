<template>

  <!--<div class="text-center my-3">
      <ul>
        <li>Notification</li>
        <li 
        :class="{ active: index == currentIndex }"
          v-for="(Notification, index) in Notifications"
          :key="index"
        >{{Notification.message}}</li>
      </ul>
    </div>-->


  <div id="app">
    
    <nav class="navbar navbar-expand-lg" style="background:black;height:80px;">
  <a class="navbar-brand" href="/home" style="margin-left:40px;font-size:40px;color:white;font-family:Helvetica">Cesi</a>
    <a class="navbar-brand" href="/home" style="font-size:40px;color:#64F58D;font-family:Helvetica">Eats</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <a class="nav-link waves-effect waves-light ml-auto" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <i class="fa fa-bell" style="color: white;font-size: 35px;"></i>
            </a>
            <div style="width: 200px;" class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
              <p>
        <center><h4>Vos Notification</h4></center>
        <center id="notif"><p 
        :class="{ active: index == currentIndex }"
          v-for="(Notification, index) in Notifications"
          :key="index" style="background-color: #e8dcb9;color:black;text-align:center;width:150px;font-weight: 700;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;padding: 10px;"
        >{{Notification.message}}</p></center>
      </p>
            </div>
</nav>

<div>
<div style="padding-top:150px;">

<strong><h1 style="color:black;font-weight:700;">Restaurateur BackEnd</h1></strong>

<center>
<div style="background:white;height:400px;width:700px;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;">
     
    <div class="form-group" style="padding-top:20px;">
        
    </div>
    
  


    <div class="text-center my-3">
     
      <a href="/restaurateur/addmenu">
        <button class="btn btn-light" style="background-color:black;color:white;width:150px;">Ajouter un Menu</button>
    </a>
    </div>
        <div class="text-center my-3">
          <a href="/restaurateur/displaymenu">
        <button class="btn btn-light" style="background-color:black;color:white;width:300px;">Tableau d'édition des menus</button>
        </a>
    </div>
    <div class="text-center my-3">
          <a href="/restaurateur/displayarticle">
        <button class="btn btn-light" style="background-color:black;color:white;width:300px;">Tableau d'édition des articles</button>
        </a>
    </div>
    <div class="text-center my-3">
          <router-link  :to="{path : '/restaurateur/displayCommandes', query : {id_restaurateur :'testidrestaurant'}}" >
        <button class="btn btn-light" style="background-color:black;color:white;width:300px;">Tableau des Commandes</button>
        </router-link>
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


  




</template>
<!-- <script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenusAdd from '@/components/RestaurateurComponents/MenuAdd.vue';
import MenuList from '@/components/RestaurateurComponents/MenuList.vue';


@Component({
  components: {
    MenusAdd,
    MenuList
  },
})
export default class Restaurateur extends Vue {
    created(){
        document.title = "Restaurateur"
    }

  }
</script> -->
<script>
import { Component, Vue } from 'vue-property-decorator';
import MenusAdd from '@/components/RestaurateurComponents/MenuAdd.vue';
import MenuList from '@/components/RestaurateurComponents/MenuList.vue';
import NotificationService from "@/services/NotificationService";
import { io } from 'socket.io-client';
import JQuery from 'jquery'
window.$ = JQuery


export default  {
  data() {
    return {
      Notifications: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
      socket : io('http://localhost:4000', { transports: ['websocket', 'polling', 'flashsocket']})
    };
  },
  methods: {
    retrieveNotifications() {
      this.socket.on('connect', connectUser);
      var sio = this.socket;
      function connectUser () {  // Called whenever a user signs in
        var userId = 10 // Retrieve userId
        if (!userId) return;
        sio.emit('userConnected',  userId);
      }
        NotificationService.getbyiduser(10)
        .then(response => {
            this.Notifications = response.data ;
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    },
    receivenotification (){
      var sio = this.socket;
       sio.on('receivenotif',function(data){
        $( "#notif" ).append( "<p>"+data.message+"</p>" );
        $(".fa-bell").addClass('text-danger');
      });

    }
  },
  mounted() {
    this.retrieveNotifications();
    this.receivenotification();
  },
  created(){
        document.title = "Restaurateur"
    }
};

</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>

<style>
  @import '@/assets/css/Restaurateur.css';
</style>