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
        platforms: 'platforms',
        hardware: 'hardware',
        beginners: 'beginners',
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
        message: 'Your message:',
        send: 'Send',
      },
      nomics: 'Crypto Market Cap & Pricing Data Provided By Nomics.',
      ui: {
        loading_prices: 'loading prices...',
      },
      prices: "Current prices in ",
      beginners: {
        heading1: "What is cryptocurrency?",
        intro1: "Wikipedia describes cryptocurrency as a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership.",
        heading2: "Why are so many Canadian investors obtaining exposure to cryptocurrency?",
        what: "Interest rates on savings accounts offered by Canadian banks may have once provided attractive returns but today are not an efficient way to grow wealth.",
        why: "Like the stock market, cryptocurrencies offer a range of investing and trading opportunities. The cryptocurrency community has millions of enthusiasts, some of whom might trade currencies daily, some who might invest long term, or do both!",
        heading3: "What role do exchanges and platforms like Wealthsimple play?",
        exchanges1: "Exchanges, like ",
        exchanges2: "offer traders the ability to buy and sell cryptocurrencies and download and upload those coins to and from secure online or more secure offline digital wallets (also known as cold storage).",
        platforms1: "Conventional stock trading platforms and more modern ones such as ",
        platforms2: "Wealthsimple and Questrade can offer investing instruments that track popular cryptocurrencies or sell funds or securities that do.",
        conclusion1: "Navigating this system of platforms and products can be challenging and that is where we come in. Check out our ",
        conclusion2: "platforms tool",
        conclusion3: " to compare important things like coin ownership, spreads, additional fees, referral bonuses and more.",
      },
      hardware: {
        intro1: "A popular phrase in world of cryptocurrency is 'Not your keys, not your coins'. In essence, not having sole control over your coins and the means to access them puts your investment at a higher level of risk.",
        intro2: "Most modern cryptocurrency exchanges, platforms and online wallets are reasonably secure but because all are connected to the web, there is always a chance the keys to your coins could be intercepted",
        intro3: "Hardware wallets, or 'cold storage' allow you to conduct transactions without your keys ever leaving your hardware wallet/device, making them the most secure way to store coins, especially long term.",
        intro4: "When is it time to upgrade to a cold storage? Well, one way is to look at it is like cash. If the value of your currency is more than you would be comfortable carrying as cash, it's probably time to look into a hardware wallet.",
        intro5: "Let's take a look at some of our favourites.",
        trezor: "The Trezor Model T is the next-generation cryptocurrency touch screen hardware wallet, designed to be your universal vault for all of your digital assets. Over 200 coins supported and more than 500 coins are in progress to be supported Store and encrypt your coins, passwords and other digital keys with confidence.",
        ledger: "The Ledger Nano X allows management of 27 coins and more than 1500 coins with intuitive interfaces across multiple platforms. The Ledger Nano X uses a 24 word recovery seed.",
      },
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
        platforms: 'plates-formes',
        hardware: 'Matériel',
        beginners: 'débutants/débutantes',
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
        email: 'Votre email:',
        message: 'Votre message:',
        send: 'Envoyer',
      },
      nomics: 'Données de capitalisation boursière et de prix des crypto-monnaies fournies par Nomics.',
      ui: {
        loading_prices: 'chargement des prix...',
      },
      prices: "prix courants en ",
      beginners: {
        heading1: "Qu'est-ce que la crypto-monnaie?",
        intro1: "Wikipedia décrit la crypto-monnaie comme un actif numérique conçu pour fonctionner comme un moyen d'échange dans lequel les enregistrements de propriété de pièces individuelles sont stockés dans un registre existant sous forme de base de données informatisée utilisant une cryptographie forte pour sécuriser les enregistrements de transaction, contrôler la création de pièces supplémentaires et à vérifier le transfert de propriété des pièces.",
        heading2: "Pourquoi tant d'investisseurs canadiens obtiennent-ils une exposition à la crypto-monnaie?",
        what: "Les taux d'intérêt sur les comptes d'épargne offerts par les banques canadiennes ont peut-être déjà procuré des rendements intéressants, mais ils ne constituent pas aujourd'hui un moyen efficace d'accroître la richesse.",
        why: "À l'instar du marché boursier, les crypto-monnaies offrent une gamme d'opportunités d'investissement et de négociation. La communauté des crypto-monnaies compte des millions de passionnés, dont certains pourraient échanger des devises quotidiennement, d'autres qui pourraient investir à long terme, ou faire les deux!",
        heading3: "Quel rôle jouent les bourses et les plateformes comme Wealthsimple?",
        platforms1: "Les plates-formes de négociation d'actions conventionnelles et les plus modernes telles que Wealthsimple et Questrade peuvent offrir des instruments d'investissement qui suivent les crypto-monnaies populaires ou vendent des fonds ou des titres qui le font.",
        exchanges1: "Les bourses, comme NDAX, offrent aux traders la possibilité d'acheter et de vendre des crypto-monnaies et de télécharger et de télécharger ces pièces vers et depuis des portefeuilles numériques sécurisés en ligne ou hors ligne plus sécurisés (également appelés stockage à froid).",
        exchanges2: "offer traders the ability to buy and sell cryptocurrencies and download and upload those coins to and from secure online or more secure offline digital wallets (also known as cold storage).",
        platforms2: "Wealthsimple and Questrade can offer investing instruments that track popular cryptocurrencies or sell funds or securities that do.",
        conclusion1: "Naviguer dans ce système de plates-formes et de produits peut être difficile et c'est là que nous intervenons. Consultez notre ",
        conclusion2: "outil de plateformes",
        conclusion3: " pour comparer des choses importantes comme la possession de pièces, les spreads, les frais supplémentaires, les bonus de parrainage et plus",
      },
      hardware: {
        intro1: "Une phrase populaire dans le monde de la crypto-monnaie est `` Pas vos clés, pas vos pièces ''. En substance, ne pas avoir le contrôle exclusif de vos pièces et des moyens d'y accéder met votre investissement à un niveau de risque plus élevé.",
        intro2: "La plupart des échanges de crypto-monnaie, des plates-formes et des portefeuilles en ligne modernes sont raisonnablement sécurisés, mais comme tous sont connectés au Web, il y a toujours une chance que les clés de vos pièces soient interceptées.",
        intro3: "Les portefeuilles matériels, ou `` stockage à froid '', vous permettent d'effectuer des transactions sans que vos clés ne quittent jamais votre portefeuille / appareil matériel, ce qui en fait le moyen le plus sûr de stocker des pièces, en particulier à long terme.",
        intro4: "Quand est-il temps de passer à une chambre froide? Eh bien, une façon de voir les choses est comme de l'argent liquide. Si la valeur de votre devise est supérieure à ce que vous seriez à l'aise de transporter en espèces, il est probablement temps de se pencher sur un portefeuille matériel.",
        intro5: "Jetons un coup d'œil à certains de nos favoris.",
        trezor: "Le Trezor Model T est le portefeuille matériel à écran tactile de crypto-monnaie de nouvelle génération, conçu pour être votre coffre-fort universel pour tous vos actifs numériques. Plus de 200 pièces prises en charge et plus de 500 pièces sont en cours pour être prises en charge Stockez et cryptez vos pièces, mots de passe et autres clés numériques en toute confiance.",
        ledger: "Le Ledger Nano X permet la gestion de 27 pièces et plus de 1500 pièces avec des interfaces intuitives sur plusieurs plates-formes. Le Ledger Nano X utilise une graine de récupération de 24 mots.",
      },
    },
  },
};

export default new VueI18n({
  locale: 'en',
  messages,
});
