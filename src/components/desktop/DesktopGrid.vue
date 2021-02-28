<template>
    <div class="desktop-grid">
      <h2>{{ $t('message.brand.description') }}</h2>
      <div class="container">
        <platform-cards class="cards"/>
        <sidebar class="sidebar" />
      </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import PlatformCards from '../PlatformCards.vue';

export default {
  components: { PlatformCards, Sidebar },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
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
}
.cards {
  padding-bottom: 90px;
  width: 75%;
}
.sidebar {
  width: 25%;
}
</style>
