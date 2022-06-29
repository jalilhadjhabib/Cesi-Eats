<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Livreur</h1>
            <h4 style="font-weight: bolder;color:white;
        text-shadow: 5px 5px 5px black;">
              Bienvenue sur votre espace Livreur
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
            <center><h1>Livreur</h1></center>
          <md-card>
            <carousel
              :per-page="1"
              loop
              :speed="700"
              autoplay
              :autoplay-timeout="5000"
              :mouse-drag="false"
              navigationEnabled
              navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
              navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
            >
              <slide>
                
                <img :src="carousel1" alt="carousel1" />
              </slide>
              <slide>
                
                <img :src="carousel2" alt="carousel2" />
              </slide>
              <slide>
                
                <img :src="carousel3" alt="carousel3" />
              </slide>
            </carousel>
          </md-card>
        </div>
      </div>
          </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
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
      name: null,
      email: null,
      message: null,

       classicModal: false,
      selectedDate: new Date("2018/03/26"),
      carousel1: require("@/assets/img/restaurateur.jpg"),
      carousel2: require("@/assets/img/restaurateur2.jpg"),
      carousel3: require("@/assets/img/restaurateur3.jpg"),

    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
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
