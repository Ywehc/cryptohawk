<template>
        <div>
            <h4 class="text-center my-4 tab-title">
              <a :href="dynamicUrl" class="title-url" target="_blank">
                {{ title }}
              </a>
            </h4>
            <component class="mobile-coin-icons my-3" :is="coinIcons"></component>
            <table class="table table-striped">
                <tbody>
                <tr>
                    <th scope="row">{{ this.$t('message.grid.spread_buying') }}</th>
                    <td>{{ spread_buying }}</td>
                </tr>
                <tr>
                    <th scope="row">{{ this.$t('message.grid.spread_selling') }}</th>
                    <td>{{ spread_selling }}</td>
                </tr>
                <tr>
                    <th scope="row">{{ this.$t('message.grid.fees') }}</th>
                    <td>{{fees}}</td>
                </tr>
                <tr>
                    <th scope="row">{{ this.$t('message.grid.referrals') }}</th>
                    <td>{{ referral }}</td>
                </tr>
                </tbody>
            </table>
            <p class="px-3">{{ description }}</p>
            <p class="font-weight-bold text-center">{{ $t('message.grid.go_to') }}
              <a class="btn btn-primary"
                :href="dynamicUrl"
                role="button"
                target="_blank">
                  {{ title }}
              </a>
            </p>
        </div>
</template>

<script>
import NewtonCoins from './coin_icons/NewtonCoins.vue';
import ShakepayCoins from './coin_icons/ShakepayCoins.vue';
import CoinsmartCoins from './coin_icons/CoinsmartCoins.vue';
import NetcoinsCoins from './coin_icons/NetcoinsCoins.vue';
import NdaxCoins from './coin_icons/NdaxCoins.vue';
import WealthsimpleCoins from './coin_icons/WealthsimpleCoins.vue';

export default {
  props: ['referral', 'title', 'spread_buying', 'spread_selling', 'fees', 'description'],
  computed: {
    coinIcons() {
      switch (this.title) {
        case 'Newton':
          return NewtonCoins;
        case 'Shakepay':
          return ShakepayCoins;
        case 'Coinsmart':
          return CoinsmartCoins;
        case 'Netcoins':
          return NetcoinsCoins;
        case 'NDAX':
          return NdaxCoins;
        case 'Wealthsimple':
          return WealthsimpleCoins;
        default: return null;
      }
    },
    dynamicUrl() {
      switch (this.title) {
        case 'Newton':
          return this.$store.state.platforms.newton.url;
        case 'Shakepay':
          return this.$store.state.platforms.shakepay.url;
        case 'Wealthsimple':
          return this.$store.state.platforms.wealthsimple.url;
        case 'Coinsmart':
          return this.$store.state.platforms.coinsmart.url;
        case 'Netcoins':
          return this.$store.state.platforms.netcoins.url;
        case 'NDAX':
          return this.$store.state.platforms.ndax.url;
        default: return null;
      }
    },
  },
};
</script>

<style lang="scss">
@import './public/scss/_mobile-card.scss';
</style>
