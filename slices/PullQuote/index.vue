<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";

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
    v-if="isFilled.keyText(slice.primary.quote) && isFilled.keyText(slice.primary.article_title) && isFilled.link(slice.primary.article_link)"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="pull-quote wrapper wrapper--wide"
  >
    <div class="pull-quote__inner">
      <blockquote>
        <p class="quote">
          "{{ slice.primary.quote }}"
        </p>
        <cite class="citation">
          <span
            id="article-title"
            class="citation__article-title"
          >
            From {{ slice.primary.article_title }}
          </span>
          <PrismicLink
            :field="slice.primary.article_link"
            class="citation__article-link link"
            aria-labelledby="article-title"
          >
            read more <span class="hidden">about {{ slice.primary.article_title }}</span>
          </PrismicLink>
        </cite>
      </blockquote>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_pull-quote.scss';
</style>