<template>
    <div class="card-grid">
      <platform-card
        title="Coinsmart"
        :description="$t('message.grid.coinsmart.description')"
        spread_buying="1.39%"
        spread_selling="2.4%"
        fees="0.2% / 2%"
        :referral="coinsmartReferral"
        :coins="$t('message.grid.coinsmart.coins')">
      </platform-card>
      <platform-card
        title="NDAX"
        :description="$t('message.grid.ndax.description')"
        spread_buying="2%"
        spread_selling="2%"
        :fees="$t('message.grid.no')"
        :referral="ndaxReferral"
        :coins="$t('message.grid.ndax.coins')">
      </platform-card>
      <platform-card
        title="Netcoins"
        :description="$t('message.grid.netcoins.description')"
        spread_buying="0.89%"
        spread_selling="0.67%"
        fees="0.005%"
        :referral="netcoinsReferral"
        :coins="$t('message.grid.netcoins.coins')">
      </platform-card>
      <platform-card
        title="Newton"
        :description="$t('message.grid.newton.description')"
        spread_buying="0.57%"
        spread_selling="0.64%"
        :fees="$t('message.grid.no')"
        :referral="newtonReferral"
        :coins="$t('message.grid.newton.coins')">
      </platform-card>
      <platform-card
        title="Shakepay"
        :description="$t('message.grid.shakepay.description')"
        spread_buying="1.41%"
        spread_selling="1.3%"
        :fees="$t('message.grid.no')"
        :referral="shakepayReferral"
        :coins="$t('message.grid.shakepay.coins')">
      </platform-card>
      <platform-card
        title="Wealthsimple"
        :description="$t('message.grid.wealthsimple.description')"
        spread_buying="2%"
        spread_selling="2%"
        :fees="wealthsimpleFees"
        :referral="wealthsimpleReferral"
        :coins="$t('message.grid.wealthsimple.coins')">
      </platform-card>
    </div>
</template>

<script>
import PlatformCard from '../components/PlatformCard.vue';

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
    coinsmartReferral() {
      return (`$15 ${this.$t('message.grid.to_each_party')}`);
    },
    netcoinsReferral() {
      return (`$50 + $10 ${this.$t('message.grid.to_new_user')}`);
    },
    ndaxReferral() {
      return (`$10 ${this.$t('message.grid.to_each_party')} + 10%`);
    },
    wealthsimpleFees() {
      return (`3% ${this.$t('message.grid.operations_fee')}`);
    },
  },
};
</script>
