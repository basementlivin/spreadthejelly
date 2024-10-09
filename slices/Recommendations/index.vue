<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { prismicImageSettings } from '@/utils/prismicImageSettings';
import Masonry from 'masonry-layout';
import { onMounted, ref } from 'vue';

defineProps(
  getSliceComponentProps<Content.RecommendationsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const masonryContainer = ref(null); // Ref for the container

onMounted(() => {
  if (masonryContainer.value) {
    new Masonry(masonryContainer.value, {
      itemSelector: '.rec',
      columnWidth: '.rec', // Can use a class for column sizing
      percentPosition: true, // Set to true if you're using percentages for column widths
      gutter: 30 // Adjust the space between items
    });
  }
});
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="recommendations wrapper wrapper--wide"
  >
    <div
      ref="masonryContainer"
      class="recommendations__inner"
    >
      <div
        v-for="(item, index) in slice.primary.recommendation"
        :key="index"
        class="rec"
      >
        <div class="rec__image">
          <PrismicImage
            v-if="item.image"
            :field="item.image"
            :alt="item.image.alt"
            :widths="prismicImageSettings.presets.default.widths"
            :imgix-params="prismicImageSettings.presets.default.imgixParams"
            loading="lazy"
          />
        </div>
        <div class="rec__content">
          <h3
            v-if="isFilled.keyText(item.title)"
            class="title"
          >
            {{ item.title }}
          </h3>
          <PrismicRichText
            v-if="isFilled.richText(item.copy)"
            :field="item.copy"
            class="copy" 
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_recommendations.scss';
</style>
