<script setup lang="ts">
import { computed } from 'vue'
import { type Content } from '@prismicio/client'
import { isFilled } from '@prismicio/client'
import { partialWidthSizes } from '@/utils/imageSizes'

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
  >
    <PrismicRichText
      v-if="isFilled.richText(slice.primary.copy)"
      :field="slice.primary.copy"
      class="copy__inner"
    />
  </section>

  <section
    v-else-if="slice.variation === 'pullQuote'"
    class="article-pull-quote wrapper wrapper--page-width"
  >
    <div
      :class="[
        'illustration__left',
        isFilled.select(slice.primary.illustration_left) && slice.primary.illustration_left === 'Pink Flower' ? 'flower' : '',
        isFilled.select(slice.primary.illustration_left) && slice.primary.illustration_left === 'Green Puddle' ? 'puddle' : '',
        isFilled.select(slice.primary.illustration_left) && slice.primary.illustration_left === 'Blue Star' ? 'star--blue' : '',
        isFilled.select(slice.primary.illustration_left) && slice.primary.illustration_left === 'Yellow Star' ? 'star--yellow' : '',
        isFilled.select(slice.primary.illustration_left_position) && slice.primary.illustration_left_position === 'Top' ? 'top' : '',
        isFilled.select(slice.primary.illustration_left_position) && slice.primary.illustration_left_position === 'Middle' ? 'middle' : '',
        isFilled.select(slice.primary.illustration_left_position) && slice.primary.illustration_left_position === 'Bottom' ? 'bottom' : '',
      ]"
    />

    <blockquote
      v-if="isFilled.keyText(slice.primary.pull_quote)"
      class="quote"
    >
      "{{ slice.primary.pull_quote }}"
    </blockquote>

    <div
      :class="[
        'illustration__right',
        isFilled.select(slice.primary.illustration_right) && slice.primary.illustration_right === 'Pink Flower' ? 'flower' : '',
        isFilled.select(slice.primary.illustration_right) && slice.primary.illustration_right === 'Green Puddle' ? 'puddle' : '',
        isFilled.select(slice.primary.illustration_right) && slice.primary.illustration_right === 'Blue Star' ? 'star--blue' : '',
        isFilled.select(slice.primary.illustration_right) && slice.primary.illustration_right === 'Yellow Star' ? 'star--yellow' : '',
        isFilled.select(slice.primary.illustration_right_position) && slice.primary.illustration_right_position === 'Top' ? 'top' : '',
        isFilled.select(slice.primary.illustration_right_position) && slice.primary.illustration_right_position === 'Middle' ? 'middle' : '',
        isFilled.select(slice.primary.illustration_right_position) && slice.primary.illustration_right_position === 'Bottom' ? 'bottom' : '',
      ]"
    />
  </section>

  <section
    v-else-if="slice.variation === 'copyWithImage'"
    class="copy-with-image wrapper wrapper--wide"
  >
    <figure class="image">
      <NuxtImg
        :src="slice.primary.image.url ?? ''"
        :alt="slice.primary.image.alt ?? ''"
        :sizes="partialWidthSizes"
        :placeholder="[50, 25, 75, 5]"
        preset="default"
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
  @import '@/assets/scss/slices/_article-pull-quote.scss';
  @import '@/assets/scss/slices/_copy-with-image.scss';
  @import '@/assets/scss/slices/_copy-with-pull-quote.scss';
</style>