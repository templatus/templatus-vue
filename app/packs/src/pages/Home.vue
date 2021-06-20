<template>
  <div class="flex justify-between flex-wrap">
    <div class="w-full md:w-1/2">
      <page-title>Hello, {{ name }}!</page-title>

      <p class="mt-6 text-base lg:text-xl max-w-4xl">
        Templatus is an opinionated template for web applications with
        <b>Ruby on Rails</b> and <b>Vue.js</b>
      </p>
    </div>

    <click-button
      :count="receivedClicks.total"
      @click="sendClick()"
    ></click-button>
  </div>

  <template v-if="receivedClicks.items.length">
    <h2
      class="
        mt-8
        text-xl
        font-medium
        text-red-800 text-center
        sm:text-left
        uppercase
        tracking-wide
      "
    >
      Latest clicks
    </h2>

    <click-list :clicks="receivedClicks.items.slice(0, 5)"></click-list>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PageTitle from '@/components/PageTitle.vue';
import ClickList from '@/components/ClickList.vue';
import ClickButton from '@/components/ClickButton.vue';

import useClicks from '../use/clicks';

export default defineComponent({
  name: 'Home',

  components: {
    PageTitle,
    ClickList,
    ClickButton,
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
