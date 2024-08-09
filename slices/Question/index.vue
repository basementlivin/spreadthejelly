<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.QuestionSlice>([
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
    class="question wrapper wrapper--wide"
  >
    <div
      class="question__inner"
    >
      <div class="image">
        <NuxtImg
          :src="slice.primary.shape.url ?? ''"
          :alt="slice.primary.shape.alt ?? ''"
        />
      </div>
      <div class="content">
        <PrismicRichText
          :field="slice.primary.question"
          class="content__question"
        />
        <span class="content__asker">
          {{ slice.primary.asked_by }}
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_question.scss';
</style>