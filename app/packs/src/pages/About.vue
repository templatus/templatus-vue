<template>
  <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
    About
  </h1>

  <p class="mt-6 text-xl max-w-3xl">
    This is a template for using Ruby on Rails with Vue.js
  </p>

  <hr class="my-10 mx-20" />

  <div
    class="mt-10 grid grid-cols-1 sm:grid-cols-3 space-y-8 sm:space-y-0 text-xl sm:space-x-10"
  >
    <div v-for="ingredient in ingredients" :key="ingredient.name">
      <h2 class="font-bold">
        {{ ingredient.name }}
      </h2>

      <ul class="mt-3 leading-8">
        <li v-for="item in ingredient.items" :key="item.name">
          <a
            class="hover:underline"
            :href="item.href"
            target="_blank"
            rel="noopener"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const ingredients = [
  {
    name: 'Backend',
    items: [
      {
        name: 'Ruby 3',
        href:
          'https://www.ruby-lang.org/en/news/2021/04/05/ruby-3-0-1-released/',
      },
      {
        name: 'Ruby on Rails 6.1',
        href: 'https://github.com/rails/rails/releases/tag/v6.1.3.1',
      },
    ],
  },
  {
    name: 'Frontend',
    items: [
      {
        name: 'Webpacker 6 (for Webpack 5)',
        href: 'https://github.com/rails/webpacker',
      },
      {
        name: 'TypeScript',
        href: 'https://github.com/microsoft/TypeScript',
      },
      {
        name: 'Vue 3',
        href: 'https://github.com/vuejs/vue-next',
      },
      {
        name: 'Vuex (for State management)',
        href: 'https://github.com/vuejs/vuex',
      },
      {
        name: 'TailwindCSS 2',
        href: 'https://github.com/tailwindlabs/tailwindcss',
      },
      {
        name: 'HeadlessUI',
        href: 'https://github.com/tailwindlabs/headlessui',
      },
      {
        name: 'HeroIcons',
        href: 'https://github.com/tailwindlabs/heroicons',
      },
    ],
  },

  {
    name: 'Continuous integration',
    items: [
      {
        name: 'GitHub Actions',
        href: 'https://github.com/features/actions',
      },
      {
        name: 'RSpec (for Ruby testing)',
        href: 'https://github.com/rspec/rspec-rails',
      },
      {
        name: 'Jest (for JavaScript unit testing)',
        href: 'https://github.com/facebook/jest',
      },
      {
        name: 'RuboCop',
        href: 'https://github.com/rubocop/rubocop',
      },
      {
        name: 'ESLint',
        href: 'https://github.com/eslint/eslint',
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
      },
    ],
  },
];

export default defineComponent({
  setup() {
    return {
      ingredients,
    };
  },
});
</script>
