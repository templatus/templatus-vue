import { createApp } from 'vue'
import router from './router'
import Layout from '@/Layout.vue'

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(Layout)
    app.use(router)
    app.mount('#vue-app')
  })
}
