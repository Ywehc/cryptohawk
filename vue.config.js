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
};
