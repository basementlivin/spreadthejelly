<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.ImageSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <Bounded
    as="section"
    class=""
    :class="{
      'pt-0 md:pt-0': index === 0
    }"
  >
    <div
      v-if="slice.primary.image.url"
      class=""
    >
      <NuxtImg :src="slice.primary.image.url" />
    </div>
  </Bounded>
</template>
