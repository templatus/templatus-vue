<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as timeago from 'timeago.js';

defineProps({
  commitSha: {
    type: String,
    required: true,
  },

  commitTime: {
    type: String,
    required: true,
  },
});

const timeElement = ref();

onMounted(() => {
  timeago.render(timeElement.value);
});

onBeforeUnmount(() => {
  timeago.cancel();
});
</script>

<template>
  <div>
    Version
    <code>{{ commitSha.substring(0, 7) }}</code
    >, created
    <b><time ref="timeElement" :datetime="commitTime"></time></b>
  </div>
</template>
