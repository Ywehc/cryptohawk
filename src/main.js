import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue, VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount('#app');

if (navigator.language === 'fr-CA') {
  i18n.locale = 'fr';
} else {
  i18n.locale = 'en';
}
