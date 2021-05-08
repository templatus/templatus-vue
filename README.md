# README

- Ruby 3
- Ruby on Rails 6.1
- Webpacker 6 (for Webpack 5)
- TypeScript
- Vue 3
- Vue Router
- Vuex State management
- TailwindCSS 2, HeadlessUI, HeroIcons
- GitHub Actions
- RSpec for Ruby testing
- Jest for JavaScript testing
- RuboCop
- Docker

### Development

```
bin/setup
foreman start
```

### Test

Run Ruby tests:

```
bin/rspec
```

Run JavaScript tests:

```
bin/yarn test
```

### Build assets for production

```
RAILS_ENV=production bin/rails webpacker:clobber webpacker:compile
Removed webpack output path directory /Users/ledermann/Projects/rails-vue3/public/packs
Compiling...
Compiled all packs in /Users/ledermann/Projects/rails-vue3/public/packs

warn - You have enabled the JIT engine which is currently in preview.
warn - Preview features are not covered by semver, may introduce breaking changes, and can change at any time.

assets by path media/images/ 4.45 KiB
  assets by path media/images/*.svg 2.33 KiB 2 assets
  assets by path media/images/*.gz 1.13 KiB
    asset media/images/bcb6d75d927347158af5.svg.gz 902 bytes [emitted] [immutable] [compressed]
    asset media/images/f04dfe30a8ad8eb5c4e0.svg.gz 254 bytes [emitted] [immutable] [compressed]
  assets by path media/images/*.br 1020 bytes
    asset media/images/bcb6d75d927347158af5.svg.br 796 bytes [emitted] [immutable] [compressed]
    asset media/images/f04dfe30a8ad8eb5c4e0.svg.br 224 bytes [emitted] [immutable] [compressed]
assets by path js/*.js 119 KiB
  asset js/283-a2ce7f0cc00727731eeb.js 110 KiB [emitted] [immutable] [minimized] (id hint: vendors) 4 related assets
  asset js/application-d0b49eadacacdd74dccf.js 7.49 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
  asset js/runtime-a280c7f17085bf2b17d3.js 1.27 KiB [emitted] [immutable] [minimized] (name: runtime) 3 related assets
asset css/application-93560e5f.css 15.4 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
asset manifest.json 3.01 KiB [emitted] 2 related assets
Entrypoint application 134 KiB (953 KiB) = js/runtime-a280c7f17085bf2b17d3.js 1.27 KiB js/283-a2ce7f0cc00727731eeb.js 110 KiB css/application-93560e5f.css 15.4 KiB js/application-d0b49eadacacdd74dccf.js 7.49 KiB 6 auxiliary assets
orphan modules 166 KiB [orphan] 258 modules
runtime modules 3.06 KiB 6 modules
code generated modules 688 KiB (javascript) 2.33 KiB (asset) 23.9 KiB (css/mini-extract) [code generated]
  javascript modules 688 KiB
    modules by path ./node_modules/@vue/ 374 KiB 4 modules
    ./app/packs/entrypoints/application.js + 26 modules 15.2 KiB [built] [code generated]
    ./node_modules/vue-router/dist/vue-router.esm-bundler.js 133 KiB [built] [code generated]
    ./node_modules/vuex/dist/vuex.esm-bundler.js 35.1 KiB [built] [code generated]
    ./node_modules/@headlessui/vue/dist/headlessui.esm.js 130 KiB [built] [code generated]
    ./node_modules/@heroicons/vue/solid/esm/ChevronDownIcon.js 524 bytes [built] [code generated]
  asset modules 84 bytes (javascript) 2.33 KiB (asset)
    ./app/packs/images/rails.svg 42 bytes (javascript) 1.96 KiB (asset) [built] [code generated]
    ./app/packs/images/vue.svg 42 bytes (javascript) 375 bytes (asset) [built] [code generated]
  css ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./app/packs/stylesheets/application.css 23.9 KiB [code generated]
webpack 5.36.2 compiled successfully in 7090 ms
```

=> 119 KB JavaScript (minified, uncompressed)
