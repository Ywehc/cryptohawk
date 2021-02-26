<template>
    <div class="container">
        <div class="hide-overflow" v-bind:class="{active: isActive}">
            <div class="header">
                <a :href="dynamicUrl" class="title-url" target="_blank">
                    <h2 class="title">{{ title }}</h2>
                </a>
                <div :is="coinSet"></div>
            </div>
            <table class="table table-bordered data-grid">
                <tbody>
                    <tr>
                        <th scope="row" class="key">{{ $t('message.grid.spread_buying') }}</th>
                        <td class="value">{{ spread_buying }} / {{ spread_selling }}</td>
                    </tr>
                    <tr>
                        <th scope="row" class="key">{{ $t('message.grid.fees') }}</th>
                        <td class="value">{{ fees }}</td>
                    </tr>
                    <tr>
                        <th scope="row" class="key">{{ $t('message.grid.referrals') }}</th>
                        <td colspan="2" class="value">{{ referral }}</td>
                    </tr>
                </tbody>
            </table>
            <p class="cta">{{ $t('message.grid.go_to') }}
            <a class="btn btn-primary btn-sm" :href="dynamicUrl" role="button" target="_blank">
                {{ title }}
            </a>
            </p>
            <p class="des">{{ description }}</p>
        </div>
        <div class="btn-container">
          <button v-if="isActive"
            class="btn btn-primary btn-sm"
            @click="textToggle"
            >&#128317;
          </button>
          <button v-else
            class="btn btn-primary btn-sm"
            @click="textToggle"
            >&#128316;
          </button>
        </div>
    </div>
</template>

<script>
import NewtonCoins from '../coin_icons/NewtonCoins.vue';
import ShakepayCoins from '../coin_icons/ShakepayCoins.vue';
import CoinsmartCoins from '../coin_icons/CoinsmartCoins.vue';
import NetcoinsCoins from '../coin_icons/NetcoinsCoins.vue';
import NdaxCoins from '../coin_icons/NdaxCoins.vue';

export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    textToggle() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
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
.container {
    background: $lightest;
    color: $darkest;
    width: 94%;
    border: 3px solid $light;
    border-radius: 2%;
    margin-bottom: 20px;
    padding: 10px;
    position: relative;
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.title {
    font-size: 20px;
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
.data-grid {
    font-size: 14px;
}
.cta {
    text-align:center;
    font-weight: bold;
    a {
        background: $attention;
        color: $darkest;
        border-color: $darkest;
        border-width: 2px;
        font-weight: bold;
        padding: 7px;
    }
}
.btn-container {
  button {
    position: absolute;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    margin-top: -5px;
    background: $darkest;
    border: 2px solid $light;
    color: $light;
  }
}
</style>
