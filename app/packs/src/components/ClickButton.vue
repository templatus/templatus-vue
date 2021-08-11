<template>
  <div
    class="
      flex flex-col
      w-full
      mt-5
      sm:w-56 sm:mt-0
      lg:transform lg:-translate-y-72
    "
  >
    <div class="p-2 lg:p-5 text-center shadow bg-white rounded-t">
      <template v-if="count >= 0">
        <transition
          mode="out-in"
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="scale-0 transform"
          enter-to-class="scale-100 transform"
          leave-active-class="transition-transform duration-200 ease-in"
          leave-from-class="scale-100 transform"
          leave-to-class="scale-0 transform"
        >
          <div :key="count" class="text-5xl">
            {{ count.toLocaleString() }}
          </div>
        </transition>
        <div class="uppercase py-1">Clicks</div>
      </template>
      <Spinner v-else class="h-20 w-full"></Spinner>
    </div>

    <button
      type="button"
      class="
        w-full
        px-4
        py-2
        border border-red-200
        text-sm
        font-medium
        rounded-b-md
        shadow
        text-red-700
        bg-red-100
        hover:bg-red-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
      "
      @click="$emit('click')"
    >
      Click me!
    </button>

    <p class="mt-5 text-gray-600 text-sm hidden sm:block">
      Tip: Open two browser windows in parallel and see what happens.
    </p>
  </div>
</template>

<script setup lang="ts">
import Spinner from '@/components/Spinner.vue';

defineProps({
  count: {
    type: Number,
    required: true,
  },
});

defineEmits(['click']);
</script>
