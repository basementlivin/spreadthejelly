<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { computed } from "vue";
import type { AskJellyArticleDocument } from '~/prismicio-types.d.ts';

const props = defineProps(
  getSliceComponentProps<Content.RelatedAnswersSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const prismic = usePrismic();

// Fetch the related ask_jelly_article documents with typed data
const relatedAnswersData = await prismic.client.getByType<AskJellyArticleDocument>('ask_jelly_article', {
  fetchLinks: [
    "ask_jelly_article.title",
    "ask_jelly_article.asked_by",
  ]
});

// Filter and map the related answers
const relatedAnswers = computed(() => {
  return props.slice.primary.answers
    .map(item => item.answer)
    .filter(answer => isFilled.contentRelationship(answer)) // Ensure only filled relationships are processed
    .map(answer => {
      const relatedDoc = relatedAnswersData.results.find(
        (doc) => doc.id === answer.id
      );
      return relatedDoc ? { ...answer, data: relatedDoc.data } : null;
    })
    .filter(answer => answer !== null);  // Filter out any null entries
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="related-answers wrapper wrapper--wide"
  >
    <span class="related-answers__headline">Related Answers</span>
    <div
      v-if="relatedAnswers"
      class="related-answers__inner"
    >
      <div
        v-for="(answer, index) in relatedAnswers"
        :key="index"
        class="answer"
      >
        <h3 class="title">
          {{ answer.data.title }}
        </h3>
        <p class="asked-by">
          From {{ answer.data.asked_by }}
        </p>
        <PrismicLink
          :field="answer"
          class="link"
          aria-label="Read the full article."
        >
          read more
        </PrismicLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import url('/assets/scss/slices/_related-answers.scss');
</style>
