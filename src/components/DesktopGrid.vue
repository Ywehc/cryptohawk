<template>
    <div class="desktop-grid">
      <h2>{{ $t('message.brand.description') }}</h2>
      <div class="row container px-0">
        <DesktopNav class="col-lg-2 nav"/>
        <router-view class="col-lg-7 main" />
        <Prices class="col-lg-2 sidebar d-none d-lg-block" />
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
  margin: 0px auto;
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
  padding-right: 0;
}
</style>
