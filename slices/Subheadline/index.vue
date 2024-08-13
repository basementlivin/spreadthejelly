<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
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
  <span
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="subheadline wrapper"
    data-scroll-section
  >
    {{ slice.primary.subheadline }}
  </span>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_subheadlines.scss';
</style>