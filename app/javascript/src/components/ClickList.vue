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
    enter-active-class="transition duration-200 ease-in delay-200"
    enter-from-class="scale-0 bg-rose"
    enter-to-class="scale-100"
    leave-active-class="transition duration-200 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    move-class="duration-200 ease-in"
  >
    <li v-for="click in clicks" :key="click.id" class="py-5">
      <p>
        <span class="rounded bg-gray-900 py-1 px-2 font-mono text-rose">
          {{ click.ip }}
        </span>

        <span class="ml-2 px-1 font-medium text-gray-900">
          {{
            new Date(click.created_at).toLocaleString('en', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: false,
            })
          }}
        </span>
      </p>

      <code class="mt-4 block font-extralight text-gray-500">
        {{ click.user_agent }}
      </code>
    </li>
  </transition-group>
</template>
