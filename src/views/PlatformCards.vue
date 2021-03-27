<template>
    <div>
      <div class="mobile-container d-sm-flex d-lg-none">
        <b-card no-body class="mobile">
          <b-tabs vertical>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.coinbase.title">
              <b-card-text>
                <mobile-card
                  :title="this.$store.state.platforms.coinbase.title"
                  :description="this.$t('message.grid.coinbase.description')"
                  :spread_buying="this.$store.state.platforms.coinbase.spread_buying"
                  :spread_selling="this.$store.state.platforms.coinbase.spread_selling"
                  :fees="this.$store.state.platforms.coinbase.fees"
                  :referral="coinbaseReferral"
                  :coins="this.$t('message.grid.coinbase.coins')">
                </mobile-card>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.coinsmart.title">
              <b-card-text>
                <mobile-card
                  :title="this.$store.state.platforms.coinsmart.title"
                  :description="this.$t('message.grid.coinsmart.description')"
                  :spread_buying="this.$store.state.platforms.coinsmart.spread_buying"
                  :spread_selling="this.$store.state.platforms.coinsmart.spread_selling"
                  :fees="this.$store.state.platforms.coinsmart.fees"
                  :referral="coinsmartReferral"
                  :coins="this.$t('message.grid.coinsmart.coins')">
                </mobile-card>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.mybtc.title">
              <b-card-text>
                <mobile-card
                  :title="this.$store.state.platforms.mybtc.title"
                  :description="this.$t('message.grid.mybtc.description')"
                  :spread_buying="this.$store.state.platforms.mybtc.spread_buying"
                  :spread_selling="this.$store.state.platforms.mybtc.spread_selling"
                  :fees="this.$store.state.platforms.mybtc.fees"
                  :referral="myBtcReferral"
                  :coins="this.$t('message.grid.mybtc.coins')">
                </mobile-card>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.ndax.title">
              <b-card-text>
                <mobile-card
                  :title="this.$store.state.platforms.ndax.title"
                  :description="this.$t('message.grid.ndax.description')"
                  :spread_buying="this.$store.state.platforms.ndax.spread_buying"
                  :spread_selling="this.$store.state.platforms.ndax.spread_selling"
                  :fees="this.$store.state.platforms.ndax.fees"
                  :referral="ndaxReferral"
                  :coins="this.$t('message.grid.ndax.coins')">
                </mobile-card>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.netcoins.title">
              <b-card-text>
                <mobile-card
                  :title="this.$store.state.platforms.netcoins.title"
                  :description="this.$t('message.grid.netcoins.description')"
                  :spread_buying="this.$store.state.platforms.netcoins.spread_buying"
                  :spread_selling="this.$store.state.platforms.netcoins.spread_selling"
                  :fees="this.$store.state.platforms.netcoins.fees"
                  :referral="netcoinsReferral"
                  :coins="this.$t('message.grid.netcoins.coins')">
                </mobile-card>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.newton.title">
              <b-card-text>
                <mobile-card
                  :title="this.$store.state.platforms.newton.title"
                  :description="this.$t('message.grid.newton.description')"
                  :spread_buying="this.$store.state.platforms.newton.spread_buying"
                  :spread_selling="this.$store.state.platforms.newton.spread_selling"
                  :fees="this.$store.state.platforms.newton.fees"
                  :referral="newtonReferral"
                  :coins="this.$t('message.grid.newton.coins')">
                </mobile-card>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.shakepay.title">
              <b-card-text>
                <mobile-card
                  :title="this.$store.state.platforms.shakepay.title"
                  :description="this.$t('message.grid.shakepay.description')"
                  :spread_buying="this.$store.state.platforms.shakepay.spread_buying"
                  :spread_selling="this.$store.state.platforms.shakepay.spread_selling"
                  :fees="this.$store.state.platforms.shakepay.fees"
                  :referral="shakepayReferral"
                  :coins="this.$t('message.grid.shakepay.coins')">
                </mobile-card>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.wealthsimple.title">
              <b-card-text>
                <mobile-card
                  :title="this.$store.state.platforms.wealthsimple.title"
                  :description="this.$t('message.grid.wealthsimple.description')"
                  :spread_buying="this.$store.state.platforms.wealthsimple.spread_buying"
                  :spread_selling="this.$store.state.platforms.wealthsimple.spread_selling"
                  :fees="wealthsimpleFees"
                  :referral="wealthsimpleReferral"
                  :coins="this.$t('message.grid.wealthsimple.coins')">
                </mobile-card>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>

      <div class="d-none d-lg-flex container px-0">
        <div class="mx-3">
          <div class="row">
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.coinbase.title"
              :description="this.$t('message.grid.coinbase.description')"
              :spread_buying="this.$store.state.platforms.coinbase.spread_buying"
              :spread_selling="this.$store.state.platforms.coinbase.spread_selling"
              :fees="this.$store.state.platforms.coinbase.fees"
              :referral="coinbaseReferral"
              :coins="this.$t('message.grid.coinbase.coins')">
            </desktop-card>
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.coinsmart.title"
              :description="this.$t('message.grid.coinsmart.description')"
              :spread_buying="this.$store.state.platforms.coinsmart.spread_buying"
              :spread_selling="this.$store.state.platforms.coinsmart.spread_selling"
              :fees="this.$store.state.platforms.coinsmart.fees"
              :referral="coinsmartReferral"
              :coins="this.$t('message.grid.coinsmart.coins')">
            </desktop-card>
            <div class="w-100"></div>
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.mybtc.title"
              :description="this.$t('message.grid.mybtc.description')"
              :spread_buying="this.$store.state.platforms.mybtc.spread_buying"
              :spread_selling="this.$store.state.platforms.mybtc.spread_selling"
              :fees="this.$store.state.platforms.mybtc.fees"
              :referral="myBtcReferral"
              :coins="this.$t('message.grid.mybtc.coins')">
            </desktop-card>
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.ndax.title"
              :description="this.$t('message.grid.ndax.description')"
              :spread_buying="this.$store.state.platforms.ndax.spread_buying"
              :spread_selling="this.$store.state.platforms.ndax.spread_selling"
              :fees="this.$store.state.platforms.ndax.fees"
              :referral="ndaxReferral"
              :coins="this.$t('message.grid.ndax.coins')">
            </desktop-card>
            <div class="w-100"></div>
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.netcoins.title"
              :description="this.$t('message.grid.netcoins.description')"
              :spread_buying="this.$store.state.platforms.netcoins.spread_buying"
              :spread_selling="this.$store.state.platforms.netcoins.spread_selling"
              :fees="this.$store.state.platforms.netcoins.fees"
              :referral="netcoinsReferral"
              :coins="this.$t('message.grid.netcoins.coins')">
            </desktop-card>
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.newton.title"
              :description="this.$t('message.grid.newton.description')"
              :spread_buying="this.$store.state.platforms.newton.spread_buying"
              :spread_selling="this.$store.state.platforms.newton.spread_selling"
              :fees="this.$store.state.platforms.newton.fees"
              :referral="newtonReferral"
              :coins="this.$t('message.grid.newton.coins')">
            </desktop-card>
            <div class="w-100"></div>
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.shakepay.title"
              :description="this.$t('message.grid.shakepay.description')"
              :spread_buying="this.$store.state.platforms.shakepay.spread_buying"
              :spread_selling="this.$store.state.platforms.shakepay.spread_selling"
              :fees="this.$store.state.platforms.shakepay.fees"
              :referral="shakepayReferral"
              :coins="this.$t('message.grid.shakepay.coins')">
            </desktop-card>
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.wealthsimple.title"
              :description="this.$t('message.grid.wealthsimple.description')"
              :spread_buying="this.$store.state.platforms.wealthsimple.spread_buying"
              :spread_selling="this.$store.state.platforms.wealthsimple.spread_selling"
              :fees="wealthsimpleFees"
              :referral="wealthsimpleReferral"
              :coins="this.$t('message.grid.wealthsimple.coins')">
            </desktop-card>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import DesktopCard from '../components/DesktopCard.vue';
import MobileCard from '../components/MobileCard.vue';

export default {
  components: {
    DesktopCard,
    MobileCard,
  },
  data() {
    return {
      myBtcReferral: '$20',
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
    coinbaseReferral() {
      return (`$12.61 ${this.$t('message.grid.to_each_party')}`);
    },
  },
};
</script>

<style lang="scss">
@import './public/scss/_mobile-card.scss';

</style>
