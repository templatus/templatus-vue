<template>
  <h1 class="mt-10 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
    About
  </h1>

  <div class="text-indigo-100 max-w-3xl">
    <p class="mt-6 text-xl">
      This is a template for using Ruby on Rails with Vue.js
    </p>

    <div class="mt-10 flex items-center space-x-5 sm:space-x-10">
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

    <h2 class="mt-10 mb-5 font-bold sm:text-3xl lg:text-3xl">
      Ingredients
    </h2>

    <ul class="list-disc list-inside text-xl leading-normal">
      <li>Ruby 3</li>
      <li>Ruby on Rails 6.1</li>
      <li>Webpacker 6 (for Webpack 5)</li>
      <li>Vue 3</li>
      <li>Vue Router</li>
      <li>TailwindCSS 2, HeadlessUI, HeroIcons</li>
      <li>GitHub Actions</li>
      <li>RSpec for Ruby testing</li>
      <li>Jest for JavaScript testing</li>
      <li>RuboCop</li>
      <li>Docker</li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
