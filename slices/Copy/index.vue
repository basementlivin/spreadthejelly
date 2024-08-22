<script setup lang="ts">
import { computed } from 'vue'
import { type Content } from '@prismicio/client'
import { isFilled } from '@prismicio/client'

const props = defineProps(getSliceComponentProps<Content.TextSlice>(
  ['slice', 'index', 'slices', 'context']
));

function isCopyWithPullQuote(slice: Content.TextSlice): slice is Content.TextSlice & { primary: { pull_quote_position: string } } {
  return slice.variation === 'copyWithPullQuote'
}

const pullQuoteClass = computed(() => {
  if (isCopyWithPullQuote(props.slice)) {
    const position = props.slice.primary.pull_quote_position
    return position === 'Quote Right' ? 'quote--right' : 'quote--left'
  }
  return ''
})
</script>

<template>
  <section
    v-if="slice.variation === 'default'"
    class="copy wrapper wrapper--narrow"
    data-scroll-section
  >
    <PrismicRichText
      v-if="isFilled.richText(slice.primary.copy)"
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
        loading="lazy"
        placeholder
      />
      <figcaption
        v-if="isFilled.keyText(slice.primary.image_caption)"
        class="image__caption"
      >
        {{ slice.primary.image_caption }}
      </figcaption>
    </figure>

    <div
      v-if="isFilled.richText(slice.primary.copy)"
      class="copy"
    >
      <PrismicRichText
        :field="slice.primary.copy"
      />
    </div>
  </section>

  <section
    v-else-if="slice.variation === 'copyWithPullQuote'"
    :class="['copy-with-pull-quote', pullQuoteClass, 'wrapper wrapper--wide']"
    data-scroll-section
  >
    <div
      v-if="isFilled.richText(slice.primary.copy)"
      class="copy"
    >
      <PrismicRichText
        :field="slice.primary.copy"
      />
    </div>

    <div class="pull-quote">
      <blockquote
        v-if="isFilled.keyText(slice.primary.pull_quote)"
        class="quote"
      >
        {{ slice.primary.pull_quote }}
      </blockquote>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_copy.scss';
  @import '@/assets/scss/slices/_copy-with-image.scss';
  @import '@/assets/scss/slices/_copy-with-pull-quote.scss';
</style>