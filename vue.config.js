module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
            @import "public/scss/_global.scss";
            `,
      },
    },
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        // eslint-disable-next-line no-param-reassign
        args[0].title = 'Cryptohawk - Cryptocurrency platform and price information for Canadian investors and traders.';
        return args;
      });
  },
};
