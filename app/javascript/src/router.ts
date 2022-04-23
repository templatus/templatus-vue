import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import NotFound from '@/pages/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    props: {
      name: 'Templatus',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
