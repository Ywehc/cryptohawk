<template>
  <div id="app">
    <Nav class="nav" />
    <router-view class="main"/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  background: $darkest;
}
@media only screen and (min-width: 996px) {
  .nav {
    height: 5vh;
  }
  .main {
    height: 90vh;
  }
  .footer {
    height: 5vh;
  }
}
</style>
