<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TextSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <Bounded
    as="section"
    class=""
  >
    <PrismicRichText
      :field="slice.primary.text"
      :class="{
        '': slice.variation === 'twoColumns'
      }"
      wrapper="div"
    />
  </Bounded>
</template>
