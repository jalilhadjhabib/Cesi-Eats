<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="black">
              <h4 slot="title" class="card-title">Mot de passe oublié</h4>
              
              <p slot="description" class="description">Ou</p>
              <md-field aria-placeholder="gg" class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>E-mail</label>
                <md-input v-model="user.email" type="email"></md-input>
              </md-field>
              <md-button slot="footer" class="md-success">
                Envoyer l'email de confirmation
              </md-button>
            </login-card>
            <p class="text-center" style="padding-top: 20px;">
            <router-link id="login" to="/login">Vous avez déjà un compte ? Se Connecter</router-link></p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const axios = require('axios');
import { LoginCard } from "@/components";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",

    data(){

        return{
            user:{ 
                email:"",
                password:""
            }
        }
    },
    props: {
    header: {
      type: String,
      default: require("@/assets/img/bghome.jpg")
    }
  },

 computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    },
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
    methods:{
        toggleShow() {
      this.showPassword = !this.showPassword;
    },
        signup(){
            this.$router.push({ name: 'register'});
        },

        login(){
            if(this.checkValidation()){
                axios.get(this.$hostname +"/api/user/signin/"+this.user.email+"/"+this.user.password)
                .then(response=>{
                    if(response.data.userId > 0){
                        console.log(response.data.token);
                        localStorage.setItem('token', JSON.stringify(response.data.token));
                        response.data.token = "";
                        localStorage.setItem('user', JSON.stringify(response.data));
                        this.$router.push({name:"home"});
                    }
                })
                .catch(error => {
                    if(error.response) {
                        alert(error.response.data);
                    }
                })
            }
        },
        checkValidation(){
            if(!this.user.email){
                this.$refs.email.focus();
                alert("Enter votre email");
                return;
            }
            if(!this.user.password){
                this.$refs.psw.focus();
                alert("Enter votre mot de passe");
                return;
            }
            return true;
        },
        Toggle() {
            var temp = document.getElementById("typepass");
            if (temp.type === "password") {
                temp.type = "text";
                document.getElementById("togglePassword").className = "bi bi-eye-slash";

            }
            else {
                temp.type = "password";
                document.getElementById("togglePassword").className = "bi bi-eye";

            }
        }
    }
}
</script>







<style lang="css"></style>
