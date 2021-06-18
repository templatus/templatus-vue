<template>
  <div class="text-base">
    Version
    <code>{{ commitSha.substring(0, 7) }}</code
    >, created
    <b><time ref="timeElement" :datetime="commitTime"></time></b>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import * as timeago from 'timeago.js';

export default defineComponent({
  name: 'GitVersion',

  props: {
    commitSha: {
      type: String,
      required: true,
    },

    commitTime: {
      type: String,
      required: true,
    },
  },

  setup() {
    const timeElement = ref();

    onMounted(() => {
      timeago.render(timeElement.value);
    });

    onBeforeUnmount(() => {
      timeago.cancel();
    });

    return {
      timeElement,
    };
  },
});
</script>
