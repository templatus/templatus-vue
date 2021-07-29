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
        <div class="max-w-5xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
          <div class="flex items-center space-x-5 sm:space-x-10">
            <img
              :src="require('images/rails.svg')"
              alt="Ruby on Rails"
              class="h-16 sm:h-24 bg-red-100 rounded p-3"
            />

            <div class="text-4xl sm:text-8xl text-red-100">&plus;</div>

            <img
              :src="require('images/vue.svg')"
              alt="Vue.js 3"
              class="h-16 sm:h-24 bg-red-100 rounded p-3"
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
        flex-grow
        bg-transparent
        relative
        w-full
        max-w-5xl
        mx-auto
        pt-10
        pb-24
        px-4
        sm:py-32 sm:px-6
        lg:px-8 lg:py-24
      "
    >
      <router-view />
    </main>

    <footer class="text-white bg-gray-700 fixed bottom-0 w-full py-2 text-sm">
      <div class="flex flex-wrap max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="w-full sm:w-1/4 text-center sm:text-left">
          <a
            class="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ledermann/templatus"
          >
            Source on GitHub
          </a>
        </div>

        <div class="w-full sm:w-1/4 text-center">
          <span
            v-if="!online"
            class="
              font-bold
              uppercase
              tracking-wide
              text-red-700
              bg-white
              px-1
              py-px
              rounded
            "
            >You are offline</span
          >
        </div>

        <div class="w-full sm:w-1/2 text-center sm:text-right">
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

<script lang="ts">
import { defineComponent } from 'vue';
import useOnlineOffline from './use/online-offline';
import GitVersion from '@/components/GitVersion.vue';
import { metaContent } from '@/utils/metaContent';
import { TabGroup, TabList, Tab } from '@headlessui/vue';

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

export default defineComponent({
  components: { GitVersion, TabGroup, TabList, Tab },

  setup() {
    return {
      online: useOnlineOffline().online,
      tabs,
      git,
    };
  },
});
</script>
