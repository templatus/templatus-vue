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

<template>
  <div
    class="
      flex flex-col
      mt-5
      w-full
      sm:mt-0 sm:w-56
      lg:transform lg:-translate-y-72
    "
  >
    <div class="p-2 text-center bg-white rounded-t shadow lg:p-5">
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
        <div class="py-1 uppercase">Clicks</div>
      </template>
      <Spinner v-else class="w-full h-20"></Spinner>
    </div>

    <button
      type="button"
      class="
        px-4
        py-2
        w-full
        text-red-700 text-sm
        font-medium
        bg-red-100
        hover:bg-red-200
        border border-red-200
        rounded-b-md
        focus:outline-none
        shadow
        focus:ring-2 focus:ring-red-500 focus:ring-offset-2
      "
      @click="$emit('click')"
    >
      Click me!
    </button>

    <p class="hidden mt-5 text-gray-600 text-sm sm:block">
      Tip: Open two browser windows in parallel and see what happens.
    </p>
  </div>
</template>
