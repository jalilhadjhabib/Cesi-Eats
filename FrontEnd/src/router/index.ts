import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Auth/Connection.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Auth/ForgotPassword.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Auth/Registration.vue')
  },
  {
    path: "/restaurateur",
    alias: "/menu",
    name: "menu",
    component: () => import("../views/Restaurateur/RestaurateurHome.vue")
  },
  {
    path: "/restaurateur/register",
    name: "restaurateurregister",
    component: () => import("../views/Restaurateur/RestaurateurRegister.vue")
  },
  {
    path: "/restaurateur/displayCommandes",
    alias: "/menu",
    name: "menu",
    component: () => import("../components/RestaurateurComponents/CommandeList.vue")
  },
  {
    path: "/restaurateur/displayarticle",
    alias: "/article",
    name: "article",
    component: () => import("../components/RestaurateurComponents/ArticleList.vue")
  },
  {
    path: "/restaurateur/displaymenu",
    alias: "/menu",
    name: "menu",
    component: () => import("../components/RestaurateurComponents/MenuList.vue")
  },
  {
    path: "/restaurateur/addmenu",
    name: "addmenu",
    component: () => import("../components/RestaurateurComponents/MenuAdd.vue")
  },
  {
    path: "/restaurateur/addarticle",
    name: "addarticle",
    //params: true,
    component: () => import("../components/RestaurateurComponents/ArticleAdd.vue")
  },
  {
    path: "/restaurateur/articleofmenu/",
    name: "articleofmenu",
    //params: true,
    component: () => import("../components/RestaurateurComponents/ArticlesOfMenu.vue")
  },
  {
    path: "/restaurateur/editarticle",
    name: "ArticleEdit",
    component: () => import("../components/RestaurateurComponents/ArticleEdit.vue")
  },
  {
    path: "/restaurateur/editmenu",
    name: "MenuEdit",
    component: () => import("../components/RestaurateurComponents/MenuEdit.vue")
  },
  {
    path: '/livreur',
    name: 'livreur',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Livreur/LivreurHome.vue')
  },
  {
    path: '/livreur/register',
    name: 'livreurregister',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Livreur/LivreurRegister.vue')
  },
  {
    path: '/livreur/listcommande',
    name: 'livreur',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../components/LivreurComponents/CommandeList.vue')
  },
  {
    path: "/client/home",
    name: "client",
    component: () => import("../views/Client/ClientHome.vue")
  },
  {
    path: "/client/displayarticle",
    name: "article",
    //params: true,
    component: () => import("../components/ClientComponents/ArticleList.vue")
  },
  {
    path: "/client/cart",
    name: "displaycart",
    component: () => import("../components/ClientComponents/CartList.vue")
  },
  {
    path: "/manager",
    alias: "/manager",
    name: "manager",
    component: () => import("../views/Manager/ManagerHome.vue")
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
