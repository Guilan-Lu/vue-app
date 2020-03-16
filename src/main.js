import Vue from "vue";
import vuetify from "./plugins/vuetify";
import firebase from "./plugins/firebase";
import "./plugins/vuetify";
import "./plugins/firebase";
import "./plugins/axios";
import "./plugins/vue-toasted";
import "./error";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const global = "abcd";

Vue.prototype.$global = global;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
