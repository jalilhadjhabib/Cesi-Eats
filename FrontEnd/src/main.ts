import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueMeta from 'vue-meta'


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery'

Vue.use({
  install: function(Vue, options){
      Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
      }
  });

Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueMeta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
