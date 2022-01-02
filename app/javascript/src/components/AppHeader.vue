<script setup lang="ts">
import { TabGroup, TabList, Tab } from '@headlessui/vue';

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
    class="flex justify-between items-end p-5 space-x-5 lg:flex-col lg:items-stretch lg:p-0 lg:space-y-36 lg:space-x-0"
  >
    <img
      src="/images/logo.svg"
      alt="Logo"
      class="p-3 w-20 h-20 bg-gradient-to-br from-slate-200 to-white rounded lg:w-56 lg:h-56"
      width="150"
      height="150"
    />

    <TabGroup>
      <TabList
        class="flex space-x-5 text-lg font-medium text-center uppercase lg:flex-col lg:space-y-5 lg:space-x-0"
        as="nav"
      >
        <Tab v-for="tab in tabs" :key="tab.name" as="template">
          <router-link
            :to="tab.href"
            :class="[
              tab.href == $route.path
                ? 'text-rails-dark bg-white lg:bg-rails-dark lg:text-white'
                : 'hover:bg-slate-300 hover:text-rails-dark bg-transparent text-white lg:text-rails-dark lg:bg-white',
              'px-2 py-1 rounded-md lg:shadow',
            ]"
          >
            {{ tab.name }}
          </router-link>
        </Tab>
      </TabList>
    </TabGroup>
  </header>
</template>
