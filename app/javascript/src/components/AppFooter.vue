<script setup lang="ts">
import GitVersion from '@/components/GitVersion.vue';
import { metaContent } from '@/utils/metaContent';
import useOnlineOffline from '@/use/online-offline';

const git: {
  commitVersion?: string;
  commitTime?: string;
} = {
  commitVersion: metaContent('git-commit-version'),
  commitTime: metaContent('git-commit-time'),
};

const { online } = useOnlineOffline();
</script>

<template>
  <footer
    class="flex flex-wrap items-end justify-between space-y-2 px-4 text-sm text-white sm:px-6 lg:px-0"
  >
    <div class="flex w-full items-end space-x-2 sm:w-auto">
      <a
        class="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/templatus/templatus-vue"
      >
        <svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor">
          <title>GitHub</title>
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
      </a>

      <git-version
        v-if="git.commitTime && git.commitVersion"
        :commit-time="git.commitTime"
        :commit-version="git.commitVersion"
      ></git-version>
    </div>

    <div class="w-full sm:w-auto">
      <span
        v-if="!online"
        class="rounded bg-white py-px px-1 font-bold uppercase tracking-wide text-red-700"
        >You are offline</span
      >
    </div>

    <div class="flex w-full items-end sm:w-auto">
      <a
        class="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        href="https://ledermann.dev"
      >
        <svg class="inline h-6 w-6" viewBox="0 0 276 276" fill="currentColor">
          <title>ledermann.dev</title>
          <path
            d="M0 137l138 138 138-138-84-82-84 82 31 30 53-52 25 22-79 77-78-77L166 29 138 1"
          />
        </svg>
        <span class="ml-1 font-mono">ledermann.dev</span>
      </a>
    </div>
  </footer>
</template>
