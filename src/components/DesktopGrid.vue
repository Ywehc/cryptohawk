<template>
    <div class="desktop-grid">
      <h1>{{ $t('message.brand.description') }}</h1>
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
h1 {
  color: $lightest;
  font-size: 26px;
  width: 90%;
  margin: 40px auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}
.nav {
  padding-right: 0;
}
@media only screen and (min-width: 992px) {
  .desktop-grid {
    padding-top: 40px;
  }
  h1 {
    margin: 80px auto;
  }
}
</style>
