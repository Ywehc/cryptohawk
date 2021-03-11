<template>
    <div class="container">
      <div class="desktop d-none d-lg-block">
        <table class="table table-bordered">
          <tbody>
            <tr class="top-row">
              <th
                scope="col"
                rowspan="2"
                class="title-cell text-center title pt-4">
                  <a :href="dynamicUrl" class="title-url" target="_blank">
                    {{ title }}
                  </a>
              </th>
              <th scope="col" :is="coinSet" class="coin-icons"></th>
              <th
                scope="col"
                class="text-center stat-heading">{{ $t('message.grid.spread_buying') }}</th>
              <th
                scope="col"
                class="text-center stat-heading">{{ $t('message.grid.spread_selling') }}</th>
              <th
                scope="col"
                class="text-center stat-heading">{{ $t('message.grid.fees') }}</th>
              <th scope="col" rowspan="2" class="button-cell text-center">
                <p class="mb-2">{{ $t('message.grid.go_to') }} </p>
                <a class="btn btn-primary"
                  :href="dynamicUrl"
                  role="button"
                  target="_blank">
                    {{ title }}
                </a>
              </th>
            </tr>
            <tr>
              <td class="coin-text">{{ coins }}</td>
              <td class="text-center stat">{{ spread_buying }}</td>
              <td class="text-center stat">{{ spread_selling }}</td>
              <td class="text-center stat">{{ fees }}</td>
            </tr>
            <tr>
              <td colspan="6" class="p-3">{{ description }}</td>
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
          return 'https://web.newton.co/r/RIC4H2';
        case 'Shakepay':
          return 'https://shakepay.me/r/CIORKOZ';
        case 'Wealthsimple':
          return 'https://my.wealthsimple.com/app/public/trade-referral-signup?code=_E1PGG';
        case 'Coinsmart':
          return 'https://crypto.coinsmart.com/register?promo=Ref-r5JA0V';
        case 'Netcoins':
          return 'https://netcoins.app/r?ac=0J90K3';
        case 'NDAX':
          return 'https://one.ndax.io/bfQjUd';
        default: return null;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import './public/scss/_mobile-card.scss';
@import './public/scss/_desktop-card.scss';

.desktop {
  font-family: 'Poppins', sans-serif;
}
.title-url {
    text-decoration: none;
    color: $medium;
}
.active {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  height: 300px;
}
.coin-text {
  font-weight: light;
}

</style>
