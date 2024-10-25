<script setup lang="ts">
import { type Content } from "@prismicio/client";

const props = defineProps(
  getSliceComponentProps<Content.DividingLineSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const { slice } = props;

</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="dividing-line wrapper wrapper--fullscreen"
  >
    <div class="line" />
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_dividing-line.scss';
</style>