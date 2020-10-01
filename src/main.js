import "./assets/main.css";

import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import search from "./store/modules/search";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    search,
  },
});

Vue.prototype.$store = store;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
