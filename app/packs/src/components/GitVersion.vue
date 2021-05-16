<template>
  <div v-if="commitSHA && commitTime">
    Version
    <code>{{ commitSHA }}</code
    >, last commit
    <b><time ref="timeElement" :datetime="commitTime"></time></b>
  </div>
  <div v-else>Version unknown</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import * as timeago from 'timeago.js';

const metaContent = (name: string) => {
  return document
    .querySelector(`meta[name='${name}']`)
    ?.getAttribute('content');
};

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
