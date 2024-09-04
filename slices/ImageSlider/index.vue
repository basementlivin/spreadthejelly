<script setup lang="ts">
import { ref } from "vue";
import { type Content } from "@prismicio/client";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, A11y, Keyboard, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import { partialWidthSizes } from '@/utils/imageSizes';

const props = defineProps(
  getSliceComponentProps<Content.ImageSliderSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

// Loop over the images array, duplicating the slides if needed
const slides = computed(() => {
  const images = props.slice.primary.images;
  const minSlides = 10;
  let duplicatedImages = [...images];

  if (images.length < minSlides) {
    while (duplicatedImages.length < minSlides) {
      duplicatedImages = [...duplicatedImages, ...images];
    }
  }

  return duplicatedImages;
});

// Set up the thumbsSwiper instance with the correct type
const thumbsSwiper = ref<SwiperInstance | null>(null);
const setThumbsSwiper = (swiper: SwiperInstance) => {
  thumbsSwiper.value = swiper;
};

</script>

<template>
  <section
    v-if="props.slice.primary.images && slice.variation === 'default'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="image-slider wrapper wrapper--fullscreen"
    data-scroll-section
  >
    <Swiper
      :modules="[Autoplay, Navigation, A11y, Keyboard]"
      :grab-cursor="true"
      :space-between="0"
      :slides-per-view="1"
      :loop="true"
      :speed="680"
      :autoplay="{
        delay: 2850,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
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
            :sizes="partialWidthSizes"
            :placeholder="[50, 25, 75, 5]"
            preset="default"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-navigation">
      <div
        class="swiper-button-next--custom"
        aria-label="Next slide"
      >
        +
      </div>
    </div>
  </section>

  <section
    v-else-if="props.slice.primary.images && slice.variation === 'thumbsGallery'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="thumbs-slider wrapper--narrow"
    data-scroll-section
  >
    <Swiper
      :modules="[Thumbs, Navigation, A11y, Keyboard]"
      :thumbs="{
        swiper: thumbsSwiper,
      }"
      :space-between="0"
      :slides-per-view="1"
      :loop="true"
      :speed="680"
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
      class="thumbs-slider__main"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="index"
      >
        <div class="image">
          <NuxtImg
            :src="slide.image.url ?? ''"
            :alt="slide.image.alt ?? ''"
            :sizes="partialWidthSizes"
            :placeholder="[50, 25, 75, 5]"
            preset="default"
          />
        </div>
      </SwiperSlide>
      <div class="swiper-navigation">
        <div class="swiper-button-prev--custom">
          –
        </div>
        <div class="swiper-button-next--custom">
          +
        </div>
      </div>
    </Swiper>

    <Swiper
      :modules="[Thumbs, FreeMode]"
      watch-slides-progress
      :space-between="10"
      :slides-per-view="3"
      :grab-cursor="true"
      :free-mode="{
        enabled: true,
        minimumVelocity: 0.05,
      }"
      :loop="true"
      :breakpoints="{
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }"
      class="thumbs-slider__thumbs"
      @swiper="setThumbsSwiper"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="index"
      >
        <div class="thumb">
          <NuxtImg
            :src="slide.image.url ?? ''"
            :alt="slide.image.alt ?? ''"
            :sizes="partialWidthSizes"
            :placeholder="[50, 25, 75, 5]"
            preset="small"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_image-slider.scss';
</style>
