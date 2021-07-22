[![Build Status](https://github.com/ledermann/templatus/workflows/CI/badge.svg)](https://github.com/ledermann/templatus/actions)
[![DeepSource](https://deepsource.io/gh/ledermann/templatus.svg/?label=active+issues&show_trend=true)](https://deepsource.io/gh/ledermann/templatus/?ref=repository-badge)

# Templatus

Templatus is an opinionated template to build web applications with Ruby on Rails using Vue.js on the frontend. It simplifies the process of setting up a new application while following best practices.

Live demo available at https://templatus.ledermann.dev

## Technology stack

- Ruby 3
- Ruby on Rails 6.1
- Webpacker 6 (still in beta, but this allows using Webpack 5)
- ActionCable (for WebSocket communication)
- PostgreSQL (for using as SQL database)
- Sidekiq (for background processing)
- Redis (for Caching, ActionCable, and Sidekiq)
- Vue 3 (as frontend framework)
- Vue Router (for frontend routing)
- Vuex (for frontend state management)
- Tailwind CSS 2 (to not have to write CSS at all)
- HeadlessUI (unstyled, fully accessible UI components designed to integrate with Tailwind CSS)
- HeroIcons (for SVG icons as Vue components)
- RSpec (for Ruby testing)
- RuboCop (for Ruby static code analysis)
- TypeScript (for writing better JavaScript)
- Jest (for JavaScript testing)
- Honeybadger.io (for error tracking in Ruby and JavaScript)
- Lograge (for single-line logging)
- Docker (for production deployment, NOT for development)
- Puma-dev (for using HTTPS in development)
- Foreman (for starting up the application locally)
- dotenv (for configuration by using ENV variables)

## Features

- Deployment using an optimized Docker image based on Alpine Linux
- Ready for serving assets via CDN like CloudFront
- Ready for PWA (manifest, service-worker)
- Gzip and Brotli compression of all dynamic responses (HTML, JSON) using Rack::Deflater and Rack::Brotli
- JS Code splitting (separate vendor code from application code)
- Fine-tuned Content Security Policy (CSP)
- Uses GitHub Actions for testing, linting, and building Docker image
- Visual Studio Code: Autoformat JS and Ruby code using Prettier

## Metrics

This template is developed with optimized performance and security in mind. The following benchmarks are
performed against the demo installation on production. It uses an inexpensive virtual server on the [Hetzner Cloud](https://www.hetzner.com/de/cloud) behind a [Traefik](https://traefik.io/traefik/) setup.

### Lighthouse site performance

100% in nearly all categories.

![Lighthouse](docs/lighthouse.png)

Why not 100% in _Best practice_ category? This is a [bug in Lighthouse](https://github.com/GoogleChrome/lighthouse/issues/11862), because Lighthouse first injects inline styles and then whines about a CSP warning.

### Secure headers

![Secure headers](docs/secure-headers.png)

https://securityheaders.com/?q=templatus.ledermann.dev&followRedirects=on

What's the red _Permissions-Policy_ badge? This seems to be fixed with one of the next Rails update:
https://github.com/rails/rails/pull/41994

### Mozilla Observatory

![Mozilla Observatory](docs/mozilla-observatory.png)

https://observatory.mozilla.org/analyze/templatus.ledermann.dev

Why is there a failing test? It's about missing [Subresource Integrity](https://infosec.mozilla.org/guidelines/web_security#subresource-integrity), which is currently not supported by Webpacker. There is a [stale issue](https://github.com/rails/webpacker/issues/323) about it, I don't expect a fix shortly.

### WebPageTest

![WebPageTest](docs/web-page-test.png)

https://webpagetest.org/result/210617_BiDcHH_d4cdb2af33ac2a7a9e4b66908ee3002f/

### GTmetrix

![GTmetrix](docs/GTmetrix.png)

https://gtmetrix.com/reports/templatus.ledermann.dev/PR4PpigG/

### Check-your-website

![Check-your-website](docs/check-your-website.png)

https://check-your-website.server-daten.de/?q=templatus.ledermann.dev

### JavaScript size

146 KB of compiled JavaScript (minified, uncompressed). The largest parts are:

- Vue.js + Vue Router + Vuex (83 KB)
- Honeybadger (20 KB)
- ActionCable (10 KB)

```
RAILS_ENV=production SECRET_KEY_BASE=temp bin/rails webpacker:clobber webpacker:compile
Compiling...
Compiled all packs in /Users/ledermann/Projects/templatus/public/packs

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
assets by path js/*.js 146 KiB
  asset js/382-e9c837770321a393e25b.js 127 KiB [emitted] [immutable] [minimized] (id hint: vendors) 4 related assets
  asset js/application-3b5ccf3e5cded0be08fe.js 17.7 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
  asset js/runtime-476cc9f35402e4fdec05.js 1.42 KiB [emitted] [immutable] [minimized] (name: runtime) 3 related assets
asset css/application-e0be55c2.css 17.3 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
asset manifest.json 3.01 KiB [emitted] 2 related assets
Entrypoint application 163 KiB (227 KiB) = js/runtime-476cc9f35402e4fdec05.js 1.42 KiB js/382-e9c837770321a393e25b.js 127 KiB css/application-e0be55c2.css 17.3 KiB js/application-3b5ccf3e5cded0be08fe.js 17.7 KiB 6 auxiliary assets
orphan modules 185 KiB [orphan] 296 modules
runtime modules 3.39 KiB 7 modules
built modules 733 KiB (javascript) 2.33 KiB (asset) 27.2 KiB (css/mini-extract) [built]
  modules by path ./node_modules/ 700 KiB
    modules by path ./node_modules/@vue/ 410 KiB
      modules by path ./node_modules/@vue/runtime-core/ 341 KiB 2 modules
      ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js 50 KiB [built] [code generated]
      ./node_modules/@vue/shared/dist/shared.esm-bundler.js 19.3 KiB [built] [code generated]
  modules by path ./app/packs/ 33.4 KiB (javascript) 2.33 KiB (asset) 27.2 KiB (css/mini-extract)
    modules by path ./app/packs/images/ 274 bytes (javascript) 2.33 KiB (asset)
      ./app/packs/images/ sync ^\.\/.*$ 190 bytes [built] [code generated]
      ./app/packs/images/rails.svg 42 bytes (javascript) 1.96 KiB (asset) [built] [code generated]
      ./app/packs/images/vue.svg 42 bytes (javascript) 375 bytes (asset) [built] [code generated]
    ./app/packs/entrypoints/application.ts + 46 modules 33.2 KiB [built] [code generated]
    css ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./app/packs/stylesheets/application.css 27.2 KiB [built] [code generated]
webpack 5.46.0 compiled successfully in 6227 ms
```

### Network transfer

Small footprint: The demo application transfers only 62Kb of data on the first visit.

![Network](docs/network.png)

### Docker build time

With multi-stage building and using [DockerRailsBase](https://github.com/ledermann/docker-rails-base) the build of the Docker image takes very little time. Currently, the build job requires about 1,5 minutes on GitHub Actions (see https://github.com/.ledermann/templatus/actions)

### Docker image size

The Docker image is based on Alpine Linux and is optimized for minimal size (currently 114 MB uncompressed disk size). It includes just the bare minimum - no build tools like Node.js, no JS sources (just the compiled assets), no tests.

```
$ container-diff analyze ghcr.io/ledermann/templatus

-----Size-----

Analysis for ghcr.io/ledermann/templatus:
IMAGE                              DIGEST                                                                         SIZE
ghcr.io/ledermann/templatus        sha256:5528d01b75300ab7781030703d4a059f70716a6e094d0a557b2dadc17fa80c6b        114.4M
```

## Development installation

1. Clone the repo locally:

```bash
git clone git@github.com:ledermann/templatus.git
cd templatus
```

2. Install PostgreSQL, Redis, and puma-dev (if not already present). On a Mac with HomeBrew, run this to install from the `Brewfile`:

```bash
brew bundle
```

3. Install and set up [puma-dev](https://github.com/puma/puma-dev) to use HTTPS for both the application and `webpack-dev-server`. Do this on macOS:

```bash
sudo puma-dev -setup
puma-dev -install
puma-dev link

# Use https in development and load webpack from subdomain
# https://github.com/puma/puma-dev#webpack-dev-server
echo 3035 > ~/.puma-dev/webpack.templatus
```

4. Setup the application to install gems and NPM packages and create the database:

```bash
bin/setup
```

5. Start the application (and webpack-dev-server) locally:

```bash
foreman start
```

Then you can open https://templatus.test in your browser.

## Running tests

Run Ruby tests:

```
bin/rspec
open coverage/index.html
```

Run RuboCop:

```
bin/rubocop
```

Lint JavaScript:

```
bin/yarn lint
```

Run JavaScript tests:

```
bin/yarn test
```

## Deployment

```
docker network create public
docker-compose up
```
