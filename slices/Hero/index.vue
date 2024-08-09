<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
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
          v-if="slice.primary.headline[0]?.headline_level && slice.primary.headline[0]?.headline"
          :data-slice-type="slice.slice_type"
          :data-slice-variation="slice.variation"
          class="h1"
        >
          {{ slice.primary.headline[0]?.headline }}
        </component>
      </div>
      <div class="details">
        <span class="subheadline">{{ slice.primary.subheadline }}</span>
        <PrismicLink
          v-if="slice.primary.link && slice.primary.link[0]?.link_location"
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