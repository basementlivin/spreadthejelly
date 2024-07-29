<script setup lang="ts">
import { type Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.NewsletterSignupSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <Bounded
    as="section"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    :class="['newsletter-signup', 'bg--' + slice.primary.background_color?.toLowerCase().replace(' ', '-')]"
  >
    <div class="newsletter-signup__inner">
      <PrismicRichText :field="slice.primary.headline" />
      <PrismicRichText :field="slice.primary.copy" />
    </div>
  </Bounded>
</template>

<style lang="scss">
@import '/assets/styles/slices/newsletter-signup.scss';
</style>