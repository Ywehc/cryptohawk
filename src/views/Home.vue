<template>
  <div class="home">
      <MobileGrid v-if="windowWidth < 576" />
      <DesktopGrid v-else/>
  </div>
</template>

<script>
import MobileGrid from '@/components/MobileGrid.vue';
import DesktopGrid from '@/components/DesktopGrid.vue';

export default {
  name: 'Home',
  components: {
    MobileGrid,
    DesktopGrid,
  },
  data() {
    return {
      // eslint-disable-next-line no-restricted-globals
      windowWidth: screen.width,
    };
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 576px) {
  .home {
    background: $dark;
  }
}
</style>
