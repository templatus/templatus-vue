<script setup lang="ts">
import { PropType } from 'vue';
import { Click } from '@/stores/click';

defineProps({
  clicks: {
    type: Array as PropType<Array<Click>>,
    required: true,
  },
});
</script>

<template>
  <transition-group
    tag="ul"
    class="text-sm md:text-base"
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 scale-y-50"
    enter-to-class="opacity-100 scale-y-100"
    leave-active-class="transition-all duration-500 ease-out"
    leave-from-class="opacity-100 scale-y-100 absolute"
    leave-to-class="opacity-0 scale-y-0 absolute"
    move-class="duration-500 ease-out"
  >
    <li v-for="click in clicks" :key="click.id" class="py-4">
      <p>
        <span class="rounded bg-gray-900 py-1 px-2 font-mono text-rose">
          {{ click.ip }}
        </span>

        <span class="ml-2 px-1 font-medium text-gray-900">
          {{ new Date(Date.parse(click.created_at)).toUTCString() }}
        </span>
      </p>

      <code class="mt-4 block font-extralight text-gray-500">
        {{ click.user_agent }}
      </code>
    </li>
  </transition-group>
</template>
