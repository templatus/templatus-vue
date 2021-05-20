<template>
  <div class="bg-indigo-50 min-h-screen">
    <svg
      class="absolute inset-0 w-full h-96 filter drop-shadow-xl hidden sm:block"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <polygon
        fill="currentColor"
        class="text-indigo-800"
        points="0,0 0,100 100,0"
      />
    </svg>

    <div class="bg-indigo-800 sm:bg-transparent relative">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-5 sm:space-x-10">
          <img
            :src="require('images/rails.svg')"
            alt="Ruby on Rails"
            class="h-16 sm:h-32 bg-indigo-100 rounded p-3"
          />

          <div class="text-4xl sm:text-8xl text-indigo-100">&plus;</div>

          <img
            :src="require('images/vue.svg')"
            alt="Vue.js 3"
            class="h-16 sm:h-32 bg-indigo-100 rounded p-3"
          />
        </div>

        <nav class="mt-10 flex space-x-4" aria-label="Tabs">
          <router-link
            v-for="tab in tabs"
            :key="tab.name"
            :to="tab.href"
            :class="[
              tab.href == $route.path
                ? 'bg-indigo-200 border border-indigo-200  text-indigo-900'
                : 'bg-indigo-800 border border-indigo-200  text-indigo-200 hover:bg-indigo-300 hover:text-indigo-800',
              'px-3 py-1 font-medium text-lg rounded-md',
            ]"
            :aria-current="tab.href == $route.path ? 'page' : undefined"
          >
            {{ tab.name }}
          </router-link>
        </nav>
      </div>
    </div>

    <div
      class="
        bg-transparent
        relative
        max-w-7xl
        mx-auto
        py-10
        px-4
        sm:py-32
        sm:px-6
        lg:px-8
        lg:py-24
      "
    >
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const tabs: {
  name: string;
  href: string;
}[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

export default defineComponent({
  setup() {
    return {
      tabs,
    };
  },
});
</script>
