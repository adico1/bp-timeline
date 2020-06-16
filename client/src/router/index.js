import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import V2 from '../views/V2.vue';
import DetailModal from '../views/Zoom.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/zoom/:id',
    name: 'zoom',
    component: DetailModal,
  },
  {
    path: '/v2',
    name: 'v2',
    component: V2,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
