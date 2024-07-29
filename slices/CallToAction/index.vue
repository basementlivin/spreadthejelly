<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CallToActionSlice>([
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
    class="bg-LED border-t-void border-b-void border-t-2 border-b-2 text-2xl py-8"
  >
    <PrismicLink
      :field="slice.primary.cta_link"
      class="width-full height-full flex items-center justify-center"
    >
      <PrismicRichText
        :field="slice.primary.cta_text"
        class="sans uppercase"
      />
    </PrismicLink>
  </section>
</template>
