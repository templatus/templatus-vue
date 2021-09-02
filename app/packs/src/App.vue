<script setup lang="ts">
import { TabGroup, TabList, Tab } from '@headlessui/vue';
import GitVersion from '@/components/GitVersion.vue';
import { metaContent } from '@/utils/metaContent';
import useOnlineOffline from './use/online-offline';

const git: {
  commitSha?: string;
  commitTime?: string;
} = {
  commitSha: metaContent('git-commit-sha'),
  commitTime: metaContent('git-commit-time'),
};

const tabs: {
  name: string;
  href: string;
}[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
];

const { online } = useOnlineOffline();
</script>

<template>
  <div class="flex flex-col min-h-screen bg-red-50">
    <header>
      <svg
        class="
          absolute
          inset-0
          hidden
          w-full
          h-96
          drop-shadow-xl
          filter
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

      <div class="relative bg-red-800 sm:bg-transparent">
        <div class="mx-auto px-4 py-8 max-w-5xl sm:px-6 sm:py-10 lg:px-8">
          <div class="flex items-center space-x-5 sm:space-x-10">
            <img
              :src="require('images/rails.svg')"
              alt="Ruby on Rails"
              class="p-3 h-16 bg-red-100 rounded sm:h-24"
            />

            <div class="text-red-100 text-4xl sm:text-8xl">&plus;</div>

            <img
              :src="require('images/vue.svg')"
              alt="Vue.js 3"
              class="p-3 h-16 bg-red-100 rounded sm:h-24"
            />
          </div>

          <TabGroup class="mt-10">
            <TabList class="flex space-x-4" as="nav">
              <Tab v-for="tab in tabs" :key="tab.name" as="template">
                <router-link
                  :to="tab.href"
                  :class="[
                    tab.href == $route.path
                      ? 'bg-red-200 border border-red-200  text-red-900'
                      : 'bg-red-800 border border-red-200  text-red-200 hover:bg-red-300 hover:text-red-800',
                    'px-4 py-1 font-medium text-lg rounded-md',
                  ]"
                >
                  {{ tab.name }}
                </router-link>
              </Tab>
            </TabList>
          </TabGroup>
        </div>
      </div>
    </header>

    <main
      class="
        relative
        flex-grow
        mx-auto
        pb-24
        pt-10
        px-4
        w-full
        max-w-5xl
        bg-transparent
        sm:px-6 sm:py-32
        lg:px-8 lg:py-24
      "
    >
      <router-view />
    </main>

    <footer class="fixed bottom-0 py-2 w-full text-white text-sm bg-gray-700">
      <div class="flex flex-wrap mx-auto px-4 max-w-5xl sm:px-6 lg:px-8">
        <div class="w-full text-center sm:w-1/4 sm:text-left">
          <a
            class="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ledermann/templatus"
          >
            Source on GitHub
          </a>
        </div>

        <div class="w-full text-center sm:w-1/4">
          <span
            v-if="!online"
            class="
              px-1
              py-px
              text-red-700
              font-bold
              tracking-wide
              bg-white
              rounded
              uppercase
            "
            >You are offline</span
          >
        </div>

        <div class="w-full text-center sm:w-1/2 sm:text-right">
          <git-version
            v-if="git.commitTime && git.commitSha"
            :commit-time="git.commitTime"
            :commit-sha="git.commitSha"
          ></git-version>
        </div>
      </div>
    </footer>
  </div>
</template>
