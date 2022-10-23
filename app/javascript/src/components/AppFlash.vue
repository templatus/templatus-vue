<script setup lang="ts">
import { useFlashStore } from '@/stores/flash';
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/vue/24/solid';

const store = useFlashStore();

function text() {
  if (store.alert) {
    return store.alert;
  } else if (store.notice) {
    return store.notice;
  } else {
    return null;
  }
}

function backgroundClass() {
  if (store.alert) {
    return 'bg-red-50 border-red-500';
  } else if (store.notice) {
    return 'bg-green-50 border-green-500';
  }
}

function textClass() {
  if (store.alert) {
    return 'text-red-800';
  } else if (store.notice) {
    return 'text-green-800';
  }
}

function icon() {
  if (store.alert) {
    return ExclamationCircleIcon;
  } else if (store.notice) {
    return CheckCircleIcon;
  }
}

function iconClass() {
  if (store.alert) {
    return 'text-red-400';
  } else if (store.notice) {
    return 'text-green-400';
  }
}
</script>

<template>
  <transition
    mode="out-in"
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-32"
    enter-to-class="translate-y-0"
    leave-active-class="transition duration-500 ease-in"
    leave-from-class="translate-y-0"
    leave-to-class="translate-y-32"
  >
    <div
      v-if="text()"
      id="flash"
      class="fixed inset-x-0 bottom-0 z-50 border-t-4 p-8"
      :class="backgroundClass()"
    >
      <div class="mx-auto flex items-center justify-center">
        <component
          :is="icon()"
          class="h-8 w-8"
          :class="iconClass()"
          aria-hidden="true"
        ></component>

        <p class="ml-2 text-base font-medium" :class="textClass()">
          {{ text() }}
        </p>
      </div>
    </div>
  </transition>
</template>
