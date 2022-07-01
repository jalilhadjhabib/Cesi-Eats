<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral" >
      <div class="md-toolbar-section-start">
        <a href="/livreur">
          <img alt="Vue logo" src="@/assets/logo.png" class="logoimg" style="width: 15%;">
        </a>
      </div>
      <div class="md-toolbar-section-end">
        <md-button 
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-toolbar class="md-info" style="box-shadow: none;">
            <div class="md-toolbar-row">
              
              <div class="md-toolbar-section-end">
                <md-button
                  class="md-just-icon md-simple md-white md-toolbar-toggle"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </md-button>

                <div class="md-collapse">
                  <md-list>
                    <li class="md-list-item">
                      <a
                        href="javascript:void(0)"
                        class="md-list-item-router md-list-item-container md-button-clean dropdown"
                      >
                      <div class="md-list-item-content">
                          <drop-down direction="down">
                            <md-button
                              slot="title"
                              class="md-button md-button-link md-white md-simple md-just-icon"
                              data-toggle="dropdown"
                            >
                              <md-icon>notifications</md-icon>
                            </md-button>
                            <ul class="dropdown-menu dropdown-menu-right">
                              <center><li class="dropdown-header">Vos notifications</li></center>
                            <li id="notif">
                                <p :class="{ active: index == currentIndex }"
          v-for="(Notification, index) in Notifications"
          :key="index" style="color:black;margin:20px;" class="dropdown-item"
                                  >{{Notification.message}}</p>
                                
                              </li>

                               
                              
                              
                            </ul>
                          </drop-down>
                        </div>
                        <div class="md-list-item-content">
                          
                            <a href="#">
                            <md-button
                              slot="title"
                              class="md-button md-button-link md-white md-simple md-just-icon"
                              
                            >
                              <router-link :to="{path : '/livreur/profile'}" ><md-icon>person</md-icon></router-link>
                            </md-button></a>
                            
                          
                        </div>
                        <div class="md-list-item-content">
                          <drop-down direction="down">
                            <md-button
                              slot="title"
                              class="md-button md-button-link md-white md-simple md-just-icon"
                              data-toggle="dropdown"
                            >
                              <md-icon>settings</md-icon>
                            </md-button>
                            <ul class="dropdown-menu dropdown-menu-right">
                              <center><li class="dropdown-header">Paramètre</li></center>
                              <li>
                                <a href="/livreur/listcommande" class="dropdown-item"
                                  >La liste des commandes</a
                                >
                              </li>
                              
                              <li class="dropdown-divider"></li>
                              <li>
                                <a href="#" class="dropdown-item"
                                  >Se déconnecter</a
                                >
                              </li>
                            </ul>
                          </drop-down>
                        </div>
                      </a>
                    </li>
                  </md-list>
                </div>
              </div>
            </div>
          </md-toolbar>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>



<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}
import NotificationService from "@/services/NotificationService";
import MobileMenu from "@/layout/MobileMenu";
import { io } from 'socket.io-client';
import JQuery from 'jquery';
window.$ = JQuery
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    Notifications: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
 socket : io('http://localhost:4000', { transports: ['websocket', 'polling', 'flashsocket']}),

      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    retrieveNotifications() {
      var sio = this.socket;
        sio.on('connect', connectUser);
        function connectUser () {  // Called whenever a user signs in
        var userId = 30 // Retrieve userId
        if (!userId) return;
        sio.emit('userConnected',  userId);
      }
      sio.on('receivenotif',function(data){
        $("#notif").prepend(`
        <p style="color:black;margin:20px;" class="dropdown-item">`+data.message+`</p>
        `);
        console.log(data);
      });
        NotificationService.getbyiduser(30)
        .then(response => {
            this.Notifications = response.data ;
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    },
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
     this.retrieveNotifications();
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
