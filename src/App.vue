<template>
  <div id="app">
    <Menu />
    <div class="conteudo">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    Menu
  },
  watch: {
    $route(to, from) {
      console.log(to);

      console.log(from);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Lato", sans-serif;
}
.conteudo {
  padding: 10px 200px;
  text-align: center;
}

.botao {
  padding: 10px 15px;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  margin: 10px 0;
}

.botao-primario {
  background-color: #026977;
  color: #fff;
}
</style>
