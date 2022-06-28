<template>
    
    <div>
        <nav class="navbar navbar-expand-lg" style="background:black;height:80px;">
  <a class="navbar-brand" href="/home" style="margin-left:40px;font-size:40px;color:white;font-family:Helvetica"">Cesi</a>
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
        <CommandeList/>




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





<script >
import CommandeList from '@/components/LivreurComponents/CommandeList';


import NotificationService from "@/services/NotificationService.js";
import { io } from 'socket.io-client';
import JQuery from 'jquery';
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
    components: {
    CommandeList
  },
    methods : {
    retrieveNotifications() {
      this.socket.on('connect', connectUser);
      var sio = this.socket;
      function connectUser () {  // Called whenever a user signs in
        var userId = 20 // Retrieve userId
        if (!userId) return;
        sio.emit('userConnected',  userId);
      }
        NotificationService.getbyiduser(20)
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
          document.title = "Livreur | CesiEats"
      },
  }
</script>
<!-- <script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommandeList from '@/components/LivreurComponents/CommandeList.vue';



@Component({
  components: {
    CommandeList,
  },
})

export default class LivreurView extends Vue {
    created(){
        document.title = "Livreur | CesiEats"
    }
  }
</script> -->
<style>
  @import '@/assets/css/Livreur.css';
</style>