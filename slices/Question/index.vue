<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";

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
    v-if="isFilled.image(slice.primary.shape) && isFilled.richText(slice.primary.question) && isFilled.keyText(slice.primary.asked_by)"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="question wrapper wrapper--wide"
    data-scroll-section
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
          from {{ slice.primary.asked_by }}
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_question.scss';
</style>