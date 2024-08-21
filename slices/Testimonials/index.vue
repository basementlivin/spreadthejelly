<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TestimonialsSlice>([
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
    class="testimonials wrapper wrapper--wide"
  >
    <div class="testimonials__inner">
      <div
        v-for="(testimonial, index) in slice.primary.testimonials"
        :key="index"
        class="testimonial"
      >
        <p class="quote">"{{ testimonial.testimonial }}"</p>
        <span class="credit">{{ testimonial.credit }}</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_testimonials.scss';
</style>