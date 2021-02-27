<template>
    <div class="desktop-grid container">
      <h2>{{ $t('message.brand.description') }}</h2>
      <platform-cards class="cards"/>
    </div>
</template>

<script>
import PlatformCards from './PlatformCards.vue';

export default {
  components: { PlatformCards },
};
</script>

<style scoped lang="scss">
.desktop-grid {
  padding-top: 40px;
}
h2 {
  color: $lightest;
  font-size: 26px;
  width: 90%;
  margin: 80px auto;
  text-align: center;
}
.cards {
  padding-bottom: 90px;
}
</style>
