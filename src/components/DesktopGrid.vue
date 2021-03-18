<template>
    <div class="desktop-grid">
      <h2>{{ $t('message.brand.description') }}</h2>
      <div class="container">
        <DesktopNav class="nav"/>
        <router-view />
        <Prices class="sidebar d-none d-lg-block" />
      </div>
    </div>
</template>

<script>
import DesktopNav from './DesktopNav.vue';
import Prices from '../views/Prices.vue';

export default {
  components: { Prices, DesktopNav },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.desktop-grid {
  padding-top: 40px;
}
h2 {
  color: $lightest;
  font-size: 26px;
  width: 90%;
  margin: 80px auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}
.nav {
  width: 20%;
}
.cards {
  padding-bottom: 40px;
  width: 60%;
}
.sidebar {
  width: 20%;
}
</style>
