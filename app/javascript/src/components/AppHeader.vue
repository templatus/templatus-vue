<script setup lang="ts">
import { assetUrl } from '@/utils/metaContent';
import logoPath from '/images/logo.svg';

const tabs: {
  name: string;
  href: string;
}[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];
</script>

<template>
  <header
    class="flex items-end justify-between space-x-5 p-5 lg:flex-col lg:items-stretch lg:space-y-36 lg:space-x-0 lg:p-0"
  >
    <img
      :src="assetUrl(logoPath)"
      alt="Logo"
      class="size-20 rounded-sm bg-linear-to-br from-slate-200 to-white p-3 lg:size-56"
      width="150"
      height="150"
    />

    <nav
      class="flex space-x-5 text-center text-lg font-medium uppercase lg:flex-col lg:space-y-5 lg:space-x-0"
    >
      <router-link
        v-for="tab in tabs"
        :key="tab.name"
        :to="tab.href"
        :class="[
          tab.href == $route.path
            ? 'text-rails-dark lg:bg-rails-dark bg-white lg:text-white'
            : 'lg:text-rails-dark bg-transparent text-white hover:scale-105 lg:bg-white',
          'rounded-md px-2 py-1 transition lg:shadow-sm',
        ]"
      >
        {{ tab.name }}
      </router-link>
    </nav>
  </header>
</template>
