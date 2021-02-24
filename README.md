# README

- Ruby 3
- Ruby on Rails 6.1
- Webpacker 6 (for Webpack 5)
- TailwindCSS 2
- Vue 3

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

assets by path js/*.js 49.5 KiB
  asset js/963-f121273cf4cdbba70418.js 47.6 KiB [emitted] [immutable] [minimized] (id hint: vendors) 3 related assets
  asset js/runtime-bed02d656e5c2614fb04.js 1.25 KiB [emitted] [immutable] [minimized] (name: runtime) 3 related assets
  asset js/application-54febe40667d05e53368.js 576 bytes [emitted] [immutable] [minimized] (name: application) 3 related assets
asset css/application-7245cc8a.css 7.84 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
asset manifest.json 2.39 KiB [emitted] 2 related assets
Entrypoint application 57.3 KiB (516 KiB) = js/runtime-bed02d656e5c2614fb04.js 1.25 KiB js/963-f121273cf4cdbba70418.js 47.6 KiB css/application-7245cc8a.css 7.84 KiB js/application-54febe40667d05e53368.js 576 bytes 4 auxiliary assets
orphan modules 2.18 KiB [orphan] 8 modules
runtime modules 3 KiB 5 modules
code generated modules 376 KiB (javascript) 15.2 KiB (css/mini-extract) [code generated]
  modules by path ./node_modules/@vue/ 374 KiB
    ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js 47.2 KiB [built] [code generated]
    ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js 279 KiB [built] [code generated]
    ./node_modules/@vue/shared/dist/shared.esm-bundler.js 18.7 KiB [built] [code generated]
    ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js 29.7 KiB [built] [code generated]
  modules by path ./app/packs/ 1.9 KiB (javascript) 15.2 KiB (css/mini-extract)
    ./app/packs/entrypoints/application.js + 6 modules 1.9 KiB [built] [code generated]
    css ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./app/packs/stylesheets/application.css 15.2 KiB [code generated]
webpack 5.33.2 compiled successfully in 6887 ms
```

=> 49 KB JavaScript
