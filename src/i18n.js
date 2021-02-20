import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      grid: {
        newton: {
          name: 'Newton',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
        },
      },
    },
  },
  fr: {
    message: {
      hello: 'こんにちは、世界',
    },
  },
};

export default new VueI18n({
  locale: 'en',
  messages,
});
