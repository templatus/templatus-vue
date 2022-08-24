<script setup lang="ts">
import * as Vue from 'vue';
import { CheckIcon } from '@heroicons/vue/24/outline';
import { metaContent } from '@/utils/metaContent';

import PageTitle from '@/components/PageTitle.vue';

const features: {
  name: string;
  slogan: string;
  items: {
    name: string;
    version?: string;
    href: string;
    description: string;
  }[];
}[] = [
  {
    name: 'The backend',
    slogan: 'Server side',
    items: [
      {
        name: 'Ruby',
        version: metaContent('version-ruby'),
        href: 'https://www.ruby-lang.org/',
        description:
          'A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.',
      },
      {
        name: 'Ruby on Rails',
        version: metaContent('version-rails'),
        href: 'https://rubyonrails.org/',
        description:
          'Rails is a web application development framework written in the Ruby programming language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started.',
      },
      {
        name: 'PostgreSQL',
        version: metaContent('version-postgres'),
        href: 'https://www.postgresql.org/',
        description:
          'PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
      },
      {
        name: 'Puma',
        version: metaContent('version-puma'),
        href: 'https://puma.io/',
        description:
          'Puma is a simple, fast, multi-threaded, and highly concurrent HTTP 1.1 server for Ruby/Rack applications.',
      },
      {
        name: 'Redis',
        version: metaContent('version-redis'),
        href: 'https://redis.io/',
        description:
          'Redis is an open source, in-memory data structure store, used as a database, cache, and message broker.',
      },
      {
        name: 'Sidekiq',
        version: metaContent('version-sidekiq'),
        href: 'https://sidekiq.org/',
        description:
          'Simple, efficient background processing for Ruby' +
          '<p class="mt-2 text-xs">→ <a class="font-medium uppercase hover:underline" href="/sidekiq">Admin frontend</a></p>',
      },
    ],
  },

  {
    name: 'The frontend',
    slogan: 'Client side',
    items: [
      {
        name: 'Vue',
        version: Vue.version,
        href: 'https://v3.vuejs.org/',
        description:
          'Vue is a progressive framework for building user interfaces.',
      },
      {
        name: 'Tailwind CSS 3',
        href: 'https://tailwindcss.com/',
        description:
          'A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.',
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        description:
          'TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.',
      },
      {
        name: 'Pinia',
        href: 'https://pinia.esm.dev/',
        description:
          'Intuitive, type safe, light and flexible Store for Vue using the composition api with DevTools support',
      },
      {
        name: 'Heroicons',
        href: 'https://heroicons.com/',
        description:
          'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
      },
      {
        name: 'Vite',
        href: 'https://vitejs.dev/',
        description: "Next generation frontend tooling. It's fast!",
      },
    ],
  },

  {
    name: 'Continuous integration',
    slogan: 'Quality insurance',
    items: [
      {
        name: 'GitHub Actions',
        href: 'https://github.com/features/actions',
        description: 'Test, build and deliver on every push to GitHub',
      },
      {
        name: 'RSpec',
        href: 'https://rspec.info/',
        description:
          'Behaviour Driven Development for Ruby. Making TDD Productive and Fun.',
      },
      {
        name: 'RuboCop',
        href: 'https://rubocop.org/',
        description: 'The Ruby Linter/Formatter that Serves and Protects',
      },
      {
        name: 'Jest',
        href: 'https://jestjs.io/',
        description:
          'Jest is a delightful JavaScript Testing Framework with a focus on simplicity',
      },
      {
        name: 'ESLint',
        href: 'https://eslint.org/',
        description:
          'ESLint statically analyzes your code to quickly find problems',
      },
      {
        name: 'Cypress',
        href: 'https://cypress.io/',
        description:
          'Fast, easy and reliable testing for anything that runs in a browser.',
      },
    ],
  },

  {
    name: 'Deployment',
    slogan: 'Ship it!',
    items: [
      {
        name: 'Alpine Linux',
        version: metaContent('version-alpine'),
        href: 'https://alpinelinux.org/',
        description:
          'Alpine Linux is an independent, non-commercial, general purpose Linux distribution designed for power users who appreciate security, simplicity and resource efficiency.',
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        description: 'Dockerized using an optimized base image.',
      },
      {
        name: 'Plausible',
        href: 'https://plausible.io/',
        description:
          'Plausible is lightweight and open source web analytics. No cookies and fully compliant with GDPR, CCPA and PECR.',
      },
    ],
  },
];
</script>

<template>
  <page-title>About</page-title>

  <p class="mt-6 max-w-4xl text-base lg:text-xl">
    Templatus is an opinionated template for web applications with
    <b>Ruby on Rails</b> and <b>Vue.js 3</b>
  </p>

  <div class="mt-20 space-y-24">
    <div v-for="group in features" :key="group.name">
      <div class="lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2
            class="text-base font-semibold uppercase tracking-wide text-rails-dark"
          >
            {{ group.slogan }}
          </h2>
          <p class="mt-2 text-3xl font-extrabold text-gray-900">
            {{ group.name }}
          </p>
        </div>
        <div class="mt-12 lg:col-span-2 lg:mt-0">
          <dl
            class="space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8"
          >
            <div
              v-for="feature in group.items"
              :key="feature.name"
              class="relative"
            >
              <dt>
                <CheckIcon
                  class="absolute h-6 w-6 text-vue"
                  aria-hidden="true"
                />
                <p
                  class="ml-9 flex items-center text-lg font-medium leading-6 text-rails-dark"
                >
                  <a
                    :href="feature.href"
                    class="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ feature.name }}
                  </a>

                  <span
                    v-if="feature.version"
                    class="ml-2 inline-flex items-center rounded-full bg-rose py-0.5 px-2.5 text-xs font-medium text-black"
                  >
                    {{ feature.version }}
                  </span>
                </p>
              </dt>
              <dd
                class="mt-2 ml-9 text-base text-gray-600"
                v-html="feature.description"
              ></dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
