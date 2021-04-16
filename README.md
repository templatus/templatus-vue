# README

- Ruby 3
- Ruby on Rails 6.1
- Webpacker 6 (for Webpack 5)
- Vue 3
- TailwindCSS 2, HeadlessUI, HeroIcons
- GitHub Actions
- Docker

### Development

```
bin/setup
foreman start
```

### Build assets for production

```
RAILS_ENV=production bin/rails webpacker:compile

Compiling...
Compiled all packs in /Users/ledermann/Playground/rails-vue3/public/packs

warn - You have enabled the JIT engine which is currently in preview.
warn - Preview features are not covered by semver, may introduce breaking changes, and can change at any time.

assets by path js/*.js 83.2 KiB
  asset js/538-50bd26ccf17ba82fe92d.js 78.8 KiB [emitted] [immutable] [minimized] (id hint: vendors) 3 related assets
  asset js/application-47bc68746148e53cb2c5.js 3.16 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
  asset js/runtime-bed02d656e5c2614fb04.js 1.25 KiB [emitted] [immutable] [minimized] (name: runtime) 3 related assets
asset css/application-3340392f.css 12.5 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
asset manifest.json 2.39 KiB [emitted] 2 related assets
Entrypoint application 95.7 KiB (706 KiB) = js/runtime-bed02d656e5c2614fb04.js 1.25 KiB js/538-50bd26ccf17ba82fe92d.js 78.8 KiB css/application-3340392f.css 12.5 KiB js/application-47bc68746148e53cb2c5.js 3.16 KiB 4 auxiliary assets
orphan modules 158 KiB [orphan] 243 modules
runtime modules 3 KiB 5 modules
code generated modules 510 KiB (javascript) 20.6 KiB (css/mini-extract) [code generated]
  modules by path ./node_modules/ 504 KiB
    modules by path ./node_modules/@vue/ 374 KiB
      ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js 47.2 KiB [built] [code generated]
      ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js 279 KiB [built] [code generated]
      ./node_modules/@vue/shared/dist/shared.esm-bundler.js 18.7 KiB [built] [code generated]
      ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js 29.7 KiB [built] [code generated]
    ./node_modules/@headlessui/vue/dist/headlessui.esm.js 129 KiB [built] [code generated]
    ./node_modules/@heroicons/vue/solid/esm/ChevronDownIcon.js 524 bytes [built] [code generated]
  modules by path ./app/packs/ 6.66 KiB (javascript) 20.6 KiB (css/mini-extract)
    ./app/packs/entrypoints/application.js + 11 modules 6.66 KiB [built] [code generated]
    css ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./app/packs/stylesheets/application.css 20.6 KiB [code generated]
webpack 5.33.2 compiled successfully in 8624 ms
```

=> 83 KB JavaScript (minified, uncompressed)
