<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Vos plats préférés, directement à votre porte</h1>
            <h4 style="font-weight: bolder;color:white;
        text-shadow: 5px 5px 5px black;">
              Régalez-vous avec le service rapide de Cesi eats qui vous propose des choix de restaurants et des plats livrés directement chez vous.
            </h4>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">On se présente !</h2>
              <h5 class="description">
                Cesi Eats est un service de livraison de plats cuisinés lancé par A4 Oran en 2022 et basé à Oran, en Algérie. Les commandes sont prises via le site web de Cesi Eats auprès des restaurants partenaires et sont livrées par des coursiers indépendants.
              </h5>
            </div>
          </div>
          <div class="features text-center" style="padding-top: 50px;">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <a href="#">
                <div class="info">
                  <div class="icon icon-info">
                    <img style ="width:80px" src="@/assets/img/burger.jpg"/>
                  </div>
                  <h4 class="info-title">Nos Restaurants</h4>
                  <p>
                    Découvrez nos restaurants
                  </p>
                </div>
                </a>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <a href="#">
                <div class="info">
                  <div class="icon icon-success">
                    <img style ="width:80px" src="@/assets/img/cadi.jpg"/>
                  </div>
                  <h4 class="info-title">Cesi Eats Articles</h4>
                  <p>
                    Découvrez nos Articles
                  </p>
                </div>
                </a>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <a href="#">
                <div class="info">
                  <div class="icon icon-danger">
                    <img style ="width:105px" src="@/assets/img/menuhome.png"/>
                  </div>
                  <h4 class="info-title">Nos Menus</h4>
                  <p>
                    Découvrez nos Menus
                  </p>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Faites votre choix !</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <a href="/restaurateur/register">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="resto"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                        Devenez Restaurateur 
                      <br />
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Devenez restaurateur et préparez vos meilleurs commandes pour vos clients
                      </p>
                    </md-card-content>
                  </md-card>
                  </a>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <a href="/register">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="client"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Devenez Client
                      <br />
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Inscrivez-vous en tant que client et commandez des plats comme au restaurant
                      </p>
                    </md-card-content>
                  </md-card>
                  </a>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <a href="/livreur/register">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="livreur"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Devenez Livreur
                      <br />
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Inscrivez-vous en tant que livreur et travaillez avec nous pour livrer des commandes
                      </p>
                    </md-card-content>
                  </md-card>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout" id="newsletter">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Abonnez vous à notre newsletter pour ne rien rater !</h2>
              <h4 class="text-center description">
                Ne manquez pas nos excellentes offres & Recevez des offres de tous nos meilleurs restaurants par e-mail
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Votre Nom</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Votre E-mail</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-success">Abonnez-Vous</md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
            <div class="section text-center">
        <div class="container">
          <h2 class="title">Notre équipe !</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="djamel"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Mohamed Djamel Hemch
                      <br />
                      <small class="card-description text-muted">BackEnd - Sql</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description" style="padding-bottom: 20px;font-weight: 900;">
                        Chef de projet tayeb
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.instagram.com/djamel.thrash/"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="karim"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Karim Benoumeur Kanoun
                      <br />
                      <small class="card-description text-muted"
                        >Assistant BackEnd - Sql</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description" style="font-weight: 900;">
                        Je programme depuis Colibri tqt
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.instagram.com/karimkanoun_/"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="jalil"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Abdel Djalil Hadj Habib
                      <br />
                      <small class="card-description text-muted">FrontEnd - VueJS</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description" style="padding-bottom: 20px;font-weight: 900;">
                        Zewa9 Tbi3
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.instagram.com/jalil_hadjhabib/"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="said"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Said Amokrane Belgacem
                      <br />
                      <small class="card-description text-muted">BackEnd - MongoDB</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description" style="font-weight: 900;">
                        Go turquie après la soutenance
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.instagram.com/saidamokranebelgacem/"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
                            <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="shoukry"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Shoukry Mohamed Badani
                      <br />
                      <small class="card-description text-muted">Assistant BackEnd - MongoDB</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description" style="padding-bottom: 20px;font-weight: 900;">
                        On fait zehma on travaille
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="https://www.instagram.com/shoukry_2x67/"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
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
    },
    djamel: {
      type: String,
      default: require("@/assets/img/djamel.jpg")
    },
    jalil: {
      type: String,
      default: require("@/assets/img/jalil.jpg")
    },
    said: {
      type: String,
      default: require("@/assets/img/said.jpg")
    },
    karim: {
      type: String,
      default: require("@/assets/img/karim.jpg")
    },
    shoukry: {
      type: String,
      default: require("@/assets/img/shoukry.jpg")
    },
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
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
