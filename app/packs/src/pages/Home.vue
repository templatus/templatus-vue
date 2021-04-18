<template>
  <h1 class="mt-10 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
    Hello {{ name }}!
  </h1>
  <p class="mt-6 text-xl text-indigo-100 max-w-3xl">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa eos harum pariatur asperiores accusantium qui facere eligendi aspernatur! Ea nobis quo quisquam facere. At, itaque. Repellendus eius ut neque?
  </p>

  <div class="mt-10">
    <custom-button
      class="tabular-nums"
      @click="$store.commit('increment')"
    >
      Clicks: {{ $store.state.count }}
    </custom-button>

    <custom-dropdown
      class="ml-5"
      :items="dropdownItems"
      name="This is a Dropdown"
    />
  </div>
</template>

<script>
import CustomDropdown from '@/components/CustomDropdown.vue'
import CustomButton from '@/components/CustomButton.vue'

const dropdownItems = [
  { name: 'My Account', href: '#my-account' },
  { name: 'Company', href: '#company' },
  { name: 'Team Members', href: '#team' },
  { name: 'Billing', href: '#billing' },
]

export default {
  name: 'Home',

  components: {
    CustomButton,
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
