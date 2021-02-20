<template>
  <div class="home">
    <MobileGrid msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import Grid from '@/components/MainGrid.vue';
import MobileGrid from '@/components/MobileGrid.vue';

export default {
  name: 'Home',
  components: {
    MobileGrid,
  },
};
</script>

<style lang="scss" scoped>
</style>
