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
    class=""
  >
    <PrismicLink
      :field="slice.primary.cta_link"
      class=""
    >
      <PrismicRichText
        :field="slice.primary.cta_text"
        class=""
      />
    </PrismicLink>
  </section>
</template>
