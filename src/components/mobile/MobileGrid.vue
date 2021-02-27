<template>
    <div class="mobile-grid">
      <p class="description">{{ $t('message.brand.description') }}</p>
      <platform-cards />
    </div>
</template>

<script>
import PlatformCards from '../PlatformCards.vue';

export default {
  components: { PlatformCards },
  name: 'MobileGrid',
};
</script>

<style scoped lang="scss">
.description {
  color: $lightest;
  text-align: center;
  padding: 5px;
  font-weight: bold;
}
.mobile-grid {
  background: $dark;
  padding: 10px;
  padding-top: 20px;
}

</style>
