<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { partialWidthSizes } from '@/utils/imageSizes';

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
    v-show="isFilled.image(slice.primary.shape) && isFilled.richText(slice.primary.question) && isFilled.keyText(slice.primary.asked_by)"
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
          :key="slice.primary.shape.url"
          :src="slice.primary.shape.url ?? ''"
          :alt="slice.primary.shape.alt ?? 'Abstract, illustrative shape.'"
          :sizes="partialWidthSizes"
          preset="default"
          loading="lazy"
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