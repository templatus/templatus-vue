[![Build Status](https://github.com/ledermann/templatus/workflows/CI/badge.svg)](https://github.com/ledermann/templatus/actions)
[![DeepSource](https://deepsource.io/gh/ledermann/templatus.svg/?label=active+issues&show_trend=true)](https://deepsource.io/gh/ledermann/templatus/?ref=repository-badge)

# Templatus

Templatus is an opinionated template to build web applications with Ruby on Rails using Vue.js 3 on the frontend. It simplifies the process of setting up a new application while following best practices.

Live demo available at https://templatus.ledermann.dev

## Technology stack

- Ruby 3
- Ruby on Rails 6.1
- Webpacker 6 (still RC1, but this allows using Webpack 5)
- ActionCable (for WebSocket communication)
- [Rails Request.JS](https://github.com/rails/request.js) (for AJAX requests)
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
- Dependabot configuration for updating dependencies (with auto-merge)
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

183 KB of compiled JavaScript (minified, uncompressed). The largest parts are:

- Vue.js + Vue Router + Vuex (89 KB)
- Headless UI (26 KB)
- Honeybadger (21 KB)
- ActionCable (10 KB)

```
RAILS_ENV=production SECRET_KEY_BASE=temp bin/rails webpacker:clobber webpacker:compile
Compiling...
Compiled all packs in /Users/ledermann/Projects/templatus/public/packs

warn - You have enabled the JIT engine which is currently in preview.
warn - Preview features are not covered by semver, may introduce breaking changes, and can change at any time.

assets by path static/ 4.45 KiB
  assets by path static/*.svg 2.33 KiB 2 assets
  assets by path static/*.gz 1.13 KiB
    asset static/bcb6d75d927347158af5.svg.gz 902 bytes [emitted] [immutable] [compressed]
    asset static/f04dfe30a8ad8eb5c4e0.svg.gz 254 bytes [emitted] [immutable] [compressed]
  assets by path static/*.br 1020 bytes
    asset static/bcb6d75d927347158af5.svg.br 796 bytes [emitted] [immutable] [compressed]
    asset static/f04dfe30a8ad8eb5c4e0.svg.br 224 bytes [emitted] [immutable] [compressed]
assets by path js/*.js 183 KiB
  asset js/595-473ce9aeb90538f95bbd.js 163 KiB [emitted] [immutable] [minimized] (id hint: vendors) 4 related assets
  asset js/application-14b7ff1ce6568e2cb74c.js 18.2 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
  asset js/runtime-218550da3001279e7e74.js 1.46 KiB [emitted] [immutable] [minimized] (name: runtime) 3 related assets
asset css/application-2773cd33.css 17.4 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
asset manifest.json 2.94 KiB [emitted] 2 related assets
Entrypoint application 201 KiB (276 KiB) = js/runtime-218550da3001279e7e74.js 1.46 KiB js/595-473ce9aeb90538f95bbd.js 163 KiB css/application-2773cd33.css 17.4 KiB js/application-14b7ff1ce6568e2cb74c.js 18.2 KiB 6 auxiliary assets
orphan modules 191 KiB [orphan] 287 modules
runtime modules 3.47 KiB 7 modules
built modules 922 KiB (javascript) 2.33 KiB (asset) 27.7 KiB (css/mini-extract) [built]
  modules by path ./node_modules/ 889 KiB
    modules by path ./node_modules/@vue/ 437 KiB 4 modules
    modules by path ./node_modules/@rails/ 26 KiB
      ./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js 18.6 KiB [built] [code generated]
      ./node_modules/@rails/request.js/src/verbs.js + 4 modules 7.38 KiB [built] [code generated]
  modules by path ./app/packs/ 32.6 KiB (javascript) 2.33 KiB (asset) 27.7 KiB (css/mini-extract)
    modules by path ./app/packs/images/ 274 bytes (javascript) 2.33 KiB (asset)
      ./app/packs/images/ sync ^\.\/.*$ 190 bytes [built] [code generated]
      ./app/packs/images/rails.svg 42 bytes (javascript) 1.96 KiB (asset) [built] [code generated]
      ./app/packs/images/vue.svg 42 bytes (javascript) 375 bytes (asset) [built] [code generated]
    ./app/packs/entrypoints/application.ts + 33 modules 32.4 KiB [built] [code generated]
    css ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./app/packs/stylesheets/application.css 27.7 KiB [built] [code generated]
webpack 5.52.0 compiled successfully in 6642 ms
```

### Network transfer

Small footprint: The demo application transfers only 70Kb of data on the first visit.

![Network](docs/network.png)

### Docker build time

With multi-stage building and using [DockerRailsBase](https://github.com/ledermann/docker-rails-base) the build of the Docker image takes very little time. Currently, the build job requires about 1,5 minutes on GitHub Actions (see https://github.com/ledermann/templatus/actions)

### Docker image size

The Docker image is based on Alpine Linux and is optimized for minimal size (currently 117 MB uncompressed disk size). It includes just the bare minimum - no build tools like Node.js, no JS sources (just the compiled assets), no tests.

```
$ container-diff analyze ghcr.io/ledermann/templatus -n

-----Size-----

Analysis for ghcr.io/ledermann/templatus:
IMAGE                              DIGEST                                                                         SIZE
ghcr.io/ledermann/templatus        sha256:fb80c5b398f1d18d2a85a6f5eeb72af59b291f2ab9372e56dc16a85981d68437        117M
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
