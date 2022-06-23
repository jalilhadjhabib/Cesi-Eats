<template>
  <div>

     <NavBar />
     <Header />
     

     

     <div data-aos-duration="500" data-aos="fade-right" class="container">

      <div id="rowheader">
  <a href="#" style="text-decoration: none;"><div class="item"><img style ="width:80px" src="@/assets/images/burger.jpg"/>
  <div>
    <strong><p style="font-size: 20px;">Restaurants</p></strong>
    <center><p style="font-size: 15px;width: 200px;">Vos plats préférés comme au restaurant</p></center>
  </div>
  </div></a>
  <a href="/client/displayarticle" style="text-decoration: none;"><div class="item"><img style ="width:80px" src="@/assets/images/cadi.jpg"/>
  <div>
    <strong><p style="font-size: 20px;">Cesi Eats Articles</p></strong>
    <center><p style="font-size: 15px;width: 200px;">Découvrez nos articles</p></center>
  </div>
  </div></a>
  <a href="#" style="text-decoration: none;"><div class="item"><img style ="width:80px" src="@/assets/images/menuhome.png"/>
  <div>
   <strong><p style="font-size: 20px;padding-top:10px;">Nos Menus</p></strong>
    <center><p style="font-size: 15px;width: 200px;">Découvrez des menus préparé pour vous</p></center>
  </div>
  </div></a>
  
</div>
</div>


<div class="newsletter">
<center><strong><h1 class="newsletterh1">Abonnez vous à notre newsletter pour ne rien rater !</h1></strong></center>
<p style="color: white;text-shadow: 5px 5px 5px black;font-size: 18px;">Ne manquez pas nos excellentes offres & Recevez des offres de tous nos meilleurs restaurants par e-mail
</p>
<input id="newsletterinput" type="email" required="required" class="input is-large mvxs" placeholder="E-mail" />
    <div style="color: white; padding-top: 20px;text-shadow: 5px 5px 5px black;">
        <input type="checkbox">
      J'ai lu et accepté les Termes et conditions et la Politique de confidentialité
    </div>
    
    <div style="padding-top: 20px;">
      <button style="font-size: 1rem;background-color: #4a4a4a;
    border-color: transparent;height: 60px;width: 300px;color:white;font-weight: 700;">ABONNEZ-VOUS</button>
    </div>
</div>


<div style="height: 200px;background:white;"></div>




     <Footer />
     
</div>
  
</template>
<style>
  @import '@/assets/css/Navbar.css';
  @import '@/assets/css/Header.css';
  @import '@/assets/css/Home.css';
  @import '@/assets/css/Responsive.css';

</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/HomeComponents/NavBar.vue';
import Header from '@/components/HomeComponents/Header.vue';
import Footer from '@/components/HomeComponents/Footer.vue';



@Component({
  components: {
    NavBar,
    Header,
    Footer,
    
  },
})

export default class HomeView extends Vue {
    created(){
        document.title = "Accueil"
    }
  }
</script>
