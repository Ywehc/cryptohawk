import Vue from 'vue';
import VueRouter from 'vue-router';
import Platforms from '../views/PlatformCards.vue';
import Prices from '../views/Prices.vue';
import Beginners from '../views/Beginners.vue';
import Hardware from '../views/Hardware.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Platforms,
  },
  {
    path: '/beginners',
    name: 'Beginners',
    component: Beginners,
  },
  {
    path: '/hardware',
    name: 'Hardware',
    component: Hardware,
  },
  {
    path: '/platforms',
    name: 'Platforms',
    component: Platforms,
  },
  {
    path: '/prices',
    name: 'Prices',
    component: Prices,
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
