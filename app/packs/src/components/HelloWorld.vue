<template>
  <div class="h-screen bg-indigo-800">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Hello {{ name }}!
      </h1>
      <p class="mt-6 text-xl text-indigo-100 max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa eos harum pariatur asperiores accusantium qui facere eligendi aspernatur! Ea nobis quo quisquam facere. At, itaque. Repellendus eius ut neque?
      </p>

      <custom-dropdown
        class="mt-10"
        :items="dropdownItems"
        name="This is a Dropdown"
      />
    </div>
  </div>
</template>

<script>
import CustomDropdown from './CustomDropdown.vue'

const dropdownItems = [
  { name: 'My Account', href: '#my-account' },
  { name: 'Company', href: '#company' },
  { name: 'Team Members', href: '#team' },
  { name: 'Billing', href: '#billing' },
]

export default {
  name: 'HelloWorld',

  components: {
    CustomDropdown,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  setup() {
    return {
      dropdownItems,
    }
  },
}
</script>
