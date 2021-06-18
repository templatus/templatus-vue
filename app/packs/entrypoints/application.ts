// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/packs and only use these pack files to reference
// that code so it'll be compiled.

import { createApp } from 'vue';
import { store, key } from '@/store';
import { metaContent } from '@/utils/metaContent';
import router from '@/router';
import App from '@/App.vue';
import HoneybadgerVue from '@/utils/honeybadger';
import 'stylesheets/application.css';

// Include all images in webpack manifest
require.context('../images', true);

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

declare let __webpack_public_path__: string | undefined;

document.addEventListener('DOMContentLoaded', () => {
  __webpack_public_path__ = metaContent('webpack-public-path'); // eslint-disable-line @typescript-eslint/no-unused-vars

  const app = createApp(App);

  const honeybadgerApiKey = metaContent('honeybadger-api-key');
  if (honeybadgerApiKey) {
    const gitCommitSha = metaContent('git-commit-sha');

    app.use(HoneybadgerVue, {
      apiKey: honeybadgerApiKey,
      environment: 'production',
      revision: gitCommitSha,
    });
  }

  app.use(router);
  app.use(store, key);
  app.mount('#vue-app');
});
