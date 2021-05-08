import { createApp } from 'vue';
import router from './router';
import Layout from './Layout.vue';
import { store, key } from './store';

export default (): void => {
  document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(Layout);
    app.use(router);
    app.use(store, key);
    app.mount('#vue-app');
  });
};
