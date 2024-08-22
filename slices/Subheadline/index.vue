<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.SubheadlineSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    v-if="isFilled.keyText(slice.primary.subheadline)"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="subheadline wrapper"
    data-scroll-section
  >
    {{ slice.primary.subheadline }}
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_subheadlines.scss';
</style>