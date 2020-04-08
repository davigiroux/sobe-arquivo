<template>
  <nav class="nav">
    <ul>
      <li class="nav-titulo">
        <router-link to="/" class="nav-link">
          SobeArquivo
        </router-link>
      </li>
      <li class="nav-item">
        <a
          href=""
          class="nav-link"
          v-show="existeUsuarioLogado"
          @click="fazerLogout"
        >
          Sair
        </a>
      </li>
      <li class="nav-item">
        <router-link
          to="/arquivo"
          v-show="existeUsuarioLogado"
          class="nav-link"
        >
          Fazer upload
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" v-show="!existeUsuarioLogado" class="nav-link">
          Logar
        </router-link>
      </li>
      <li class="nav-item" v-show="!existeUsuarioLogado">
        <router-link to="/cadastrar" class="nav-link">
          Cadastre-se!
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../store/index";
import Autenticador from "../servico/autenticador";

@Component
export default class Menu extends Vue {
  private autenticador: Autenticador = new Autenticador();

  get existeUsuarioLogado(): boolean {
    return store.getters.usuarioEstaLogado;
  }

  public async fazerLogout(): Promise<void> {
    await this.autenticador.deslogar();
    this.$router.push("/");
  }
}
</script>

<style scoped lang="scss">
.nav {
  ul {
    padding: 0 30px;
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    background-color: #026977;
  }
  .nav-item {
    float: right;
    .nav-link {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;

      &:hover {
        background-color: #39aab9;
      }
    }
  }

  .nav-titulo {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 10px;
    font-size: 20px;
    text-decoration: none;

    .nav-link {
      display: block;
      color: white;
      text-align: center;
      text-decoration: none;
    }
  }
}
</style>
