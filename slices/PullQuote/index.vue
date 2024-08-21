<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PullQuoteSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="pull-quote wrapper wrapper--wide"
  >
    <div class="pull-quote__inner">
      <blockquote>
        <p class="quote">"{{ slice.primary.quote }}"</p>
        <cite class="citation">
          <span class="citation__article-title">
            From {{ slice.primary.article_title }}
          </span>
          <PrismicLink
            :field="slice.primary.article_link"
            class="citation__article-link link"
          >
            read more
          </PrismicLink>
        </cite>
      </blockquote>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_pull-quote.scss';
</style>