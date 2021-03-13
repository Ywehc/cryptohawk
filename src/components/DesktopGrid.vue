<template>
    <div class="desktop-grid">
      <h2>{{ $t('message.brand.description') }}</h2>
      <div class="container">
        <platform-cards class="cards"/>
        <prices class="sidebar d-none d-lg-block" />
      </div>
    </div>
</template>

<script>
import Prices from '../views/Prices.vue';
import PlatformCards from '../views/PlatformCards.vue';

export default {
  components: { PlatformCards, Prices },
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
.cards {
  padding-bottom: 90px;
  width: 80%;
}
.sidebar {
  width: 24%;
}
</style>
