<script setup lang="ts">
import { type Content } from '@prismicio/client';
import { isFilled } from '@prismicio/client';
import BumpMask from '@/assets/svg/mask--hero.svg';
import { prismicImageSettings } from '@/utils/prismicImageSettings';

defineProps(getSliceComponentProps<Content.HeroSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <section
    v-if="['default', 'vertical', 'straight'].includes(slice.variation)"
    :class="[
      'hero',
      'hero--' + slice.variation,
      'wrapper--fullscreen',
      slice.variation === 'straight' && slice.primary.text_color === 'White' ? 'text--white' : '',
      slice.variation === 'straight' && slice.primary.text_color === 'Black' ? 'text--black' : '',
    ]"
    data-scroll-section
  >
    <div class="hero__bg">
      <div class="image">
        <PrismicImage
          v-if="slice.primary.image"
          :field="slice.primary.image"
          :alt="slice.primary.image.alt ?? 'Image description not provided'"
          :widths="prismicImageSettings.presets.hero.widths"
          :imgix-params="prismicImageSettings.presets.hero.imgixParams"
        />
        <BumpMask
          v-if="slice.variation === 'default'"
          class="image--mask"
        />
      </div>
    </div>
    <div class="hero__content wrapper wrapper--wide">
      <div
        id="headline"
        class="headline"
      >
        <component
          :is="slice.primary.headline[0]?.headline_level"
          v-if="isFilled.keyText(slice.primary.headline[0]?.headline)"
          class="h1"
        >
          {{ slice.primary.headline[0]?.headline }}
        </component>
      </div>
      <div class="details">
        <span
          v-if="isFilled.keyText(slice.primary.subheadline)"
          id="subheadline"
          class="subheadline"
        >
          {{ slice.primary.subheadline }}
        </span>
        <PrismicLink
          v-if="isFilled.link(slice.primary.link[0]?.link_location) && isFilled.keyText(slice.primary.link[0]?.link_text)"
          :field="slice.primary.link[0].link_location"
          class="link"
          aria-labelledby="headline subheadline"
        >
          {{ slice.primary.link[0]?.link_text }} <span class="hidden">about {{ slice.primary.headline[0]?.headline }}</span>
        </PrismicLink>
      </div>
    </div>
  </section>

  <section
    v-else-if="slice.variation === 'super'"
    :class="['hero', 'hero--super', 'wrapper--fullscreen']"
    data-scroll-section
  >
    <div class="hero__bg">
      <div class="image">
        <PrismicImage
          v-if="slice.primary.image"
          :field="slice.primary.image"
          :alt="slice.primary.image.alt ?? 'Image description not provided'"
          :widths="prismicImageSettings.presets.hero.widths"
          :imgix-params="prismicImageSettings.presets.hero.imgixParams"
        />
        <BumpMask class="image--mask" />
      </div>
    </div>
    <div class="hero__content wrapper wrapper--wide">
      <div class="headline">
        <component
          :is="slice.primary.headline[0]?.headline_level"
          v-if="isFilled.keyText(slice.primary.headline[0]?.headline)"
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
          aria-label="Read the full article"
        >
          {{ slice.primary.link[0]?.link_text }}
        </PrismicLink>
      </div>
      <div class="copy">
        <PrismicRichText
          :field="slice.primary.copy"
          class="copy__inner"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_hero.scss';
</style>
