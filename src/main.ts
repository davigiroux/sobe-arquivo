import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Autenticador from "./servico/autenticador";
import { firestorePlugin } from "vuefire";

const autenticador = new Autenticador();

autenticador.inicializarAutenticacao();

Vue.config.productionTip = false;
Vue.use(firestorePlugin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
