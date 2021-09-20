[![Build Status](https://github.com/ledermann/templatus/workflows/CI/badge.svg)](https://github.com/ledermann/templatus/actions)
[![DeepSource](https://deepsource.io/gh/ledermann/templatus.svg/?label=active+issues&show_trend=true)](https://deepsource.io/gh/ledermann/templatus/?ref=repository-badge)

# Templatus

Templatus is an opinionated template to build web applications with Ruby on Rails and Vue.js 3. It simplifies the process of setting up a new application while following best practices.

Live demo available at https://templatus.ledermann.dev

## Features / Technology stack

### Backend

- [Ruby](https://www.ruby-lang.org/de/) 3
- [Ruby on Rails](https://rubyonrails.org/) 6.1
- [ActionCable](https://guides.rubyonrails.org/action_cable_overview.html) for WebSocket communication
- [PostgreSQL](https://www.postgresql.org/) for using as SQL database
- [Sidekiq](https://sidekiq.org/) for background processing
- [Redis](https://redis.io/) for Caching, ActionCable, and Sidekiq

### Frontend

- [Webpacker](https://github.com/rails/webpacker) 6 (still not released, but this allows using Webpack v5 and webpack-dev-server v4)
- [Vue 3](https://v3.vuejs.org/) as frontend framework
- [Vue Router 4](https://next.router.vuejs.org/) for frontend routing
- [Pinia](https://pinia.esm.dev/) for frontend state management
- [Tailwind CSS 2](https://tailwindcss.com/) to not have to write CSS at all
- [HeadlessUI](https://headlessui.dev/) unstyled, fully accessible UI components designed to integrate with Tailwind CSS
- [Heroicons](https://heroicons.com/) for SVG icons as Vue components
- [Rails Request.JS](https://github.com/rails/request.js) for AJAX requests with default headers

### Development

- [Puma-dev](https://github.com/puma/puma-dev) for using .test-domain and HTTPS in development
- [Foreman](https://github.com/ddollar/foreman) for starting up the application locally
- [dotenv](https://github.com/bkeepers/dotenv) to load environment variables from .env into ENV
- [TypeScript](https://www.typescriptlang.org/) for writing strongly-typed JavaScript
- [Prettier](https://prettier.io/) for auto-formatting JavaScript and Ruby code in Visual Studio Code

### Linting and testing

- [RSpec](https://rspec.info/) for Ruby testing
- [RuboCop](https://rubocop.org/) for Ruby static code analysis
- [Jest](https://jestjs.io/) for JavaScript testing
- [ESLint](https://eslint.org/) for JavaScript static code analysis

### Deployment

- [Docker](https://www.docker.com/) for production deployment, NOT for development
- [DockerRailsBase](https://github.com/ledermann/docker-rails-base) for fast building an optimized Docker image based on Alpine Linux
- [GitHub Actions](https://docs.github.com/en/actions) for testing, linting, and building Docker image
- [Dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates) configuration for updating dependencies (with auto-merge)
- Ready for serving assets via CDN like CloudFront
- [Honeybadger](https://www.honeybadger.io/) for error tracking in Ruby and JavaScript

### Production

- [Lograge](https://github.com/roidrage/lograge) for single-line logging
- Gzip and Brotli compression of all dynamic responses (HTML, JSON) using [Rack::Deflater](https://github.com/rack/rack/blob/master/lib/rack/deflater.rb) and [Rack::Brotli](https://github.com/marcotc/rack-brotli)
- JavaScript Code splitting (separate vendor code from application code)
- Fine-tuned Content Security Policy (CSP)
- Ready for PWA (manifest, service-worker)

## Metrics

This template is developed with optimized performance and security in mind. The following benchmarks are
performed against the demo installation on production. It uses an inexpensive virtual server on the [Hetzner Cloud](https://www.hetzner.com/de/cloud) behind a [Traefik](https://traefik.io/traefik/) setup.

### Lighthouse site performance

100% in all categories.

![Lighthouse](docs/lighthouse.png)

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

176 KB of compiled JavaScript (minified, uncompressed). The largest parts are:

- Vue.js + Vue Router (70 KB)
- Headless UI (26 KB)
- Honeybadger (21 KB)
- Pinia (11 KB)
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
assets by path js/*.js 176 KiB
  asset js/625-a464bb8c21e996099e5c.js 158 KiB [emitted] [immutable] [minimized] (id hint: vendors) 4 related assets
  asset js/application-7b10e1f018f8c2f065ea.js 16.8 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
  asset js/runtime-218550da3001279e7e74.js 1.46 KiB [emitted] [immutable] [minimized] (name: runtime) 3 related assets
asset css/application-73be0b53.css 17.4 KiB [emitted] [immutable] [minimized] (name: application) 3 related assets
asset manifest.json 2.94 KiB [emitted] 2 related assets
Entrypoint application 194 KiB (265 KiB) = js/runtime-218550da3001279e7e74.js 1.46 KiB js/625-a464bb8c21e996099e5c.js 158 KiB css/application-73be0b53.css 17.4 KiB js/application-7b10e1f018f8c2f065ea.js 16.8 KiB 6 auxiliary assets
orphan modules 194 KiB [orphan] 288 modules
runtime modules 3.47 KiB 7 modules
built modules 930 KiB (javascript) 2.33 KiB (asset) 27.7 KiB (css/mini-extract) [built]
  modules by path ./node_modules/ 899 KiB
    modules by path ./node_modules/@vue/ 419 KiB 4 modules
    modules by path ./node_modules/@honeybadger-io/ 62.6 KiB 2 modules
    modules by path ./node_modules/@rails/ 26 KiB
      ./node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js 18.6 KiB [built] [code generated]
      ./node_modules/@rails/request.js/src/verbs.js + 4 modules 7.38 KiB [built] [code generated]
  modules by path ./app/packs/ 30.6 KiB (javascript) 2.33 KiB (asset) 27.7 KiB (css/mini-extract)
    modules by path ./app/packs/images/ 274 bytes (javascript) 2.33 KiB (asset) 3 modules
    ./app/packs/entrypoints/application.ts + 31 modules 30.4 KiB [built] [code generated]
    css ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-3.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-3.use[2]!./app/packs/stylesheets/application.css 27.7 KiB [built] [code generated]
webpack 5.53.0 compiled successfully in 6793 ms
```

### Network transfer

Small footprint: The demo application transfers only **71 KB** of data on the first visit.

![Network](docs/network.png)

### Docker build time

With multi-stage building and using [DockerRailsBase](https://github.com/ledermann/docker-rails-base) the build of the Docker image takes very little time. Currently, the build job requires about 1,5 minutes on GitHub Actions (see https://github.com/ledermann/templatus/actions)

### Docker image size

The Docker image is based on Alpine Linux and is optimized for minimal size (currently **117 MB** uncompressed disk size). It includes just the bare minimum - no build tools like Node.js, no JS sources (just the compiled assets), no tests.

```
$ container-diff analyze ghcr.io/ledermann/templatus -n

-----Size-----

Analysis for ghcr.io/ledermann/templatus:
IMAGE                              DIGEST                                                                         SIZE
ghcr.io/ledermann/templatus        sha256:...   117M
```

## Getting

### Development installation

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
bin/dev
```

Then open https://templatus.test in your browser.

### Running tests locally

Run Ruby tests with code coverage:

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

Run TypeScript compiler for type checking:

```
bin/yarn tsc
```

Run JavaScript tests with code coverage:

```
bin/yarn test
```

### Test deployment locally

```
docker network create public
docker-compose up
```
