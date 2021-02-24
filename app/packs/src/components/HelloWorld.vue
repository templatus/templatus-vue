<template>
  <p class="text-3xl text-center">
    Hello {{ name }}!
  </p>
</template>

<script>
export default {
  name: 'HelloWorld',

  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
