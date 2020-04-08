<template>
  <div>
    <FormularioDeEnvioDeArquivo />
  </div>
</template>
<script>
import FormularioDeEnvioDeArquivo from "@/components/FormularioDeEnvioDeArquivo";

export default {
  name: "UploadView",
  components: {
    FormularioDeEnvioDeArquivo
  },
  created() {
    console.log("Teste");
  }
};
</script>
