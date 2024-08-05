<script setup lang="ts">
defineProps({
  as: {
    type: [String, Object, Function],
    default: 'h1'
  },
  size: {
    type: String,
    default: 'lg'
  }
})
</script>

<template>
  <Component
    :is="as"
    class=""
  >
    <slot />
  </Component>
</template>

