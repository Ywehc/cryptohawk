<template>
    <div class="mobile-grid">
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
  data() {
    return {
      platforms: [
        {
          name: 'Newton', coins: 'bitcoin', spread: '2%', fees: 'none', referral: '$20',
        },
        {
          name: 'Shakepay', coins: 'bitcoin', spread: '3%', fees: 'none', referral: '$30',
        },
        {
          name: 'Wealthsimple', coins: 'bitcoin', spread: '2%', fees: '3%', referral: '$30',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mobile-grid {
  background: $medium;
  padding-top: 20px;
}

</style>
