<script setup="props" lang="ts">
import PageTitle from '@/components/PageTitle.vue';
import ClickList from '@/components/ClickList.vue';
import ClickButton from '@/components/ClickButton.vue';
import useClicks from '../use/clicks';

defineProps({
  name: {
    type: String,
    required: true,
  },
});

const { receivedClicks, sendClick } = useClicks();
</script>

<template>
  <div class="flex flex-wrap justify-between">
    <div class="w-full md:w-1/2">
      <page-title>Hello, {{ name }}!</page-title>

      <p class="mt-6 max-w-4xl text-base lg:text-xl">
        Templatus is an opinionated template for web applications with
        <b>Ruby on Rails</b> and <b>Vue.js 3</b>
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
        text-center text-red-800 text-xl
        font-medium
        tracking-wide
        uppercase
        sm:text-left
      "
    >
      Latest clicks
    </h2>

    <click-list :clicks="receivedClicks.items.slice(0, 5)"></click-list>
  </template>
</template>
