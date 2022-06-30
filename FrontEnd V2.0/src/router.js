import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Restaurateur from "./views/Restaurateur/RestaurateurHome.vue";
import RestaurateurNavbar from "./layout/RestaurateurNavbar.vue";
import RestaurateurAddmenu from "./views/Restaurateur/RestaurateurAddmenu.vue";
import RestaurateurDisplaymenu from "./views/Restaurateur/RestaurateurDisplaymenu.vue";
import RestaurateurAddarticle from "./views/Restaurateur/RestaurateurAddarticle.vue";
import RestaurateurDisplayarticle from "./views/Restaurateur/RestaurateurDisplayarticle.vue";
import RestaurateurEditarticle from "./views/Restaurateur/RestaurateurEditarticle.vue";
import RestaurateurEditmenu from "./views/Restaurateur/RestaurateurEditmenu.vue";
import RestaurateurArticlelist from "./views/Restaurateur/RestaurateurArticlelist.vue";
import RestaurateurCommandeList from "./views/Restaurateur/RestaurateurCommandeList.vue";
import RestaurateurRegister from "./views/Restaurateur/RestaurateurRegister.vue";
import ClientNavbar from "./layout/ClientNavbar.vue";
import Client from "./views/Client/Client.vue";
import ClientDisplayarticle from "./views/Client/ClientDisplayarticle.vue";
import ClientCart from "./views/Client/ClientCart.vue";
import LivreurNavbar from "./layout/LivreurNavbar.vue";
import Livreur from "./views/Livreur/Livreur.vue";
import LivreurCommandelist from "./views/Livreur/LivreurCommandelist.vue";
import LivreurRegister from "./views/Livreur/LivreurRegister.vue";
import LivreurRegisterNavbar from "./layout/LivreurRegisterNavbar.vue";
import ManagerNavbar from "./layout/ManagerNavbar.vue";
import Manager from "./views/Manager/Manager.vue";
import ManagerClientList from "./views/Manager/ManagerClientList.vue";
import ForgetPassword from "./views/ForgetPassword.vue";
import Register from "./views/Register.vue";



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Home, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/home",
      name: "home",
      components: { default: Home, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 500 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/restaurateur",
      name: "restaurateur",
      components: { default: Restaurateur, header: RestaurateurNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/restaurateur/register",
      name: "restaurateurregister",
      components: { default: RestaurateurRegister, header: LivreurRegisterNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 500 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/restaurateur/addmenu",
      name: "restaurateuraddmenu",
      components: { default: RestaurateurAddmenu, header: RestaurateurNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/restaurateur/displaymenu",
      name: "restaurateurdisplaymenu",
      components: { default: RestaurateurDisplaymenu, header: RestaurateurNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/restaurateur/addarticle",
      name: "restaurateuraddarticle",
      components: { default: RestaurateurAddarticle, header: RestaurateurNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/restaurateur/articleofmenu",
      name: "restaurateurdisplayarticle",
      components: { default: RestaurateurDisplayarticle, header: RestaurateurNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/restaurateur/editarticle",
      name: "restaurateureditarticle",
      components: { default: RestaurateurEditarticle, header: RestaurateurNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/restaurateur/editmenu",
      name: "restaurateureditmenu",
      components: { default: RestaurateurEditmenu, header: RestaurateurNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/restaurateur/displayarticle",
      name: "restaurateurdisplayarticle",
      components: { default: RestaurateurArticlelist, header: RestaurateurNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/restaurateur/displayCommandes",
      name: "restaurateurcommandelist",
      components: { default: RestaurateurCommandeList, header: RestaurateurNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/client",
      name: "client",
      components: { default: Client, header: ClientNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/client/displayarticle",
      name: "clientdisplayarticle",
      components: { default: ClientDisplayarticle, header: ClientNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/client/cart",
      name: "clientcart",
      components: { default: ClientCart, header: ClientNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/livreur",
      name: "livreur",
      components: { default: Livreur, header: LivreurNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/livreur/listcommande",
      name: "livreurlistcommande",
      components: { default: LivreurCommandelist, header: LivreurNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/livreur/register",
      name: "livreurregister",
      components: { default: LivreurRegister, header: LivreurRegisterNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 500 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/manager",
      name: "manager",
      components: { default: Manager, header: ManagerNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/manager/clientlist",
      name: "managerclientlist",
      components: { default: ManagerClientList, header: ManagerNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 10 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/forget-password",
      name: "forgetPassword",
      components: { default: ForgetPassword, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 500 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/register",
      name: "register",
      components: { default: Register, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 500 },
        footer: { backgroundColor: "black" }
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
