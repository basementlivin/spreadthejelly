<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.ImageSlice>([
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
    :class="[
      'image', 
      'image--' + slice.variation,
      'wrapper', 
      { 
        'wrapper--fullscreen': slice.variation === 'default',
        'wrapper--wide': slice.variation === 'twoColumn'
      }
    ]"
    data-scroll-section
  >
    <div
      v-if="slice.variation === 'default' && isFilled.image(slice.primary.image)"
      class="image__container full"
    >
      <NuxtImg
        :src="slice.primary.image.url ?? ''"
        :alt="slice.primary.image.alt ?? ''"
        sizes="xs:90vw sm:90vw md:90vw lg:90vw xl:90vw xxl:90vw"
        loading="lazy"
        placeholder
      />
      <svg
        v-if="slice.variation === 'default' && isFilled.image(slice.primary.image)"
        class="mask"
        viewBox="0 0 1543.25 38.41"
      >
        <path
          fill="currentColor"
          fill-opacity="1"
          d="M.12 38.28h1543l-.39-30.48s-508.61 54.48-743.61 11.48-799-.18-799-.18v19.18Z"
        />
      </svg>
    </div>
    <div
      v-if="slice.variation === 'twoColumn' && isFilled.image(slice.primary.image_left) && isFilled.image(slice.primary.image_right)"
      class="image__container columns"
    >
      <NuxtImg
        :src="slice.primary.image_left.url ?? ''"
        :alt="slice.primary.image_left.alt ?? ''"
        sizes="xs:90vw sm:90vw md:90vw lg:50vw xl:50vw xxl:50vw"
        loading="lazy"
        placeholder
      />
      <NuxtImg
        :src="slice.primary.image_right.url ?? ''"
        :alt="slice.primary.image_right.alt ?? ''"
        sizes="xs:90vw sm:90vw md:90vw lg:50vw xl:50vw xxl:50vw"
        loading="lazy"
        placeholder
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_image.scss';
</style>