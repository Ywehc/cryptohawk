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
        description: 'Cryptocurrency platform and price information for Canadian investors and traders.',
      },
      nav: {
        home: 'Home',
        contact: 'Contact',
      },
      grid: {
        newton: {
          title: "Newton",
          description: `Newton bills itself as 'Canada's first no-fee cryptocurrency brokerage'. Their interface is intuitive and feels secure but is still waiting for some features like limit buys. Overall we consider Newton to currently be the best platform to buy and sell cryptocurrency due to their competitive rates and lack of fees.`,
          coins: 'Bitcoin, Ethereum, Ripple, Stellar, Bitcoin Cash, Litecoin, Monero, USD Coin, Tether, QCAD',
        },
        shakepay: {
          title: "Shakepay",
          description: `Shakepay is a Canadian-owned exchange that allows trading of Bitcoin and Ethereum. They charge no fees and have rates that are in the middle of the pack. Their 'shake' concept may come across as gimicky but it is free Bitcoin and their referral program is among the best in the business.`,
          coins: 'Bitcoin, Ethereum',
        },
        wealthsimple: {
          title: "Wealthsimple",
          description: 'Wealthsimple is an established Canadian investment platform owned primarily by Power Corporation and currently holds over $5 billion CAD in assets. While they have an intuitive interface, they charge both a spread and an operator fee, and you also do not directly own your coins.',
          coins: 'Not Applicable',
        },
        coinsmart: {
          title: "Coinsmart",
          description: 'Coinsmart is a Canadian exchange with an interface geared towards more experienced crypto traders. They offer credit card purchases and a wide variety of coins, tools and features.',
          coins: 'Bitcoin, Ethereum, Litecoin, Ripple, Bitcoin Cash, EOS, Stellar, NEO, Cardano, QCAD',
        },
        netcoins: {
          title: "Netcoins",
          description: 'Netcoins is a well marketed Canadian exchange geared towards new traders. They offer four different coins to trade and provide a simple, easy to understand interface.',
          coins: 'Bitcoin, Ethereum, Litecoin, Ripple, Bitcoin Cash',
        },
        ndax: {
          title: "NDAX",
          description: 'NDAX is a full-featured Canadian exchange with a deep set of trading tools and a transparent fee structure. They are registered under FINTRAC and would be our recommendation for a serious trader.',
          coins: 'Bitcoin, Ethereum, Cardano, Litecoin, Ripple, Dot, Tether, Stellar, Link, EOS',
        },
        coins: 'Available Coins',
        spread: 'Cost to Buy/Sell',
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
        to_new_user: 'to new user',
      },
      contact: {
        header: 'How can we help you today?',
        email: 'Your email:',
        message: 'Your message',
        send: 'Send',
      },
      nomics: 'Crypto Market Cap & Pricing Data Provided By Nomics.',
    },
  },
  fr: {
    message: {
      brand: {
        name: 'cryptohawk',
        description: "Informations pratiques sur les plateformes et les échanges de crypto-monnaie pour les investisseurs et les commerçants canadiens.",
      },
      nav: {
        home: `Page d'accueil`,
        contact: 'Contacter',
      },
      grid: {
        newton: {
          title: "Newton",
          description: `Newton se présente comme «le premier courtage de crypto-monnaie sans frais au Canada». Leur interface est intuitive et sécurisée, mais attend toujours certaines fonctionnalités telles que les achats limités. Dans l'ensemble, nous considérons Newton comme actuellement la meilleure plateforme pour acheter et vendre des crypto-monnaies en raison de leurs tarifs compétitifs et de l'absence de frais.`,
          coins: 'Bitcoin, Ethereum, Ripple, Stellar, Bitcoin Cash, Litecoin, Monero, USD Coin, Tether, QCAD',
        },
        shakepay: {
          title: "Shakepay",
          description: `Shakepay est une bourse de propriété canadienne qui permet la négociation de Bitcoin et d'Ethereum. Ils ne facturent aucun frais et ont des tarifs au milieu du peloton. Leur concept de  'shake' peut sembler gimicky, mais il s'agit de Bitcoin gratuit et leur programme de parrainage est parmi les meilleurs du secteur.`,
          coins: 'Bitcoin, Ethereum',
        },
        wealthsimple: {
          title: "Wealthsimple",
          description: `Wealthsimple est une plateforme d'investissement canadienne établie détenue principalement par Power Corporation et détient actuellement des actifs de plus de 5 milliards de dollars canadiens.Bien qu'ils aient une interface intuitive, ils facturent à la fois des frais de propagation et des frais d'opérateur, et vous ne possédez pas non plus directement vos pièces.`,
          coins: `N'est pas applicable`,
        },
        coinsmart: {
          title: "Coinsmart",
          description: `Coinsmart est une bourse canadienne avec une interface destinée aux traders crypto plus expérimentés. Ils proposent des achats par carte de crédit et une grande variété de pièces, d'outils et de fonctionnalités.`,
          coins: 'Bitcoin, Ethereum, Litecoin, Ripple, Bitcoin Cash, EOS, Stellar, NEO, Cardano, QCAD',
        },
        netcoins: {
          title: "Netcoins",
          description: 'Netcoins est une bourse canadienne bien commercialisée destinée aux nouveaux traders.Ils offrent quatre pièces différentes à échanger et fournissent une interface simple et facile à comprendre.',
          coins: 'Bitcoin, Ethereum, Litecoin, Ripple, Bitcoin Cash',
        },
        ndax: {
          title: "NDAX",
          description: `NDAX est une bourse canadienne complète avec un ensemble complet d'outils de négociation et une structure de frais transparente. Ils sont enregistrés sous CANAFE et seraient notre recommandation pour un commerçant sérieux.`,
          coins: 'Bitcoin, Ethereum, Cardano, Litecoin, Ripple, Dot, Tether, Stellar, Link, EOS',
        },
        coins: 'Pièces disponibles',
        spread: `Coût d'achat/de vente`,
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
        to_new_user: 'au nouvel utilisateur',
      },
      contact: {
        header: `Que peut-on faire pour vous aider aujourd'hui?`,
        email: 'Votre email',
        message: 'Votre message',
        send: 'Envoyer',
      },
      nomics: 'Données de capitalisation boursière et de prix des crypto-monnaies fournies par Nomics.',
    },
  },
};

export default new VueI18n({
  locale: 'en',
  messages,
});
