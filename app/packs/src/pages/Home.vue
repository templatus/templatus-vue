<template>
  <div class="flex justify-between flex-wrap">
    <div class="w-full md:w-1/2">
      <h1
        class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
      >
        Hello {{ name }}!
      </h1>

      <p class="mt-6 text-xl max-w-3xl">
        This is an opinionated template for a web application with
        <b>Ruby on Rails</b> and <b>Vue.js</b>
      </p>

      <git-version class="mt-5"></git-version>
    </div>

    <div
      class="
        flex flex-col
        w-full
        mt-5
        sm:w-56
        sm:mt-0
        lg:transform
        lg:-translate-y-80
      "
    >
      <div class="p-2 lg:p-5 text-center shadow bg-white rounded-t">
        <span class="text-5xl">{{
          receivedClicks.total.toLocaleString()
        }}</span>
        <br />
        <span class="uppercase">Clicks</span>
      </div>

      <button
        type="button"
        class="
          w-full
          px-4
          py-2
          border border-indigo-200
          text-sm
          font-medium
          rounded-b-md
          shadow
          text-indigo-700
          bg-indigo-100
          hover:bg-indigo-200
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        "
        @click="sendClick"
      >
        Click me!
      </button>

      <p class="mt-5 text-gray-600 text-sm">
        Tip: Open two browser windows in parallel and see what happens.
      </p>
    </div>
  </div>

  <div class="w-full">
    <h2 class="mt-10 text-xl font-medium">Latest clicks</h2>
    <ul class="text-sm">
      <li
        v-for="click in receivedClicks.items.slice(0, 5)"
        :key="click.id"
        class="mt-2 p-2 bg-indigo-100 rounded"
      >
        <p>
          <span class="px-1 bg-gray-900 text-indigo-100 rounded font-mono">
            {{ click.ip }}
          </span>

          <span class="ml-2 px-1 text-gray-900 font-medium">
            {{ new Date(Date.parse(click.created_at)).toUTCString() }}
          </span>
        </p>

        <p class="text-gray-900 font-extralight">
          {{ click.user_agent }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GitVersion from '@/components/GitVersion.vue';
import useClicks from '../use/clicks';

export default defineComponent({
  name: 'Home',

  components: {
    GitVersion,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  setup() {
    return useClicks();
  },
});
</script>
