<template>
  <div v-if="commitSHA && commitTime">
    Version
    <code>{{ commitSHA }}</code
    >, created
    <b><time ref="timeElement" :datetime="commitTime"></time></b>
  </div>
  <div v-else>Version unknown</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import { metaContent } from '@/utils/metaContent';
import * as timeago from 'timeago.js';

export default defineComponent({
  name: 'GitVersion',

  setup() {
    const timeElement = ref();

    onMounted(() => {
      if (timeElement.value) timeago.render(timeElement.value);
    });

    onBeforeUnmount(() => {
      timeago.cancel();
    });

    return {
      timeElement,
      commitSHA: metaContent('git-commit-sha'),
      commitTime: metaContent('git-commit-time'),
    };
  },
});
</script>
