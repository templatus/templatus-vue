self.addEventListener('install', (event) => {
  // console.log('sw.js: Service worker has been installed.', event);
});

self.addEventListener('activate', event => {
  // console.log('sw.js: Service worker has been activated.', event);
});

self.addEventListener('fetch', event => {
  // console.log('sw.js: Service worker is fetching', event);
});
