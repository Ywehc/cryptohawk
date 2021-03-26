<template>
    <div class="container">
      <div class="desktop">
        <table class="table table-bordered table-sm">
          <thead>
            <tr>
              <th scope="col" colspan="3" class="title-cell">
                <a :href="dynamicUrl" class="title-url" target="_blank">
                  {{ title }}
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3" class="coin-icons col-12">
                <div :is="coinSet" class="coin-icons"></div>
              </td>
            </tr>
            <tr>
              <td colspan="2">{{ $t('message.grid.spread_buying') }}</td>
              <td>{{ spread_buying }}</td>
            </tr>
            <tr>
              <td colspan="2">{{ $t('message.grid.spread_selling') }}</td>
              <td>{{ spread_selling }}</td>
            </tr>
            <tr>
              <td colspan="2">{{ $t('message.grid.fees') }}</td>
              <td>{{ fees }}</td>
            </tr>
            <tr>
              <td colspan="3" class="button-cell text-center">
                <p class="mb-2">{{ $t('message.grid.go_to') }} </p>
                <a class="btn btn-primary btn-sm"
                  :href="dynamicUrl"
                  role="button"
                  target="_blank">
                    {{ title }}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    textToggle() {
      this.isActive = !this.isActive;
    },
  },
  props: ['title', 'description', 'spread', 'fees', 'referral', 'spread_buying', 'spread_selling', 'coins', 'image_coins', 'coin_ownership'],
  computed: {
    coinSet() {
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

<style scoped lang="scss">
@import './public/scss/_desktop-card.scss';

</style>
