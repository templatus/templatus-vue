import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      name: 'Vue'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
