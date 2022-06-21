<template>
 <div class="Login">

        
        <section class="vh-100 gradient-custom">
  <div class="container py-3 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">
        <form>
            <h3>Sign In</h3>
 
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input id="typepass" type="password" class="form-control form-control-lg" />
                <input type="checkbox" onclick=Toggle()>
                        <b>Show Password</b>
            </div>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
 
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
 
            
 
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    </div>

</template>
<script>
 function Toggle() {
            var temp = document.getElementById("typepass");
            if (temp.type === "password") {
                temp.type = "text";
            }
            else {
                temp.type = "password";
            }
        }

</script>
<script>
const axios = require('axios');
import sqlApi from '@/services/sqlApi.js'

export default {
  // Properties returned from data() becomes reactive state
  // and will be exposed on `this`.
 data(){

    return{
         Mail:"",
         Password: ""
    }
 },
 }
</script>
