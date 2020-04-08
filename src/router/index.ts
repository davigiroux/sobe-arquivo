import Vue from "vue";
import VueRouter from "vue-router";
import InicioView from "../views/Inicio.vue";
import LoginView from "../views/Login.vue";
import CadastrarView from "../views/Cadastrar.vue";
import UploadView from "../views/Upload.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: InicioView
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView
  },
  {
    path: "/arquivo",
    name: "Arquivo",
    component: UploadView
  },
  {
    path: "/cadastrar",
    name: "Cadastrar",
    component: CadastrarView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
