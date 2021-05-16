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
assets by path js/*.js 122 KiB
  asset js/155-a93bbbe77e274b165b9a.js 113 KiB [emitted] [immutable] [minimized] (id hint: vendors) 4 related assets
  asset js/application-81b44cdaa040bf018d29.js 8.53 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
  asset js/runtime-a280c7f17085bf2b17d3.js 1.27 KiB [emitted] [immutable] [minimized] (name: runtime) 3 related assets
asset css/application-3b89d2c9.css 15.4 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
asset manifest.json 3.01 KiB [emitted] 2 related assets
Entrypoint application 138 KiB (971 KiB) = js/runtime-a280c7f17085bf2b17d3.js 1.27 KiB js/155-a93bbbe77e274b165b9a.js 113 KiB css/application-3b89d2c9.css 15.4 KiB js/application-81b44cdaa040bf018d29.js 8.53 KiB 6 auxiliary assets
orphan modules 177 KiB [orphan] 279 modules
runtime modules 3.06 KiB 6 modules
code generated modules 702 KiB (javascript) 2.33 KiB (asset) 23.9 KiB (css/mini-extract) [code generated]
  javascript modules 702 KiB
    modules by path ./node_modules/@vue/ 374 KiB
      ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js 47.2 KiB [built] [code generated]
      ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js 279 KiB [built] [code generated]
      ./node_modules/@vue/shared/dist/shared.esm-bundler.js 18.7 KiB [built] [code generated]
      ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js 29.7 KiB [built] [code generated]
    6 modules
  asset modules 84 bytes (javascript) 2.33 KiB (asset)
    ./app/packs/images/rails.svg 42 bytes (javascript) 1.96 KiB (asset) [built] [code generated]
    ./app/packs/images/vue.svg 42 bytes (javascript) 375 bytes (asset) [built] [code generated]
  css ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./app/packs/stylesheets/application.css 23.9 KiB [code generated]
webpack 5.37.0 compiled successfully in 9132 ms
```

=> 122 KB JavaScript (minified, uncompressed)
