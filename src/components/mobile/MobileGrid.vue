<template>
    <div class="mobile-grid">
      <p class="description">{{ $t('message.brand.description') }}</p>
      <mobile-nav v-on:menu-selection="renderView"/>
      <component :is="componentName" />
    </div>
</template>

<script>
import PlatformCards from '../PlatformCards.vue';
import MobileNav from './MobileNav.vue';
import Contact from '../../views/Contact.vue';
import MobilePrices from './MobilePrices.vue';

export default {
  components: {
    platforms: PlatformCards,
    contact: Contact,
    prices: MobilePrices,
    MobileNav,
  },
  data() {
    return {
      componentName: 'platforms',
    };
  },
  methods: {
    renderView(value) {
      this.componentName = value;
    },
  },
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
  padding-top: 20px;
}

</style>
