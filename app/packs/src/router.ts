import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import NotFound from '@/pages/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      name: 'Vue',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
