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
import { register } from 'register-service-worker';

// Include all images in webpack manifest
require.context('../images', true);

register('/sw.js', {
  registrationOptions: { scope: './' },
  ready(_registration: ServiceWorkerRegistration) {
    console.log('Service worker is active.');
  },
  registered(_registration: ServiceWorkerRegistration) {
    console.log('Service worker has been registered.');
  },
  cached(_registration: ServiceWorkerRegistration) {
    console.log('Content has been cached for offline use.');
  },
  updatefound(_registration: ServiceWorkerRegistration) {
    console.log('New content is downloading.');
  },
  updated(_registration: ServiceWorkerRegistration) {
    console.log('New content is available; please refresh.');
  },
  offline() {
    console.log(
      'No internet connection found. App is running in offline mode.',
    );
  },
  error(error) {
    console.error('Error during service worker registration:', error);
  },
});

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
