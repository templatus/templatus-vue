import { createApp } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(HelloWorld, { name: 'World' })
    app.mount('#vue-app')
  })
}
