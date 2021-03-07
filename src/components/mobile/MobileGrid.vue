<template>
    <div class="mobile-grid">
      <p class="description">{{ $t('message.brand.description') }}</p>
      <ul class="nav-container">
        <li
          v-for="item in items"
          :key="item.message"
          @click="activeComponent = item">
          {{item}}
        </li>
      </ul>
      <component :is="activeComponent"/>
    </div>
</template>

<script>
import Platforms from '../PlatformCards.vue';
import Contact from '../../views/Contact.vue';
import Prices from '../Prices.vue';

export default {
  components: {
    Platforms,
    Contact,
    Prices,
  },
  data() {
    return {
      items: [
        'platforms', 'prices', 'contact'],
      activeComponent: 'platforms',
    };
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
    padding-left: 0;
    li {
      list-style-type: none;
      padding: .8em;
      flex: 1;
      text-align: center;
      background: $medium;
      color: $darkest;
      p {
          margin: .2rem auto;
      }
    }
  }
}
.active {
  font-weight: bold;
}

</style>
