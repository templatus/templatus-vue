<template>
  <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
    Hello {{ name }}!
  </h1>
  <p class="mt-6 text-xl max-w-3xl">
    This is an opinionated template for using <b>Ruby on Rails</b> with
    <b>Vue.js</b>
  </p>

  <div class="mt-10">
    <custom-button class="tabular-nums" @click="$store.commit('increment')">
      Clicks: {{ $store.state.count }}
    </custom-button>

    <custom-dropdown
      class="ml-5"
      :items="dropdownItems"
      name="This is a Dropdown"
    />
  </div>

  <git-version class="mt-10"></git-version>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GitVersion from '@/components/GitVersion.vue';

import CustomDropdown, {
  DropdownItemType,
} from '@/components/CustomDropdown.vue';
import CustomButton from '@/components/CustomButton.vue';

const dropdownItems: DropdownItemType[] = [
  { name: 'My Account', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Team Members', href: '#' },
  { name: 'Billing', href: '#' },
];

export default defineComponent({
  name: 'Home',

  components: {
    CustomButton,
    CustomDropdown,
    GitVersion,
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
    };
  },
});
</script>
