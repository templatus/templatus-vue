import { createApp } from 'vue'
import router from './router'
import Layout from '@/Layout.vue'
import store from './store'

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(Layout)
    app.use(router)
    app.use(store)
    app.mount('#vue-app')
  })
}
