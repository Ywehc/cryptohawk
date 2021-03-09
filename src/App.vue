<template>
  <div id="app">
    <Nav class="nav" />
    <MobileGrid v-if="windowWidth < 768" />
    <DesktopGrid v-else/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import MobileGrid from './components/MobileGrid.vue';
import DesktopGrid from './components/DesktopGrid.vue';

export default {
  components: {
    Nav,
    Footer,
    MobileGrid,
    DesktopGrid,
  },
  data() {
    return {
      // eslint-disable-next-line no-restricted-globals
      windowWidth: screen.width,
    };
  },
};
</script>

<style lang="scss">
#app {
  background: $darkest;
}
@media only screen and (min-width: 996px) {
  .nav {
    min-height: 5vh;
  }
  .main {
    min-height: 86vh;
  }
  .footer {
    min-height: 5vh;
  }
}
</style>
