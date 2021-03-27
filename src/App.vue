<template>
  <div id="app">
    <Header class="header" />
    <MobileGrid class="d-sm-block d-lg-none" />
    <DesktopGrid class="d-none d-lg-block"/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MobileGrid from './components/MobileGrid.vue';
import DesktopGrid from './components/DesktopGrid.vue';

export default {
  components: {
    Header,
    Footer,
    MobileGrid,
    DesktopGrid,
  },
};
</script>

<style lang="scss">
#app {
  background: $darkest;
  min-height: 100vh;
}
</style>
