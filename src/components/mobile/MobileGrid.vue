<template>
    <div class="mobile-grid">
      <p class="description">{{ $t('message.brand.description') }}</p>
      <div class="nav-container">
        <menu-item  name="platforms" @click.native="renderView('platforms')" />
        <menu-item  name="prices" @click.native="renderView('prices')" />
        <menu-item  name="contact" @click.native="renderView('contact')" />
      </div>
      <component :is="componentName"/>
    </div>
</template>

<script>
import Platforms from '../PlatformCards.vue';
import Contact from '../../views/Contact.vue';
import Prices from '../Prices.vue';
import MenuItem from './MobileMenuItem.vue';

export default {
  components: {
    Platforms,
    Contact,
    Prices,
    MenuItem,
  },
  data() {
    return {
      componentName: 'platforms',
      counter: 0,
    };
  },
  methods: {
    renderView(component) {
      this.componentName = component;
    },
  },
};
</script>

<style scoped lang="scss">
.mobile-grid {
  background-color: $darkest;
  padding-top: 10px;
  .description {
  color: $lightest;
  text-align: center;
  padding: 0px 10px;
  }
  .nav-container {
    background: $darkest;
    display: flex;
    align-items: stretch;
    font-family: 'Prompt', sans-serif;
    color: $lightest;
  }
}

</style>
