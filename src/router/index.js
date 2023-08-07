import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ParksView from '../views/ParksView.vue';

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/parks',
      name: 'parks',
      component: ParksView
    }
  ]
})

export default router;
