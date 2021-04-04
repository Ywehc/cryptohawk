<template>
    <div>
      <PageHeader
        :title="this.$t('message.grid.title')"
        :description="this.$t('message.grid.description')"
      />
      <div class="mobile-container d-xs-flex d-sm-none">
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
                  :coins="this.$t('message.grid.coinbase.coins')"
                  :established="this.$t('message.grid.coinbase.established')"
                  :operated_from="this.$t('message.grid.coinbase.operated_from')">
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
                  :coins="this.$t('message.grid.coinsmart.coins')"
                  :established="this.$t('message.grid.coinsmart.established')"
                  :operated_from="this.$t('message.grid.coinsmart.operated_from')">
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
                  :coins="this.$t('message.grid.mybtc.coins')"
                  :established="this.$t('message.grid.mybtc.established')"
                  :operated_from="this.$t('message.grid.mybtc.operated_from')">
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
                  :coins="this.$t('message.grid.ndax.coins')"
                  :established="this.$t('message.grid.ndax.established')"
                  :operated_from="this.$t('message.grid.ndax.operated_from')">
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
                  :coins="this.$t('message.grid.netcoins.coins')"
                  :established="this.$t('message.grid.netcoins.established')"
                  :operated_from="this.$t('message.grid.netcoins.operated_from')">
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
                  :coins="this.$t('message.grid.newton.coins')"
                  :established="this.$t('message.grid.newton.established')"
                  :operated_from="this.$t('message.grid.newton.operated_from')">
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
                  :coins="this.$t('message.grid.shakepay.coins')"
                  :established="this.$t('message.grid.shakepay.established')"
                  :operated_from="this.$t('message.grid.shakepay.operated_from')">
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
                  :coins="this.$t('message.grid.wealthsimple.coins')"
                  :established="this.$t('message.grid.wealthsimple.established')"
                  :operated_from="this.$t('message.grid.wealthsimple.operated_from')">
                </mobile-card>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>

      <div class="d-none d-sm-flex container-fluid px-0">
        <div class="container px-2">
          <div class="row">
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.coinbase.title"
              :description="this.$t('message.grid.coinbase.description')"
              :spread_buying="this.$store.state.platforms.coinbase.spread_buying"
              :spread_selling="this.$store.state.platforms.coinbase.spread_selling"
              :fees="this.$store.state.platforms.coinbase.fees"
              :referral="coinbaseReferral"
              :coins="this.$t('message.grid.coinbase.coins')"
              :established="this.$t('message.grid.coinbase.established')"
              :operated_from="this.$t('message.grid.coinbase.operated_from')">
            </desktop-card>
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.coinsmart.title"
              :description="this.$t('message.grid.coinsmart.description')"
              :spread_buying="this.$store.state.platforms.coinsmart.spread_buying"
              :spread_selling="this.$store.state.platforms.coinsmart.spread_selling"
              :fees="this.$store.state.platforms.coinsmart.fees"
              :referral="coinsmartReferral"
              :coins="this.$t('message.grid.coinsmart.coins')"
              :established="this.$t('message.grid.coinsmart.established')"
              :operated_from="this.$t('message.grid.coinsmart.operated_from')">
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
              :coins="this.$t('message.grid.mybtc.coins')"
              :established="this.$t('message.grid.mybtc.established')"
              :operated_from="this.$t('message.grid.mybtc.operated_from')">
            </desktop-card>
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.ndax.title"
              :description="this.$t('message.grid.ndax.description')"
              :spread_buying="this.$store.state.platforms.ndax.spread_buying"
              :spread_selling="this.$store.state.platforms.ndax.spread_selling"
              :fees="this.$store.state.platforms.ndax.fees"
              :referral="ndaxReferral"
              :coins="this.$t('message.grid.ndax.coins')"
              :established="this.$t('message.grid.ndax.established')"
              :operated_from="this.$t('message.grid.ndax.operated_from')">
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
              :coins="this.$t('message.grid.netcoins.coins')"
              :established="this.$t('message.grid.netcoins.established')"
              :operated_from="this.$t('message.grid.netcoins.operated_from')">
            </desktop-card>
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.newton.title"
              :description="this.$t('message.grid.newton.description')"
              :spread_buying="this.$store.state.platforms.newton.spread_buying"
              :spread_selling="this.$store.state.platforms.newton.spread_selling"
              :fees="this.$store.state.platforms.newton.fees"
              :referral="newtonReferral"
              :coins="this.$t('message.grid.newton.coins')"
              :established="this.$t('message.grid.newton.established')"
              :operated_from="this.$t('message.grid.newton.operated_from')">
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
              :coins="this.$t('message.grid.shakepay.coins')"
              :established="this.$t('message.grid.shakepay.established')"
              :operated_from="this.$t('message.grid.shakepay.operated_from')">
            </desktop-card>
            <desktop-card
              class="col"
              :title="this.$store.state.platforms.wealthsimple.title"
              :description="this.$t('message.grid.wealthsimple.description')"
              :spread_buying="this.$store.state.platforms.wealthsimple.spread_buying"
              :spread_selling="this.$store.state.platforms.wealthsimple.spread_selling"
              :fees="wealthsimpleFees"
              :referral="wealthsimpleReferral"
              :coins="this.$t('message.grid.wealthsimple.coins')"
              :established="this.$t('message.grid.wealthsimple.established')"
              :operated_from="this.$t('message.grid.wealthsimple.operated_from')">
            </desktop-card>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import DesktopCard from '../components/DesktopCard.vue';
import MobileCard from '../components/MobileCard.vue';
import PageHeader from '../components/PageHeader.vue';

export default {
  components: {
    DesktopCard,
    MobileCard,
    PageHeader,
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
  metaInfo: {
    title: 'Compare platforms to help find the right place to purchase Bitcoin, Ethereum or other cryptocurrencies',
  },
};
</script>

<style lang="scss">
@import './public/scss/_mobile-card.scss';

</style>
