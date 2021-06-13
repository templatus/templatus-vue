<template>
  <page-title>About</page-title>

  <div class="mt-6 mb-20 text-xl max-w-4xl">
    <p>
      Templatus is an opinionated template for web applications with
      <b>Ruby on Rails</b> and <b>Vue.js</b>
    </p>

    <git-version
      v-if="git.commitTime && git.commitSha"
      class="mt-5"
      :commit-time="git.commitTime"
      :commit-sha="git.commitSha"
    ></git-version>
  </div>

  <div class="space-y-24">
    <div v-for="group in features" :key="group.name">
      <div class="lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2
            class="text-base font-semibold text-red-800 uppercase tracking-wide"
          >
            {{ group.slogan }}
          </h2>
          <p class="mt-2 text-3xl font-extrabold text-gray-900">
            {{ group.name }}
          </p>
          <p class="mt-4 text-lg text-gray-600">
            {{ group.description }}
          </p>
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2">
          <dl
            class="
              space-y-10
              sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10
              lg:gap-x-8
            "
          >
            <div
              v-for="feature in group.items"
              :key="feature.name"
              class="relative"
            >
              <dt>
                <CheckIcon
                  class="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p class="ml-9 text-lg leading-6 font-medium text-red-800">
                  <a
                    :href="feature.href"
                    class="hover:underline"
                    target="_blank"
                    rel="noopener"
                  >
                    {{ feature.name }}
                  </a>
                </p>
              </dt>
              <dd class="mt-2 ml-9 text-base text-gray-600">
                {{ feature.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { version, defineComponent } from 'vue';
import { CheckIcon } from '@heroicons/vue/outline';
import { metaContent } from '@/utils/metaContent';

import GitVersion from '@/components/GitVersion.vue';
import PageTitle from '@/components/PageTitle.vue';

const git: {
  commitSha?: string;
  commitTime?: string;
} = {
  commitSha: metaContent('git-commit-sha'),
  commitTime: metaContent('git-commit-time'),
};

const features: {
  name: string;
  slogan: string;
  description: string;
  items: { name: string; href: string; description: string }[];
}[] = [
  {
    name: 'The backend',
    slogan: 'Server side',
    description: 'Data access layer',
    items: [
      {
        name: `Ruby ${metaContent('version-ruby')}`,
        href: 'https://www.ruby-lang.org/',
        description:
          'A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.',
      },
      {
        name: `Ruby on Rails ${metaContent('version-rails')}`,
        href: 'https://rubyonrails.org/',
        description:
          'Rails is a web application development framework written in the Ruby programming language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started.',
      },
      {
        name: `PostgreSQL ${metaContent('version-postgres')}`,
        href: 'https://www.postgresql.org/',
        description:
          'PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
      },
      {
        name: `Redis ${metaContent('version-redis')}`,
        href: 'https://redis.io/',
        description:
          'Redis is an open source, in-memory data structure store, used as a database, cache, and message broker.',
      },
      {
        name: `Sidekiq ${metaContent('version-sidekiq')}`,
        href: 'https://sidekiq.org/',
        description: 'Simple, efficient background processing for Ruby',
      },
    ],
  },

  {
    name: 'The frontend',
    slogan: 'Client side',
    description: 'Presentation layer',
    items: [
      {
        name: `Vue ${version}`,
        href: 'https://v3.vuejs.org/',
        description:
          'Vue is a progressive framework for building user interfaces.',
      },
      {
        name: 'TailwindCSS 2',
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
        name: 'Vuex',
        href: 'https://vuex.vuejs.org/',
        description:
          'Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.',
      },
      {
        name: 'HeadlessUI',
        href: 'https://headlessui.dev/',
        description:
          'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.',
      },
      {
        name: 'HeroIcons',
        href: 'https://heroicons.com/',
        description:
          'Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.',
      },
      {
        name: `Webpacker ${metaContent('version-webpacker')}`,
        href: 'https://github.com/rails/webpacker',
        description:
          'Webpacker makes it easy to use the JavaScript pre-processor and bundler Webpack v5 to manage application-like JavaScript in Rails.',
      },
    ],
  },

  {
    name: 'Continuous integration',
    slogan: 'Quality insurance',
    description: 'All about testing and building',
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
    ],
  },

  {
    name: 'Deployment',
    slogan: 'Ship it!',
    description: 'Running in production',
    items: [
      {
        name: `Alpine Linux ${metaContent('version-alpine')}`,
        href: 'https://alpinelinux.org/',
        description:
          'Alpine Linux is an independent, non-commercial, general purpose Linux distribution designed for power users who appreciate security, simplicity and resource efficiency.',
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        description: 'Dockerized using an optimized base image.',
      },
    ],
  },
];

export default defineComponent({
  components: {
    GitVersion,
    CheckIcon,
    PageTitle,
  },

  props: {},

  setup() {
    return {
      features,
      git,
    };
  },
});
</script>
