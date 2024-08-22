<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.HeroSlice>([
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
    :class="['hero', 'hero--' + slice.variation, 'wrapper--fullscreen']"
    data-scroll-section
  >
    <div class="hero__bg">
      <div class="image">
        <NuxtImg
          :src="slice.primary.image.url ?? ''"
          :alt="slice.primary.image.alt ?? ''"
        />
        <svg
          v-if="slice.variation === 'default' || slice.variation === 'super'"
          class="image--mask"
          viewBox="0 0 1543.25 38.41"
        >
          <path
            fill="currentColor"
            fill-opacity="1"
            d="M.12 38.28h1543l-.39-30.48s-508.61 54.48-743.61 11.48-799-.18-799-.18v19.18Z"
          />
        </svg>
      </div>
    </div>
    <div class="hero__content wrapper wrapper--wide">
      <div class="headline">
        <component
          :is="slice.primary.headline[0]?.headline_level"
          v-if="isFilled.keyText(slice.primary.headline[0]?.headline)"
          :data-slice-type="slice.slice_type"
          :data-slice-variation="slice.variation"
          class="h1"
        >
          {{ slice.primary.headline[0]?.headline }}
        </component>
      </div>
      <div class="details">
        <span
          v-if="isFilled.keyText(slice.primary.subheadline)"
          class="subheadline"
        >
          {{ slice.primary.subheadline }}
        </span>
        <PrismicLink
          v-if="isFilled.link(slice.primary.link[0]?.link_location) && isFilled.keyText(slice.primary.link[0]?.link_text)"
          :field="slice.primary.link[0].link_location"
          class="link"
        >
          {{ slice.primary.link[0]?.link_text }}
        </PrismicLink>
      </div>
      <div
        v-if="slice.variation === 'super'"
        class="copy"
      >
        <PrismicRichText
          :field="slice.variation === 'super' ? slice.primary.copy : undefined"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_hero.scss';
</style>