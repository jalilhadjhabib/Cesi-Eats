<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Développeur</h1>
            <h4 style="font-weight: bolder;color:white;
        text-shadow: 5px 5px 5px black;">
              Bienvenue sur votre espace Développeur
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
          <center><h1>Télecharger des composants</h1></center>


        


  <center><md-button class="md-danger" @mousedown="downloadFile">Télecharger NavBar composant</md-button></center>
  <center><md-button class="md-danger" @mousedown="downloadFile">Télecharger Header composant</md-button></center>
  <center><md-button class="md-danger" @mousedown="downloadFile">Télecharger Footer composant</md-button></center>
  <center><md-button class="md-danger" @mousedown="downloadFile">Télecharger LoginCard composant</md-button></center>
  <center><md-button class="md-danger" @mousedown="downloadFile">Télecharger RegisterCard composant</md-button></center>

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
  },
  
  methods: {
    downloadFile() {
      const me = this;
      fetch(me.file)
        .then((resp) => resp.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          // the filename you want
          a.download = me.name || "composant.vue";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(() => alert("oh no!"));
    },
  },
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
