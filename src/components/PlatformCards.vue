<template>
    <div class="card-grid">
        <platform-card
        title="Newton"
        :description="$t('message.grid.newton.description')"
        spread_buying="0.57%"
        spread_selling="0.64%"
        fees="None"
        :referral="newtonReferral"
        :coins="$t('message.grid.newton.coins')"
        :coin_ownership="$t('message.grid.yes')">
      </platform-card>
      <platform-card
        title="Shakepay"
        :description="$t('message.grid.shakepay.description')"
        spread_buying="1.41%"
        spread_selling="1.3%"
        fees="None"
        :referral="shakepayReferral"
        :coins="$t('message.grid.shakepay.coins')"
        :coin_ownership="$t('message.grid.yes')">
      </platform-card>
      <platform-card
        title="Wealthsimple"
        :description="$t('message.grid.wealthsimple.description')"
        spread_buying="2%"
        spread_selling="2%"
        :fees="wealthsimpleFees"
        :referral="wealthsimpleReferral"
        :coins="$t('message.grid.wealthsimple.coins')"
        :coin_ownership="$t('message.grid.no')">
      </platform-card>
    </div>
</template>

<script>
import PlatformCard from './PlatformCard.vue';

export default {
  components: { PlatformCard },
  computed: {
    newtonReferral() {
      return (`$25 ${this.$t('message.grid.to_each_party')}`);
    },
    shakepayReferral() {
      return (`$30 ${this.$t('message.grid.to_each_party')}`);
    },
    wealthsimpleReferral() {
      return (`$5 ${this.$t('message.grid.to_each_party')}`);
    },
    wealthsimpleFees() {
      return (`3% ${this.$t('message.grid.operations_fee')}`);
    },
  },
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
