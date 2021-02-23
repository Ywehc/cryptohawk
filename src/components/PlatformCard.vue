<template>
    <div class="container">
        <div class="information">
            <div class="header">
                <a :href="dynamicUrl" class="title-url" target="_blank">
                    <h2 class="title">{{ title }}</h2>
                </a>
                <div :is="coinSet"></div>
            </div>
            <p>{{ description }}</p>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" class="key">{{ $t('message.grid.coins') }}</th>
                        <th scope="col" class="value">{{ coins }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" class="key">{{ $t('message.grid.spread_buying') }}</th>
                        <td class="value">{{ spread_buying }}</td>
                    </tr>
                    <tr>
                        <th scope="row" class="key">{{ $t('message.grid.spread_selling') }}</th>
                        <td class="value">{{ spread_selling }}</td>
                    </tr>
                    <tr>
                        <th scope="row" class="key">{{ $t('message.grid.fees') }}</th>
                        <td class="value">{{ fees }}</td>
                    </tr>
                    <tr>
                        <th scope="row" class="key">{{ $t('message.grid.coin_ownership') }}</th>
                        <td class="value">{{ coin_ownership }}</td>
                    </tr>
                    <tr>
                        <th scope="row" class="key">{{ $t('message.grid.referrals') }}</th>
                        <td colspan="2" class="value">{{ referral }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="cta">{{ $t('message.grid.go_to') }}
            <a class="btn btn-primary btn-sm" :href="dynamicUrl" role="button" target="_blank">
                {{ title }}
            </a>
        </p>
    </div>
</template>

<script>
import NewtonCoins from './newton/NewtonCoins.vue';
import ShakepayCoins from './shakepay/ShakepayCoins.vue';

export default {
  name: 'PlatformCard',
  props: ['title', 'description', 'spread', 'fees', 'referral', 'spread_buying', 'spread_selling', 'coins', 'image_coins', 'coin_ownership'],
  computed: {
    coinSet() {
      switch (this.title) {
        case 'Newton':
          return NewtonCoins;
        case 'Shakepay':
          return ShakepayCoins;
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
    border: 5px solid $light;
    border-radius: 2%;
    margin-bottom: 20px;
    padding: 10px;
}
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.title {
    font-size: 22px;
}
.title-url {
    text-decoration: none;
    color: $medium;
}
.key {
    width: 50%;
}
.value {
    font-weight: normal;
    text-align: center;;
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
@media only screen and (min-width: 576px) {
  .container {
      border-radius: 1%;
  }
}
@media only screen and (min-width: 996px) {
  .container {
      max-width: 29%;
  }
  .information {
      height: 88%;
  }
  .cta {
      height: 12%;
  }
}
</style>
