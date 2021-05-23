<template>
  <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
    About
  </h1>

  <p class="mt-6 text-xl max-w-3xl">
    This is an opinionated template for using <b>Ruby on Rails</b> with
    <b>Vue.js</b>
  </p>

  <hr class="my-10 mx-20" />

  <div
    class="
      mt-10
      grid grid-cols-1
      text-xl
      space-y-8
      sm:grid-cols-4
      sm:space-y-0 sm:space-x-10
    "
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
        href: 'https://www.ruby-lang.org/',
      },
      {
        name: 'Ruby on Rails 6.1',
        href: 'https://rubyonrails.org/',
      },
      {
        name: 'ActionCable',
        href: 'https://guides.rubyonrails.org/action_cable_overview.html',
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
      },
    ],
  },
  {
    name: 'Frontend',
    items: [
      {
        name: 'Vue 3',
        href: 'https://v3.vuejs.org/',
      },
      {
        name: 'TailwindCSS 2',
        href: 'https://tailwindcss.com/',
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Vuex',
        href: 'https://vuex.vuejs.org/',
      },
      {
        name: 'HeadlessUI',
        href: 'https://headlessui.dev/',
      },
      {
        name: 'HeroIcons',
        href: 'https://heroicons.com/',
      },
      {
        name: 'Webpack 5',
        href: 'https://webpack.js.org/',
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
        name: 'RSpec',
        href: 'https://rspec.info/',
      },
      {
        name: 'RuboCop',
        href: 'https://rubocop.org/',
      },
      {
        name: 'Jest',
        href: 'https://jestjs.io/',
      },
      {
        name: 'ESLint',
        href: 'https://eslint.org/',
      },
    ],
  },

  {
    name: 'Deployment',
    items: [
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
