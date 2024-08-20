<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TextSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <section
    v-if="slice.variation === 'default'"
    class="copy wrapper wrapper--narrow"
    data-scroll-section
  >
    <PrismicRichText
      :field="slice.primary.copy"
      class="copy__inner"
    />
  </section>

  <section
    v-else-if="slice.variation === 'copyWithImage'"
    class="copy-with-image wrapper wrapper--wide"
    data-scroll-section
  >
    <figure class="image">
      <NuxtImg
        :src="slice.primary.image.url ?? ''"
        :alt="slice.primary.image.alt ?? ''"
      />
      <figcaption class="image__caption">
        {{ slice.primary.image_caption }}
      </figcaption>
    </figure>

    <div class="copy">
      <PrismicRichText
        :field="slice.primary.copy"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_copy.scss';
  @import '@/assets/scss/slices/_copy-with-image.scss';
</style>