import Vue from "vue";
import Vuex from "vuex";
import Usuario from "../modelo/Usuario";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarioLogado: Usuario
  },
  mutations: {
    logarUsuario(state, usuario): void {
      state.usuarioLogado = usuario;
    }
  },
  getters: {
    usuarioEstaLogado: state => {
      return state.usuarioLogado !== null;
    }
  },
  actions: {},
  modules: {}
});
