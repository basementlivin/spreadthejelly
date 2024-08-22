<script setup lang="ts">
import { computed } from "vue";
import { type Content } from "@prismicio/client";

const props = defineProps(
  getSliceComponentProps<Content.ImageSliderSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

// Loop over the images array, duplicating the
// slides until we have at least 10 images to display.
// This ensures that the Swiper loop functions correctly.
const slides = computed(() => {
  const images = props.slice.primary.images
  const minSlides = 10
  let duplicatedImages = [...images]

  if (images.length < minSlides) {
    while (duplicatedImages.length < minSlides) {
      duplicatedImages = [...duplicatedImages, ...images]
    }
  }

  return duplicatedImages
})
</script>

<template>
  <section
    v-if="props.slice.primary.images"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="image-slider wrapper wrapper--fullscreen"
    data-scroll-section
  >
    <Swiper
      :modules="[SwiperAutoplay, SwiperNavigation, SwiperA11y, SwiperKeyboard]"
      :grab-cursor="true"
      :space-between="0"
      :slides-per-view="2"
      :loop="true"
      :speed="680"
      :autoplay="{
        delay: 2850,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }"
      :navigation="{
        nextEl: '.swiper-button-next--custom',
        prevEl: '.swiper-button-prev--custom',
      }"
      :a11y="{
        enabled: true,
      }"
      :keyboard="{
        enabled: true,
      }"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="index"
      >
        <div class="image">
          <NuxtImg
            :src="slide.image.url ?? ''"
            :alt="slide.image.alt ?? ''"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-navigation">
      <div class="swiper-button-next--custom">
        +
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_image-slider.scss';
</style>