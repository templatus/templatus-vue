<template>
  <div class="bg-red-50 min-h-screen flex flex-col">
    <header>
      <svg
        class="
          absolute
          inset-0
          w-full
          h-96
          filter
          drop-shadow-xl
          hidden
          sm:block
        "
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon
          fill="currentColor"
          class="text-red-800"
          points="0,0 0,100 100,0"
        />
      </svg>

      <div class="bg-red-800 sm:bg-transparent relative">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
          <div class="flex items-center space-x-5 sm:space-x-10">
            <img
              :src="require('images/rails.svg')"
              alt="Ruby on Rails"
              class="h-16 sm:h-32 bg-red-100 rounded p-3"
            />

            <div class="text-4xl sm:text-8xl text-red-100">&plus;</div>

            <img
              :src="require('images/vue.svg')"
              alt="Vue.js 3"
              class="h-16 sm:h-32 bg-red-100 rounded p-3"
            />
          </div>

          <nav class="mt-10 flex space-x-4" aria-label="Tabs">
            <router-link
              v-for="tab in tabs"
              :key="tab.name"
              :to="tab.href"
              :class="[
                tab.href == $route.path
                  ? 'bg-red-200 border border-red-200  text-red-900'
                  : 'bg-red-800 border border-red-200  text-red-200 hover:bg-red-300 hover:text-red-800',
                'px-3 py-1 font-medium text-lg rounded-md',
              ]"
              :aria-current="tab.href == $route.path ? 'page' : undefined"
            >
              {{ tab.name }}
            </router-link>
          </nav>
        </div>
      </div>
    </header>

    <main
      class="
        flex-grow
        bg-transparent
        relative
        w-full
        max-w-5xl
        mx-auto
        pt-10
        pb-20
        px-4
        sm:py-32
        sm:px-6
        lg:py-24
      "
    >
      <router-view />
    </main>

    <footer v-if="!online" class="text-white text-center fixed bottom-0 w-full">
      <p class="bg-red-700 pt-2 pb-4 font-bold uppercase tracking-wide">
        You are offline
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useOnlineOffline from './use/online-offline';

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
      online: useOnlineOffline().online,
      tabs,
    };
  },
});
</script>
