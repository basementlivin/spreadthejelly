<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { prismicImageSettings } from '@/utils/prismicImageSettings';

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
    v-show="isFilled.image(slice.primary.shape) && isFilled.keyText(slice.primary.question) && isFilled.keyText(slice.primary.asked_by)"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="question wrapper wrapper--page-width"
  >
    <div
      :class="{
        'question__inner': true,
        'image--left': slice.primary.layout === 'Image Left',
        'image--right': slice.primary.layout === 'Image Right',
      }"
    >
      <div class="image">
        <PrismicImage
          v-if="slice.primary.shape"
          :field="slice.primary.shape"
          :alt="slice.primary.shape.alt || null"
          :widths="prismicImageSettings.presets.default.widths"
          :imgix-params="prismicImageSettings.presets.default.imgixParams"
          loading="lazy"
        />
      </div>
      <div class="content">
        <h1 class="content__question h2">
          {{ slice.primary.question }}
        </h1>
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