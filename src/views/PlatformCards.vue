<template>
    <div class="card-grid">
      <div class="mobile-container d-sm-flex d-lg-none">
        <b-card no-body class="mobile">
          <b-tabs vertical>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.coinsmart.title">
              <b-card-text>
                <mobile-card
                  class="my-4"
                  :title="this.$store.state.platforms.coinsmart.title">
                </mobile-card>
                <coinsmart-coins class="mobile-coin-icons my-3"/>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_buying') }}</th>
                      <td>{{ this.$store.state.platforms.coinsmart.spread_buying }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_selling') }}</th>
                      <td>{{ this.$store.state.platforms.coinsmart.spread_selling }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.fees') }}</th>
                      <td>{{ this.$store.state.platforms.coinsmart.fees}}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.referrals') }}</th>
                      <td>{{ this.coinsmartReferral }}</td>
                    </tr>
                  </tbody>
                </table>
                <p class="px-3">{{ this.$t('message.grid.coinsmart.description') }}</p>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.ndax.title">
              <b-card-text>
                <mobile-card
                  class="my-4"
                  :title="this.$store.state.platforms.ndax.title">
                </mobile-card>
                <ndax-coins class="mobile-coin-icons my-3"/>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_buying') }}</th>
                      <td>{{ this.$store.state.platforms.ndax.spread_buying }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_selling') }}</th>
                      <td>{{ this.$store.state.platforms.ndax.spread_selling }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.fees') }}</th>
                      <td>{{ this.$store.state.platforms.ndax.fees}}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.referrals') }}</th>
                      <td>{{ this.ndaxReferral }}</td>
                    </tr>
                  </tbody>
                </table>
                <p class="px-3">{{ this.$t('message.grid.ndax.description') }}</p>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.netcoins.title">
              <b-card-text>
                <mobile-card
                  class="my-4"
                  :title="this.$store.state.platforms.netcoins.title">
                </mobile-card>
                <netcoins-coins class="mobile-coin-icons my-3"/>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_buying') }}</th>
                      <td>{{ this.$store.state.platforms.netcoins.spread_buying }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_selling') }}</th>
                      <td>{{ this.$store.state.platforms.netcoins.spread_selling }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.fees') }}</th>
                      <td>{{ this.$store.state.platforms.netcoins.fees}}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.referrals') }}</th>
                      <td>{{ this.netcoinsReferral }}</td>
                    </tr>
                  </tbody>
                </table>
                <p class="px-3">{{ this.$t('message.grid.netcoins.description') }}</p>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.newton.title">
              <b-card-text>
                <mobile-card
                  class="my-4"
                  :title="this.$store.state.platforms.newton.title">
                </mobile-card>
                <newton-coins class="mobile-coin-icons my-3"/>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_buying') }}</th>
                      <td>{{ this.$store.state.platforms.newton.spread_buying }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_selling') }}</th>
                      <td>{{ this.$store.state.platforms.newton.spread_selling }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.fees') }}</th>
                      <td>{{ this.$store.state.platforms.newton.fees}}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.referrals') }}</th>
                      <td>{{ this.newtonReferral }}</td>
                    </tr>
                  </tbody>
                </table>
                <p class="px-3">{{ this.$t('message.grid.newton.description') }}</p>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.shakepay.title">
              <b-card-text>
                <mobile-card
                  class="my-4"
                  :title="this.$store.state.platforms.shakepay.title">
                </mobile-card>
                <shakepay-coins class="mobile-coin-icons my-3"/>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_buying') }}</th>
                      <td>{{ this.$store.state.platforms.shakepay.spread_buying }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_selling') }}</th>
                      <td>{{ this.$store.state.platforms.shakepay.spread_selling }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.fees') }}</th>
                      <td>{{ this.$store.state.platforms.shakepay.fees}}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.referrals') }}</th>
                      <td>{{ this.shakepayReferral }}</td>
                    </tr>
                  </tbody>
                </table>
                <p class="px-3">{{ this.$t('message.grid.shakepay.description') }}</p>
              </b-card-text>
            </b-tab>
            <b-tab class="platform-tab" :title="this.$store.state.platforms.wealthsimple.title">
              <b-card-text>
              <mobile-card
                  class="my-4"
                  :title="this.$store.state.platforms.wealthsimple.title">
                </mobile-card>
                <wealthsimple-coins class="mobile-coin-icons my-3"/>
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_buying') }}</th>
                      <td>{{ this.$store.state.platforms.wealthsimple.spread_buying }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.spread_selling') }}</th>
                      <td>{{ this.$store.state.platforms.wealthsimple.spread_selling }}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.fees') }}</th>
                      <td>{{ this.$store.state.platforms.wealthsimple.fees}}</td>
                    </tr>
                    <tr>
                      <th scope="row">{{ this.$t('message.grid.referrals') }}</th>
                      <td>{{ this.wealthsimpleReferral }}</td>
                    </tr>
                  </tbody>
                </table>
                <p class="px-3">{{ this.$t('message.grid.wealthsimple.description') }}</p>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
      <div class="d-none d-lg-block">
        <desktop-card
          :title="this.$store.state.platforms.coinsmart.title"
          :description="this.$t('message.grid.coinsmart.description')"
          :spread_buying="this.$store.state.platforms.coinsmart.spread_buying"
          :spread_selling="this.$store.state.platforms.coinsmart.spread_selling"
          :fees="this.$store.state.platforms.coinsmart.fees"
          :referral="coinsmartReferral"
          :coins="this.$t('message.grid.coinsmart.coins')">
        </desktop-card>
        <desktop-card
          :title="this.$store.state.platforms.ndax.title"
          :description="this.$t('message.grid.ndax.description')"
          :spread_buying="this.$store.state.platforms.ndax.spread_buying"
          :spread_selling="this.$store.state.platforms.ndax.spread_selling"
          :fees="this.$store.state.platforms.ndax.fees"
          :referral="ndaxReferral"
          :coins="this.$t('message.grid.ndax.coins')">
        </desktop-card>
        <desktop-card
          :title="this.$store.state.platforms.netcoins.title"
          :description="this.$t('message.grid.netcoins.description')"
          :spread_buying="this.$store.state.platforms.netcoins.spread_buying"
          :spread_selling="this.$store.state.platforms.netcoins.spread_selling"
          :fees="this.$store.state.platforms.netcoins.fees"
          :referral="netcoinsReferral"
          :coins="this.$t('message.grid.netcoins.coins')">
        </desktop-card>
        <desktop-card
          :title="this.$store.state.platforms.newton.title"
          :description="this.$t('message.grid.newton.description')"
          :spread_buying="this.$store.state.platforms.newton.spread_buying"
          :spread_selling="this.$store.state.platforms.newton.spread_selling"
          :fees="this.$store.state.platforms.newton.fees"
          :referral="newtonReferral"
          :coins="this.$t('message.grid.newton.coins')">
        </desktop-card>
        <desktop-card
          :title="this.$store.state.platforms.shakepay.title"
          :description="this.$t('message.grid.shakepay.description')"
          :spread_buying="this.$store.state.platforms.shakepay.spread_buying"
          :spread_selling="this.$store.state.platforms.shakepay.spread_selling"
          :fees="this.$store.state.platforms.shakepay.fees"
          :referral="shakepayReferral"
          :coins="this.$t('message.grid.shakepay.coins')">
        </desktop-card>
        <desktop-card
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
</template>

<script>
import DesktopCard from '../components/DesktopCard.vue';
import MobileCard from '../components/MobileCard.vue';
import NewtonCoins from '../components/coin_icons/NewtonCoins.vue';
import ShakepayCoins from '../components/coin_icons/ShakepayCoins.vue';
import CoinsmartCoins from '../components/coin_icons/CoinsmartCoins.vue';
import NetcoinsCoins from '../components/coin_icons/NetcoinsCoins.vue';
import NdaxCoins from '../components/coin_icons/NdaxCoins.vue';
import WealthsimpleCoins from '../components/coin_icons/WealthsimpleCoins.vue';

export default {
  components: {
    DesktopCard,
    MobileCard,
    CoinsmartCoins,
    NdaxCoins,
    NetcoinsCoins,
    NewtonCoins,
    ShakepayCoins,
    WealthsimpleCoins,
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
