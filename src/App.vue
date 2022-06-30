<template>
  <div id="app">
    <div class="container-fluid p-0">
      <Header />
      <Navigator />
      <Container />
    </div>
  </div>
</template>

<script>
import Header from "./componentes/Header.vue";
import Navigator from "./componentes/Navigator.vue";
import Container from "./componentes/Container.vue";

export default {
  name: "App",
  mounted () {
  document.body.classList.add('body')
},

  components: {
    Header,
    Container,
    Navigator,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.body{background-color: #232323;}
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

 background-color: #232323;
  padding-top: 20px;
  
}
</style>