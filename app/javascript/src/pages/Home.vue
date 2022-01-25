<script setup="props" lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { useClickStore } from '@/stores/click';
import PageTitle from '@/components/PageTitle.vue';
import ClickList from '@/components/ClickList.vue';
import ClickButton from '@/components/ClickButton.vue';

defineProps({
  name: {
    type: String,
    required: true,
  },
});

const store = useClickStore();
onMounted(() => {
  store.getClicks();
  store.subscribe();
});

onBeforeUnmount(() => {
  store.unsubscribe();
});
</script>

<template>
  <div class="lg:mr-64">
    <page-title>Hello, {{ name }}!</page-title>

    <p class="mt-6 max-w-4xl text-base lg:text-xl">
      Templatus is an opinionated template for web applications with
      <b>Ruby on Rails</b> and <b>Vue.js 3</b>
    </p>
  </div>

  <click-button
    class="mt-5 w-full lg:absolute lg:-top-5 lg:-right-10 lg:mt-0 lg:w-56 lg:rounded lg:bg-gradient-to-br lg:from-slate-100 lg:to-white lg:p-3 lg:shadow"
    :count="store.total"
    :enabled="store.loaded"
  ></click-button>

  <template v-if="store.items.length">
    <h2
      class="mt-20 text-center text-xl font-medium uppercase tracking-wide text-rails-dark sm:text-left"
    >
      Latest clicks
    </h2>

    <click-list :clicks="store.items.slice(0, 5)"></click-list>
  </template>
</template>
