// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/packs and only use these pack files to reference
// that code so it'll be compiled.

import { createApp } from 'vue';
import { store, key } from '../src/store';
import router from '../src/router';
import Layout from '../src/Layout.vue';

import 'stylesheets/application.css';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    // .then((registration) => {
    //   console.log('Service worker registered successfully.', registration);

    //   var serviceWorker;
    //   if (registration.installing) {
    //     serviceWorker = registration.installing;
    //     console.log('Service worker installing.', serviceWorker);
    //   } else if (registration.waiting) {
    //     serviceWorker = registration.waiting;
    //     console.log('Service worker installed & waiting.', serviceWorker);
    //   } else if (registration.active) {
    //     serviceWorker = registration.active;
    //     console.log('Service worker active.', serviceWorker);
    //   }
    // })
    .catch((error) => {
      console.error('Service worker registration failed.', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(Layout);
  app.use(router);
  app.use(store, key);
  app.mount('#vue-app');
});
