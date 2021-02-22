import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      brand: {
        description: 'Cryptocurrency Platform and Exchange information for Canadian investors and traders.',
      },
      grid: {
        newton: {
          description: 'Newton is a Canadian-owned exchange, allows trading of several different cryptocurrencies and currently have the best spreads for purchasing Bitcoin.',
        },
        shakepay: {
          description: 'Shakepay is a Canadian-owned exchange that allows trading of Bitcoin and Ethereum. While their spreads are a bit higher than some, they have a strong referral program and pay you 15 cents in bitcoin per day for a quick shake of your phone',
        },
        wealthsimple: {
          description: 'Wealthsimple is an established Canadian investment platform owned primarily by Power Corporation and currently holds over $5 billion CAD in assets. While they have an intuitive interface, they charge both a spread and an operator fee, and you also do not directly own your coins.',
        },
        coins: 'Available Coins',
        spread_buying: 'Cost to Buy',
        spread_selling: 'Cost to Sell',
        fees: 'Additional Fees',
        referrals: 'Referrals',
      },
    },
  },
  fr: {
    message: {
      brand: {
        description: "Informations sur la plateforme et l'échange de crypto-monnaie pour les investisseurs et les commerçants canadiens.",
      },
      grid: {
        description: {
          newton: 'Newton is a Canadian-owned exchange, allows trading of several different cryptocurrencies and currently have the best spreads for purchasing Bitcoin.',
          shakepay: 'Shakepay blah blah',
        },
        coins: 'las pièces',
        spread_buying: 'spread',
        spread_selling: 'spread',
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
