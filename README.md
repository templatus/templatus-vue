# README

- Ruby 3
- Ruby on Rails 6.1
- ActionCable
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
- Sentry.io for error tracking (Ruby and JavaScript)

### Development

Precondition: Install and set up [puma-dev](https://github.com/puma/puma-dev) to use HTTPS for both the application and `webpack-dev-server`. Do this on macOS:

```bash
brew install puma-dev
sudo puma-dev -setup
puma-dev -install

cd rails-vue3
puma-dev link

# https://github.com/puma/puma-dev#webpack-dev-server
echo 3035 > ~/.puma-dev/webpack.rails-vue3
```

Then setup the application:

```bash
bin/setup
foreman start
```

Then you can open https://rails-vue3.test in your browser.

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

assets by path media/images/ 52.6 KiB
  assets by chunk 47.7 KiB (auxiliary name: application) 9 assets
  assets by path media/images/*.gz 2.64 KiB 3 assets
  assets by path media/images/*.br 2.25 KiB
    asset media/images/ef0c1c6c92c1b5e887fc.ico.br 1.25 KiB [emitted] [immutable] [compressed]
    asset media/images/bcb6d75d927347158af5.svg.br 796 bytes [emitted] [immutable] [compressed]
    asset media/images/f04dfe30a8ad8eb5c4e0.svg.br 224 bytes [emitted] [immutable] [compressed]
assets by path js/*.js 197 KiB
  asset js/637-ff3de77082f3a335d579.js 179 KiB [emitted] [immutable] [minimized] (id hint: vendors) 4 related assets
  asset js/application-c8a6782770c0b0c48344.js 16.6 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
  asset js/runtime-ff84c7bf06166d5ef8b7.js 1.67 KiB [emitted] [immutable] [minimized] (name: runtime) 3 related assets
asset css/application-a245cc4d.css 17.1 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
asset manifest.json 3.79 KiB [emitted] 2 related assets
Entrypoint application 214 KiB (342 KiB) = js/runtime-ff84c7bf06166d5ef8b7.js 1.67 KiB js/637-ff3de77082f3a335d579.js 179 KiB css/application-a245cc4d.css 17.1 KiB js/application-c8a6782770c0b0c48344.js 16.6 KiB 13 auxiliary assets
orphan modules 473 KiB [orphan] 356 modules
runtime modules 3.71 KiB 8 modules
code generated modules 935 KiB (javascript) 47.7 KiB (asset) 26.1 KiB (css/mini-extract) [code generated]
  javascript modules 934 KiB
    modules by path ./node_modules/ 904 KiB 8 modules
    modules by path ./app/packs/ 30.4 KiB
      ./app/packs/entrypoints/application.ts + 43 modules 30.1 KiB [built] [code generated]
      ./app/packs/images/ sync ^\.\/.*$ 378 bytes [built] [code generated]
  asset modules 378 bytes (javascript) 47.7 KiB (asset)
    optional modules 294 bytes (javascript) 45.4 KiB (asset) [optional] 7 modules
    modules by path ./app/packs/images/*.svg 84 bytes (javascript) 2.33 KiB (asset)
      ./app/packs/images/rails.svg 42 bytes (javascript) 1.96 KiB (asset) [built] [code generated]
      ./app/packs/images/vue.svg 42 bytes (javascript) 375 bytes (asset) [built] [code generated]
  css ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./app/packs/stylesheets/application.css 26.1 KiB [code generated]
webpack 5.38.1 compiled successfully in 9529 ms
```

=> 197 KB JavaScript (minified, uncompressed)
