[![Build Status](https://github.com/templatus/templatus-vue/workflows/CI/badge.svg)](https://github.com/templatus/templatus-vue/actions)

# Templatus (Vue edition)

Templatus is an opinionated template to build web applications with Ruby on Rails and Vue.js 3. It simplifies the process of setting up a new application while following best practices.

Live demo available at https://templatus-vue.ledermann.dev

There are two sister repositories:

Using Hotwire instead of Vue.js (the "DHH way"):
https://github.com/templatus/templatus-hotwire/

Using Inertia and Svelte.js instead of Vue.js;
https://github.com/templatus/templatus-inertia/

## Features / Technology stack

### Backend

- [Ruby](https://www.ruby-lang.org/de/) 3.4
- [Ruby on Rails](https://rubyonrails.org/) 8.1
- [ActionCable](https://guides.rubyonrails.org/action_cable_overview.html) for WebSocket communication
- [PostgreSQL](https://www.postgresql.org/) for using as SQL database
- [Sidekiq](https://sidekiq.org/) for background processing
- [Redis](https://redis.io/) for Caching, ActionCable, and Sidekiq

### Frontend

- [Vite](https://vitejs.dev/) for bundling JavaScript and CSS with Hot Module Replacement (HMR) in development
- [Vue 3](https://v3.vuejs.org/) as frontend framework
- [Vue Router 4](https://next.router.vuejs.org/) for frontend routing
- [Pinia](https://pinia.esm.dev/) for frontend state management
- [Tailwind CSS 4](https://tailwindcss.com/) to not have to write CSS at all
- [Heroicons](https://heroicons.com/) for SVG icons as Vue components
- [Rails Request.JS](https://github.com/rails/request.js) for AJAX requests with default headers

### Development

- [Puma-dev](https://github.com/puma/puma-dev) for using `.test` TLD (instead of `localhost:3000`) and `https` in development
- [Overmind](https://github.com/DarthSim/overmind) for starting up the application locally (Procfile handling like Foreman)
- [dotenv](https://github.com/bkeepers/dotenv) to load environment variables from .env into ENV
- [TypeScript](https://www.typescriptlang.org/) for writing strongly-typed JavaScript
- [Prettier](https://prettier.io/) for auto-formatting TypeScript and Ruby code in Visual Studio Code
- [annotate](https://github.com/ctran/annotate_models) for annotating models and routes

### Linting and testing

- [RuboCop](https://rubocop.org/) for Ruby static code analysis
- [RSpec](https://rspec.info/) for Ruby testing
- [ESLint](https://eslint.org/) for TypeScript static code analysis
- [Jest](https://jestjs.io/) for TypeScript unit testing
- [Capybara](https://github.com/teamcapybara/capybara) with [Playwright](https://playwright.dev/) for system testing

### Deployment

- [Docker](https://www.docker.com/) for production deployment, NOT for development
- [DockerRailsBase](https://github.com/ledermann/docker-rails-base) for fast building an optimized Docker image based on Alpine Linux
- [GitHub Actions](https://docs.github.com/en/actions) for testing, linting, and building Docker image
- [Dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates) configuration for updating dependencies (with auto-merge)
- Ready for serving assets via CDN like CloudFront
- [Honeybadger](https://www.honeybadger.io/) for error tracking in Ruby and TypeScript
- [RorVsWild](https://www.rorvswild.com/) for performance monitoring
- [Plausible](https://plausible.io/) for privacy friendly analytics

### Production

- [Lograge](https://github.com/roidrage/lograge) for single-line logging
- Gzip compression of dynamic responses (HTML, JSON) using [Rack::Deflater](https://github.com/rack/rack/blob/master/lib/rack/deflater.rb)
- Fine-tuned Content Security Policy (CSP)
- Ready for PWA (manifest, service-worker)

## Metrics

This template is developed with optimized performance and security in mind. The following benchmarks are performed against the demo installation on production. It uses an inexpensive virtual server on the [Hetzner Cloud](https://www.hetzner.com/de/cloud) behind a [Traefik](https://traefik.io/traefik/) setup.

### Lighthouse site performance

100% in all categories.

![Lighthouse](docs/lighthouse.png)

### Security headers

[![Security headers](docs/security-headers.png)](https://securityheaders.com/?q=templatus-vue.ledermann.dev&followRedirects=on)

What's the red _Permissions-Policy_ badge? This seems to be fixed with one of the next Rails update:
https://github.com/rails/rails/pull/41994

### Mozilla Observatory

[![Mozilla Observatory](docs/mozilla-observatory.png)](https://observatory.mozilla.org/analyze/templatus-vue.ledermann.dev)

### WebPageTest

[![WebPageTest](docs/web-page-test.png)](https://www.webpagetest.org/result/220614_AiDcC1_27Y/)

### GTmetrix

[![GTmetrix](docs/GTmetrix.png)](https://gtmetrix.com/reports/templatus-vue.ledermann.dev/s9xzDzap/)

### Check-your-website

[![Check-your-website](docs/check-your-website.png)](https://check-your-website.server-daten.de/?q=templatus-vue.ledermann.dev)

### JavaScript size

154 KB of compiled JavaScript (after tree-shaking, minified & uncompressed). The largest parts are:

- Vue.js + Vue Router (75 KB)
- Honeybadger (23 KB)
- ActionCable (9 KB)
- Pinia (6 KB)

```
$ RAILS_ENV=production SECRET_KEY_BASE_DUMMY=1 bin/rails assets:precompile
Building with Vite ⚡️
vite v5.4.3 building for production...
transforming...
✓ 729 modules transformed.
rendering chunks...
computing gzip size...
../../public/vite/.vite/manifest-assets.json         0.10 kB │ gzip:  0.09 kB
../../public/vite/assets/logo-DIorPG93.svg           0.50 kB │ gzip:  0.30 kB
../../public/vite/.vite/manifest.json                0.64 kB │ gzip:  0.24 kB
../../public/vite/assets/application-BzEOTfLU.css   23.65 kB │ gzip:  5.18 kB
../../public/vite/assets/application-CI1loYrW.js    18.12 kB │ gzip:  7.19 kB │ map:    31.58 kB
../../public/vite/assets/vendor-C8Gi253Q.js        168.57 kB │ gzip: 60.16 kB │ map: 1,103.22 kB
✓ built in 1.33s
Build with Vite complete: /Users/ledermann/Projects/templatus-vue/public/vite
```

### Network transfer

Small footprint: The demo application transfers only **69 KB** of data on the first visit.

![Network](docs/network.png)

### Docker build time

With multi-stage building and using [DockerRailsBase](https://github.com/ledermann/docker-rails-base) the build of the Docker image takes very little time. Currently, the build job requires about 1,5 minutes on GitHub Actions (see https://github.com/templatus/templatus-vue/actions)

### Docker image size

The Docker image is based on Alpine Linux and is optimized for minimal size (currently **113 MB** uncompressed disk size). It includes just the bare minimum - no build tools like Node.js, no JS sources (just the compiled assets), no tests.

```
$ container-diff analyze ghcr.io/templatus/templatus-vue -n

-----Size-----

Analysis for ghcr.io/templatus/templatus-vue:
IMAGE                              DIGEST     SIZE
ghcr.io/templatus/templatus-vue        sha256:... 114.8M
```

## Getting started

### Install for development

1. Clone the repo locally:

```bash
git clone git@github.com:templatus/templatus-vue.git
cd templatus-vue
```

2. Install PostgreSQL, Redis, and puma-dev (if not already present). On a Mac with Homebrew, run this to install from the `Brewfile`:

```bash
brew bundle
```

3. Set up [puma-dev](https://github.com/puma/puma-dev) to use HTTPS for development. Do this on macOS:

```bash
sudo puma-dev -setup
puma-dev -install
puma-dev link

# Use Vite via puma-dev proxy
# Adopted from https://github.com/puma/puma-dev#webpack-dev-server
echo 3036 > ~/.puma-dev/vite.templatus-vue
```

4. Setup the application to install gems and NPM packages and create the database:

```bash
bin/setup
```

5. Start the application locally:

```bash
bin/dev
```

Then open https://templatus-vue.test in your browser.

### Running linters

RuboCop:

```
bin/rubocop
```

ESLint:

```
bin/yarn lint
```

TypeScript compiler:

```
bin/yarn tsc
```

### Running tests locally

Ruby tests:

```
bin/rspec
open coverage/index.html
```

JavaScript unit tests:

```
bin/yarn test
```

System tests with Capybara and Playwright:

```
bin/rspec spec/system
```

### Test deployment locally

```
docker network create public
docker-compose up
```
