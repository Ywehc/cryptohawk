import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    platforms: {
      coinbase: {
        url: 'https://www.coinbase.com/join/kieran_tx',
        title: 'Coinbase',
        spread_buying: '.5% to 1%',
        spread_selling: '.5% to 1%',
        fees: '$0.99 to $2.99',
      },
      coinsmart: {
        url: 'https://crypto.coinsmart.com/register?promo=Ref-r5JA0V',
        title: 'Coinsmart',
        spread_buying: '1.39%',
        spread_selling: '2.4%',
        fees: '0.2% / 2%',
      },
      mybtc: {
        url: 'https://mybtc.ca?ref=AkePajV1zOmy8d60KR4L',
        title: 'MyBTC',
        spread_buying: 'free to $2.50',
        spread_selling: '4.95%',
        fees: 'Funding + withdrawal',
      },
      ndax: {
        url: 'https://one.ndax.io/bfQjUd',
        title: 'NDAX',
        spread_buying: '2%',
        spread_selling: '2%',
        fees: '0',
      },
      netcoins: {
        url: 'https://netcoins.app/r?ac=0J90K3',
        title: 'Netcoins',
        spread_buying: '0.57%',
        spread_selling: '0.64%',
        fees: '0.005%',
      },
      newton: {
        url: 'https://web.newton.co/r/RIC4H2',
        title: 'Newton',
        spread_buying: '0.89%',
        spread_selling: '0.67%',
        fees: '0',
      },
      shakepay: {
        url: 'https://shakepay.me/r/CIORKOZ',
        title: 'Shakepay',
        spread_buying: '1.41%',
        spread_selling: '1.3%',
        fees: '0',
      },
      wealthsimple: {
        url: 'https://my.wealthsimple.com/app/public/trade-referral-signup?code=_E1PGG',
        title: 'Wealthsimple',
        spread_buying: '2%',
        spread_selling: '2%',
        fees: '0.2% / 2%',
      },
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
