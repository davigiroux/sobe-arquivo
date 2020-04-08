<template>
  <div class="home">
    <h1 v-if="existeUsuarioLogado">
      Bem vindo, <strong>{{ nomeDoUsuarioLogado }}!!</strong>
    </h1>
    <h1 v-else>
      <router-link class="link" to="/login">Faça seu login</router-link> ou
      <router-link class="link" to="/cadastrar">Cadastre-se</router-link> para
      começar a subir seus arquivos!
    </h1>
  </div>
</template>

<script>
export default {
  name: "InicioView",
  computed: {
    nomeDoUsuarioLogado() {
      return this.$store.state.usuarioLogado.nome;
    },
    existeUsuarioLogado() {
      return this.$store.getters.usuarioEstaLogado;
    }
  }
};
</script>
<style lang="scss">
.home {
  .link {
    color: #026977;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      color: #15afc4;
    }
  }
}
</style>
