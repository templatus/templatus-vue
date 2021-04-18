<template>
  <div class="bg-indigo-800 h-screen">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 ">
      <nav
        class="flex space-x-4 mb-5"
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
