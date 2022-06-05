<script setup lang="ts">
import { useClickStore } from '@/stores/click';
import LoadingAnimation from '@/components/LoadingAnimation.vue';

const store = useClickStore();

defineProps({
  enabled: {
    type: Boolean,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col">
    <div id="counter" class="text-center">
      <template v-if="enabled">
        <transition
          mode="out-in"
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="scale-0"
          enter-to-class="scale-100"
          leave-active-class="transition-transform duration-200 ease-in"
          leave-from-class="scale-100"
          leave-to-class="scale-0"
        >
          <div :key="count" class="text-5xl font-bold">
            {{ count.toLocaleString() }}
          </div>
        </transition>
        <div class="py-1 uppercase">Clicks</div>
      </template>
      <LoadingAnimation v-else class="h-20 w-full"></LoadingAnimation>
    </div>

    <button
      type="button"
      class="mt-3 w-full rounded bg-rose py-2 font-medium text-black transition hover:bg-rails-light hover:text-white active:outline-none active:ring-2 active:ring-rails-light active:ring-offset-1"
      @click="store.sendClick()"
    >
      Click me!
    </button>

    <p class="mt-3 hidden text-center text-xs text-gray-600 sm:block">
      Tip: Open two browser windows in parallel and see what happens.
    </p>
  </div>
</template>
