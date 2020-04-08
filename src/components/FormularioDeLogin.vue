<template>
  <div>
    <h2>Faça o login para fazer seus uploads!</h2>

    <form @submit.prevent="efetuarLogin()" id="formLogin">
      <div class="formulario">
        <div class="form-input">
          <label for="email">Email</label>
          <input type="text" v-model="email" name="email" id="email" />
        </div>
        <div class="form-input">
          <label for="senha">Senha</label>
          <input type="password" v-model="senha" name="senha" id="senha" />
        </div>
        <button type="submit" class="botao botao-primario">Logar!</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Autenticador from "../servico/autenticador";
import Usuario from "../modelo/Usuario";

@Component
export default class FormularioDeLogin extends Vue {
  private email = "";
  private senha = "";
  private autenticador: Autenticador = new Autenticador();

  public async efetuarLogin(): Promise<void> {
    const usuario = new Usuario("", this.email, this.senha);
    await this.autenticador.autenticarUsuario(usuario);
    this.$router.push("/");
  }
}
</script>

<style scoped lang="scss">
#formLogin {
  background-color: #dfdfdf;
  padding: 50px 100px;
  border-radius: 3px;
  text-align: center;
  .formulario {
    width: 300px;
    padding-left: 38%;
    text-align: right;
    .form-input {
      label {
        display: block;
        text-align: left;
        padding: 10px 0;
      }
      input {
        width: 100%;
        padding: 5px;
        font-size: 18px;
        border-radius: 3px;
        border: 1px solid #fff;
        outline: none;
      }
    }
  }
}
</style>
