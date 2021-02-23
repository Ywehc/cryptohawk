/* eslint-disable max-len */
/* eslint-disable quotes */
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      brand: {
        name: 'cryptohawk',
        description: 'Cryptocurrency Platform and Exchange information for Canadian investors and traders.',
      },
      nav: {
        home: 'Home',
        contact: 'Contact',
      },
      grid: {
        newton: {
          description: `Newton bills itself as 'Canada's first no-fee cryptocurrency brokerage'. Their interface is intuitive and feels secure but is still waiting for some features like limit buys. Overall we consider Newton to currently be the best platform to buy and sell cryptocurrency due to their competitive rates and lack of fees.`,
          coins: 'Bitcoin, Ethereum, Ripple, Stellar',
        },
        shakepay: {
          description: `Shakepay is a Canadian-owned exchange that allows trading of Bitcoin and Ethereum. They charge no fees and have rates that are in the middle of the pack. Their 'shake' concept may come across as gimicky but it is free Bitcoin and their referral program is among the best in the business.`,
          coins: 'Bitcoin, Ethereum',
        },
        wealthsimple: {
          description: 'Wealthsimple is an established Canadian investment platform owned primarily by Power Corporation and currently holds over $5 billion CAD in assets. While they have an intuitive interface, they charge both a spread and an operator fee, and you also do not directly own your coins.',
          coins: 'Not Applicable',
        },
        coins: 'Available Coins',
        spread_buying: 'Cost to Buy',
        spread_selling: 'Cost to Sell',
        fees: 'Additional Fees',
        referrals: 'Referrals',
        coin_ownership: 'Coin Ownership',
        yes: 'Yes',
        no: 'No',
        to_each_party: 'to each party',
        operations_fee: 'Operations Fee',
        go_to: 'Go to',
      },
      contact: {
        header: 'How can we help you today?',
      },
    },
  },
  fr: {
    message: {
      brand: {
        name: 'cryptohawk',
        description: "Informations sur la plateforme et l'échange de crypto-monnaie pour les investisseurs et les commerçants canadiens.",
      },
      nav: {
        home: `Page d'accueil`,
        contact: 'Contacter',
      },
      grid: {
        newton: {
          description: `Newton se présente comme «le premier courtage de crypto-monnaie sans frais au Canada». Leur interface est intuitive et sécurisée, mais attend toujours certaines fonctionnalités telles que les achats limités. Dans l'ensemble, nous considérons Newton comme actuellement la meilleure plateforme pour acheter et vendre des crypto-monnaies en raison de leurs tarifs compétitifs et de l'absence de frais.`,
          coins: 'Bitcoin, Ethereum, Ripple, Stellar',
        },
        shakepay: {
          description: `Shakepay est une bourse de propriété canadienne qui permet la négociation de Bitcoin et d'Ethereum. Ils ne facturent aucun frais et ont des tarifs au milieu du peloton. Leur concept de  'shake' peut sembler gimicky, mais il s'agit de Bitcoin gratuit et leur programme de parrainage est parmi les meilleurs du secteur.`,
          coins: 'Bitcoin, Ethereum',
        },
        wealthsimple: {
          description: `Wealthsimple est une plateforme d'investissement canadienne établie détenue principalement par Power Corporation et détient actuellement des actifs de plus de 5 milliards de dollars canadiens.Bien qu'ils aient une interface intuitive, ils facturent à la fois des frais de propagation et des frais d'opérateur, et vous ne possédez pas non plus directement vos pièces.`,
          coins: `N'est pas applicable`,
        },
        coins: 'Pièces disponibles',
        spread_buying: `Coût d'achat`,
        spread_selling: `Coût de vente`,
        fees: 'Frais supplémentaires',
        referrals: 'références',
        coin_ownership: `Propriété des pièces`,
        yes: 'Oui',
        no: 'Non',
        to_each_party: `à chaque partie`,
        operations_fee: 'Frais de fonctionnement',
        go_to: `Aller à`,
      },
    },
  },
};

export default new VueI18n({
  locale: 'en',
  messages,
});
