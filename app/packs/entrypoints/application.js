// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/packs and only use these pack files to reference
// that code so it'll be compiled.

import { createApp } from 'vue';
import { store, key } from '../src/store';
import router from '../src/router';
import Layout from '../src/Layout.vue';

import 'stylesheets/application.css';

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(Layout);
  app.use(router);
  app.use(store, key);
  app.mount('#vue-app');
});
