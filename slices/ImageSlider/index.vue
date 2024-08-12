<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImageSliderSlice>([
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
    class="image-slider wrapper wrapper--fullscreen"
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
        v-for="(slide, index) in slice.primary.images"
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