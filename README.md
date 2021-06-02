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

assets by path media/images/ 4.45 KiB
  assets by path media/images/*.svg 2.33 KiB 2 assets
  assets by path media/images/*.gz 1.13 KiB
    asset media/images/bcb6d75d927347158af5.svg.gz 902 bytes [emitted] [immutable] [compressed]
    asset media/images/f04dfe30a8ad8eb5c4e0.svg.gz 254 bytes [emitted] [immutable] [compressed]
  assets by path media/images/*.br 1020 bytes
    asset media/images/bcb6d75d927347158af5.svg.br 796 bytes [emitted] [immutable] [compressed]
    asset media/images/f04dfe30a8ad8eb5c4e0.svg.br 224 bytes [emitted] [immutable] [compressed]
assets by path js/*.js 196 KiB
  asset js/637-1f6b6c7e744c2bef5e5c.js 179 KiB [emitted] [immutable] [minimized] (id hint: vendors) 4 related assets
  asset js/application-f8ca7dd625d1219e91db.js 15.5 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
  asset js/runtime-ff84c7bf06166d5ef8b7.js 1.67 KiB [emitted] [immutable] [minimized] (name: runtime) 3 related assets
asset css/application-b3a3cbb7.css 17.1 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
asset manifest.json 3.01 KiB [emitted] 2 related assets
Entrypoint application 213 KiB (296 KiB) = js/runtime-ff84c7bf06166d5ef8b7.js 1.67 KiB js/637-1f6b6c7e744c2bef5e5c.js 179 KiB css/application-b3a3cbb7.css 17.1 KiB js/application-f8ca7dd625d1219e91db.js 15.5 KiB 6 auxiliary assets
orphan modules 472 KiB [orphan] 356 modules
runtime modules 3.71 KiB 8 modules
code generated modules 933 KiB (javascript) 2.33 KiB (asset) 26.1 KiB (css/mini-extract) [code generated]
  modules by path ./node_modules/ 903 KiB
    modules by path ./node_modules/@vue/ 374 KiB 4 modules
    modules by path ./node_modules/@sentry/ 303 KiB 4 modules
  modules by path ./app/packs/ 30 KiB (javascript) 2.33 KiB (asset) 26.1 KiB (css/mini-extract)
    asset modules 84 bytes (javascript) 2.33 KiB (asset)
      ./app/packs/images/rails.svg 42 bytes (javascript) 1.96 KiB (asset) [built] [code generated]
      ./app/packs/images/vue.svg 42 bytes (javascript) 375 bytes (asset) [built] [code generated]
    ./app/packs/entrypoints/application.ts + 43 modules 29.9 KiB [built] [code generated]
    css ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./app/packs/stylesheets/application.css 26.1 KiB [code generated]
webpack 5.38.1 compiled successfully in 9904 ms
```

=> 196 KB JavaScript (minified, uncompressed)
