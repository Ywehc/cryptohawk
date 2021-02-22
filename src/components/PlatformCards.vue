<template>
    <div class="card-grid">
        <platform-card
        title="Newton"
        :description="$t('message.grid.newton.description')"
        spread_buying="0.57%"
        spread_selling="0.64%"
        fees="None"
        referral="$25"
        coins="Bitcoin, Ethereum, Ripple, Stellar">
      </platform-card>
      <platform-card
        title="Shakepay"
        :description="$t('message.grid.shakepay.description')"
        spread_buying="1.41%"
        spread_selling="1.3%"
        fees="None"
        referral="$30 to each party"
        coins="Bitcoin, Ethereum">
      </platform-card>
      <platform-card
        title="Wealthsimple"
        :description="$t('message.grid.wealthsimple.description')"
        spread_buying="2%"
        spread_selling="2%"
        fees="3% 'Operations Fee'"
        referral="$5 to each party"
        coins="Not Applicable">
      </platform-card>
    </div>
</template>

<script>
import PlatformCard from './PlatformCard.vue';

export default {
  components: { PlatformCard },
};
</script>

<style scoped>
@media only screen and (min-width: 576px) {
  .card-grid {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
  }
}
@media only screen and (min-width: 996px) {
  .card-grid {
    flex-direction: row;
  }
}
</style>
