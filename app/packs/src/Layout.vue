<template>
  <div class="bg-indigo-50 min-h-screen">
    <div class="bg-indigo-900">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-5 sm:space-x-10">
          <img
            :src="require('images/rails.svg')"
            alt="Ruby on Rails"
            class="h-16 sm:h-32 bg-indigo-100 rounded p-3"
          >

          <div class="text-4xl sm:text-8xl text-indigo-100">
            &plus;
          </div>

          <img
            :src="require('images/vue.svg')"
            alt="Vue.js 3"
            class="h-16 sm:h-32 bg-indigo-100 rounded p-3"
          >
        </div>

        <nav
          class="mt-10 flex space-x-4"
          aria-label="Tabs"
        >
          <router-link
            v-for="tab in tabs"
            :key="tab.name"
            :to="tab.href"
            :class="[tab.href == $route.path ?
                       'bg-indigo-300 text-indigo-900' :
                       'text-indigo-300 hover:text-indigo-100',
                     'px-3 py-1 font-medium text-lg rounded-md']"
            :aria-current="tab.current ? 'page' : undefined"
          >
            {{ tab.name }}
          </router-link>
        </nav>
      </div>
    </div>

    <div class="max-w-7xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
      <router-view />
    </div>
  </div>
</template>

<script>
import confetti from 'canvas-confetti'
import { onMounted } from 'vue'

const tabs = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
]

export default {
  setup() {
    onMounted(() => {
      var colors = ['#cc0000', '#42b883']

      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      })
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      })
    })

    return {
      tabs,
    }
  },
}
</script>
