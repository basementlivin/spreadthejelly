<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TextSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <PrismicRichText
    :field="slice.primary.copy"
    class="copy wrapper wrapper--narrow"
  />
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_copy.scss';
</style>