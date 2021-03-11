<template>
    <div class="card-grid">
      <div class="mobile-container d-sm-flex d-lg-none">
        <b-card no-body class="mobile">
          <b-tabs vertical>
            <b-tab class="platform-tab" :title="platform.coinsmart.title">
              <b-card-text>Tab contents 1</b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="platform.ndax.title">
              <b-card-text>Tab contents 2</b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="platform.netcoins.title">
              <b-card-text>Tab contents 3</b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="platform.newton.title">
              <b-card-text>Tab contents 4</b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="platform.shakepay.title">
              <b-card-text>Tab contents 5</b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="platform.wealthsimple.title">
              <b-card-text>Tab contents 6</b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
      <div class="d-none d-lg-block">
        <desktop-card
          :title="platform.coinsmart.title"
          :description="platform.coinsmart.description"
          :spread_buying="platform.coinsmart.spread_buying"
          :spread_selling="platform.coinsmart.spread_selling"
          :fees="platform.coinsmart.fees"
          :referral="coinsmartReferral"
          :coins="platform.coinsmart.coins">
        </desktop-card>
        <desktop-card
          :title="platform.ndax.title"
          :description="platform.ndax.description"
          :spread_buying="platform.ndax.spread_buying"
          :spread_selling="platform.ndax.spread_selling"
          :fees="platform.ndax.fees"
          :referral="ndaxReferral"
          :coins="platform.ndax.coins">
        </desktop-card>
        <desktop-card
          :title="platform.netcoins.title"
          :description="platform.netcoins.description"
          :spread_buying="platform.netcoins.spread_buying"
          :spread_selling="platform.netcoins.spread_selling"
          :fees="platform.netcoins.fees"
          :referral="netcoinsReferral"
          :coins="platform.netcoins.coins">
        </desktop-card>
        <desktop-card
          :title="platform.newton.title"
          :description="platform.newton.description"
          :spread_buying="platform.newton.spread_buying"
          :spread_selling="platform.newton.spread_selling"
          :fees="platform.newton.fees"
          :referral="newtonReferral"
          :coins="platform.newton.coins">
        </desktop-card>
        <desktop-card
          :title="platform.shakepay.title"
          :description="platform.shakepay.description"
          :spread_buying="platform.shakepay.spread_buying"
          :spread_selling="platform.shakepay.spread_selling"
          :fees="platform.shakepay.fees"
          :referral="shakepayReferral"
          :coins="platform.shakepay.coins">
        </desktop-card>
        <desktop-card
          :title="platform.wealthsimple.title"
          :description="platform.wealthsimple.description"
          :spread_buying="platform.wealthsimple.spread_buying"
          :spread_selling="platform.wealthsimple.spread_selling"
          :fees="wealthsimpleFees"
          :referral="wealthsimpleReferral"
          :coins="platform.wealthsimple.coins">
        </desktop-card>
      </div>
    </div>
</template>

<script>
import DesktopCard from '../components/DesktopCard.vue';

export default {
  components: { DesktopCard },
  data() {
    return {
      platform: {
        coinsmart: {
          title: this.$t('message.grid.coinsmart.title'),
          coins: this.$t('message.grid.coinsmart.coins'),
          description: this.$t('message.grid.coinsmart.description'),
          spread_buying: '1.39%',
          spread_selling: '2.4%',
          fees: '0.2% / 2%',
        },
        ndax: {
          title: this.$t('message.grid.ndax.title'),
          coins: this.$t('message.grid.ndax.coins'),
          description: this.$t('message.grid.ndax.description'),
          spread_buying: '2%',
          spread_selling: '2%',
          fees: this.$t('message.grid.no'),
        },
        newton: {
          title: this.$t('message.grid.newton.title'),
          coins: this.$t('message.grid.newton.coins'),
          description: this.$t('message.grid.newton.description'),
          spread_buying: '0.57%',
          spread_selling: '0.64%',
          fees: this.$t('message.grid.no'),
        },
        netcoins: {
          title: this.$t('message.grid.netcoins.title'),
          coins: this.$t('message.grid.netcoins.coins'),
          description: this.$t('message.grid.netcoins.description'),
          spread_buying: '0.89%',
          spread_selling: '0.67%',
          fees: '0.005%',
        },
        shakepay: {
          title: this.$t('message.grid.shakepay.title'),
          coins: this.$t('message.grid.shakepay.coins'),
          description: this.$t('message.grid.shakepay.description'),
          spread_buying: '1.41%',
          spread_selling: '1.3%',
          fees: this.$t('message.grid.no'),
        },
        wealthsimple: {
          title: this.$t('message.grid.wealthsimple.title'),
          coins: this.$t('message.grid.coinsmart.coins'),
          description: this.$t('message.grid.coinsmart.description'),
          spread_buying: '2%',
          spread_selling: '2%',
          fees: '0.2% / 2%',
        },
      },
    };
  },
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

<style lang="scss">
@import './public/scss/_mobile-card.scss';
</style>
