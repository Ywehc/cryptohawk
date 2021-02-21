import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      grid: {
        description: {
          newton: 'Newton is a Canadian-owned exchange, allows trading of several different cryptocurrencies and currently have the best spreads for purchasing Bitcoin.',
          shakepay: 'Shakepay is a Canadian-owned exchange that allows trading of Bitcoin and Ethereum. While their spreads are a bit higher than some, they have a strong referral program and pay you 15 cents in bitcoin per day for a quick shake of your phone',
          wealthsimple: 'Wealthsimple is an established Canadian investment platform owned primarily by Power Corporation and currently holds over $5 billion CAD in assets. While they have an intuitive interface, they charge both a spread and an operator fee, and you also do not directly own your coins.',
        },
        coins: 'coins',
        spread: 'spread',
        fees: 'fees',
        referrals: 'referrals',
      },
    },
  },
  fr: {
    message: {
      grid: {
        description: {
          newton: 'Newton is a Canadian-owned exchange, allows trading of several different cryptocurrencies and currently have the best spreads for purchasing Bitcoin.',
          shakepay: 'Shakepay blah blah',
        },
        coins: 'las pièces',
        spread: 'pourcentage',
        fees: 'frais',
        referrals: 'références',
      },
    },
  },
};

export default new VueI18n({
  locale: 'en',
  messages,
});
