<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";

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
    v-if="slice.primary.testimonials.length > 0"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="testimonials wrapper wrapper--fullscreen"
  >
    <span
      v-if="isFilled.keyText(slice.primary.headline)"
      class="testimonials__headline"
    >
      {{ slice.primary.headline }}
    </span>
    <div class="testimonials__inner wrapper wrapper--wide">
      <div
        v-for="(testimonial, index) in slice.primary.testimonials"
        :key="index"
        class="testimonial"
      >
        <p
          v-if="isFilled.keyText(testimonial.testimonial)"
          class="quote"
        >
          "{{ testimonial.testimonial }}"
        </p>
        <span
          v-if="isFilled.keyText(testimonial.credit)"
          class="credit"
        >
          {{ testimonial.credit }}
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_testimonials.scss';
</style>