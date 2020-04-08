<template>
  <div>
    <h2>Faça os seus uploads!</h2>

    <form @submit.prevent="fazerUpload()" id="formUpload">
      <div class="formulario">
        <div class="form-input">
          <label for="arquivo">Arquivo</label>
          <input type="text" v-model="arquivo" name="arquivo" id="arquivo" />
        </div>
        <button type="submit" class="botao botao-primario">Enviar!</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FormularioDeEnvioDeArquivo extends Vue {
  private arquivo = "";

  public async fazerUpload(): Promise<void> {
    console.log("Enviar arquivo");
  }
}
</script>

<style scoped lang="scss"></style>
