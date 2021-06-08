<template>
  <page-title>Page not found</page-title>

  <div class="mt-6 mb-20 text-xl max-w-3xl">
    <p>Something has gone wrong...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageTitle from '@/components/PageTitle.vue';

export default defineComponent({
  components: {
    PageTitle,
  },

  props: {},
});
</script>
