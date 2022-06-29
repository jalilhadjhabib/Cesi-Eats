import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";
import 'jquery'

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use({
  install: function(Vue, options){
      Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
      }
  });
  Vue.config.productionTip = false
  Vue.prototype.$hostname = 'http://localhost:2140'
const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
