<template>
  <div class="wrapper" >
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div 
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="black">
              <h4 slot="title" class="card-title">Inscrivez-vous pour devenir un restaurateur</h4>
              
              <p slot="description" class="description">Ou</p>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>Nom du restaurant</label>
                <md-input name="userName" v-model="user.userName"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>E-mail</label>
                <md-input v-model="user.email" name="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Mot de passe</label>
                <md-input v-model="user.password" type="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Confirmer votre mot de passe</label>
                <md-input v-model="user.repeatPassword" type="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>phone</md-icon>
                <label>Numéro de téléphone</label>
                <md-input v-model="user.Phone" type="tel"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>credit_card</md-icon>
                <label>Carte de crédit</label>
                <md-input v-model="user.creditCard" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" 
                autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>house</md-icon>
                <label>Adresse</label>
                <md-input v-model="user.Address" type="adress"></md-input>
              </md-field>
              
              <md-button v-on:click="signup" slot="footer" class="md-success">
                S'inscrire
              </md-button>
            </login-card>
            <p class="text-center" style="padding-top: 20px;">
            <router-link id="login" to="/login" style="font-weight: 900;color:lightgray;">Vous êtes déjà un Restaurateur ? Se Connecter</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import { LoginCard } from "@/components";
const axios = require('axios');
import sqlApi from '@/services/sqlApi.js'

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  // Properties returned from data() becomes reactive state
  // and will be exposed on `this`.
 data(){
    return{
       
        user:{ 
         userId:0,
         userName:"",
         email: "",
         password:"",
         repeatPassword:"",
         Phone:"",
         Address:"",
         creditCard:"",
         user_type:"Restorateur"
         },
    }
 },
 props: {
    header: {
      type: String,
      default: require("@/assets/img/bghome.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
 methods : {    
        back(){
            this.$router.push({ name : 'home'});
        },        
        checkValidation(){
            if(!this.user.userName){
                alert("Veuillez entrer votre nom !");
                return;
            }
               if(!this.user.email){                    
                alert("Veuillez entrer votre adresse mail !");
                return;
            }
             if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)){
                alert("Veuillez enter une Adress mail valide !");
                return;
            }
              if(!this.user.password){                    
                alert("Password required!");
                return;
            }
              if(this.user.password != this.user.repeatPassword){                    
                alert("Les mots de passes ne correspondent pas  !");
                return;
            }
            return true;
        },
        signup(){
            if(this.checkValidation()){
                axios.post(this.$hostname +"/api/user/registration", this.user)
                    .then(response => {
                        if (response.data.userId > 0){
                              this.$router.push({name:"login"});
                            alert("Vous êtes maintenant inscrit(e)!")
                            .then(() => {

                    
                            });
                        }else{
                            alert("Error : Something went wrong.");
                        }
                    })
                    .catch(error=>{
                        if (error.response){
                            alert(error.response.data);
                        }
                    });
            }
        },
        Toggle() {
            var temp = document.getElementById("typepass") ;
            var temp2 = document.getElementById("typepass2");
            if (temp.type === "password" && temp2.type === "password") {
                temp.type = "text";
                temp2.type = "text";
                document.getElementById("togglePassword").className = "bi bi-eye-slash";
            }
            else {
                temp.type = "password";
                temp2.type = "password";
                document.getElementById("togglePassword").className = "bi bi-eye";
            }
        },
 },
 }
</script>
<style>








