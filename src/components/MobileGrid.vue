<template>
    <div>
        <mobile-card></mobile-card>
    </div>
</template>

<script>
import MobileCard from './MobileCard.vue';

export default {
  components: { MobileCard },
  name: 'MobileGrid',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
