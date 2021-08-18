<script setup lang="ts">
import { PropType } from 'vue';
import { Click } from '../use/clicks';

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
    class="relative"
    enter-active-class="transform transition-all duration-500 ease-out"
    enter-from-class="opacity-0 scale-y-50"
    enter-to-class="opacity-100 scale-y-100"
    leave-active-class="transform transition-all duration-500 ease-out"
    leave-from-class="opacity-100 scale-y-100 absolute"
    leave-to-class="opacity-0 scale-y-0 absolute"
    move-class="duration-500 ease-out"
  >
    <li
      v-for="click in clicks"
      :key="click.id"
      class="mt-2 p-2 bg-red-100 rounded"
    >
      <p>
        <span class="px-1 bg-gray-900 text-red-100 rounded font-mono">
          {{ click.ip }}
        </span>

        <span class="ml-2 px-1 text-gray-900 font-medium text-sm sm:text-base">
          {{ new Date(Date.parse(click.created_at)).toUTCString() }}
        </span>
      </p>

      <p class="text-gray-900 font-extralight">
        {{ click.user_agent }}
      </p>
    </li>
  </transition-group>
</template>
