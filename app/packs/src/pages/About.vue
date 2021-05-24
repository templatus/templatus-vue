<template>
  <h1
    class="
      text-4xl
      font-extrabold
      tracking-tight
      sm:text-5xl
      lg:text-6xl
      text-red-800
    "
  >
    About
  </h1>

  <div class="mt-6 mb-20 text-xl max-w-3xl">
    <p>
      This is an opinionated template for web applications with
      <b>Ruby on Rails</b> and <b>Vue.js</b>
    </p>
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
          <p class="mt-4 text-lg text-gray-500">
            {{ group.description }}
          </p>
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2">
          <dl
            class="
              space-y-10
              sm:space-y-0
              sm:grid sm:grid-cols-2
              sm:gap-x-6 sm:gap-y-10
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
              <dd class="mt-2 ml-9 text-base text-gray-500">
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
import { defineComponent } from 'vue';
import { CheckIcon } from '@heroicons/vue/outline';

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
        name: 'Ruby 3',
        href: 'https://www.ruby-lang.org/',
        description:
          'A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.',
      },
      {
        name: 'Ruby on Rails 6.1',
        href: 'https://rubyonrails.org/',
        description:
          'Rails is a web application development framework written in the Ruby programming language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started.',
      },
      {
        name: 'ActionCable',
        href: 'https://guides.rubyonrails.org/action_cable_overview.html',
        description:
          "Action Cable seamlessly integrates WebSockets with the rest of your Rails application. It allows for real-time features to be written in Ruby in the same style and form as the rest of your Rails application, while still being performant and scalable. It's a full-stack offering that provides both a client-side JavaScript framework and a server-side Ruby framework.",
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        description:
          'PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
      },
      {
        name: 'Redis',
        href: 'https://redis.io/',
        description:
          'Redis is an open source, in-memory data structure store, used as a database, cache, and message broker.',
      },
    ],
  },

  {
    name: 'The frontend',
    slogan: 'Client side',
    description: 'Presentation layer',
    items: [
      {
        name: 'Vue 3',
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
        name: 'Webpacker',
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
        name: 'Docker',
        href: 'https://www.docker.com/',
        description: 'Dockerized using an optimized Alpine base image.',
      },
    ],
  },
];

export default defineComponent({
  components: {
    CheckIcon,
  },

  setup() {
    return {
      features,
    };
  },
});
</script>
