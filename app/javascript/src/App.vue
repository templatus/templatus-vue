<script setup lang="ts">
import AppBackground from '@/components/AppBackground.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppFlash from '@/components/AppFlash.vue';
</script>

<template>
  <div
    class="from-rails-dark to-rails-light lg:bg-rose flex min-h-screen flex-col bg-linear-to-br lg:from-inherit lg:to-inherit"
  >
    <app-background />

    <app-header class="lg:fixed lg:top-10 lg:left-10" />

    <app-flash></app-flash>

    <main
      class="relative flex-1 bg-white px-4 py-5 shadow-md sm:px-6 lg:mt-10 lg:mr-16 lg:ml-96 lg:max-w-5xl lg:rounded-xl lg:px-8"
    >
      <router-view />
    </main>

    <app-footer
      class="relative mt-2 mb-6 lg:mr-16 lg:ml-96 lg:max-w-5xl lg:px-0"
    />
  </div>
</template>
