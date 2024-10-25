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
  <!-- Hero with PrismicLink -->
  <PrismicLink
    v-if="isFilled.link(slice.primary.link)"
    :field="slice.primary.link"
    :aria-labelledby="'headline' + (isFilled.keyText(slice.primary.subheadline) ? ' subheadline' : '')"
    class="hero--linked"
  >
    <section
      v-if="['default', 'vertical', 'straight'].includes(slice.variation)"
      :class="[
        'hero',
        'hero--' + slice.variation,
        'wrapper--fullscreen',
        slice.variation === 'straight' && slice.primary.text_color === 'White' ? 'text--white' : '',
        slice.variation === 'straight' && slice.primary.text_color === 'Black' ? 'text--black' : '',
      ]"
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
          <span
            v-if="isFilled.keyText(slice.primary.cta)"
            class="cta"
          >
            {{ slice.primary.cta }}
          </span>
        </div>
      </div>
    </section>

    <!-- Super Variation with PrismicLink -->
    <section
      v-else-if="slice.variation === 'super'"
      :class="['hero', 'hero--super', 'wrapper--fullscreen']"
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
          <span
            v-if="isFilled.keyText(slice.primary.cta)"
            class="cta"
          >
            {{ slice.primary.cta }}
          </span>
        </div>
        <div class="copy">
          <PrismicRichText
            :field="slice.primary.copy"
            class="copy__inner"
          />
        </div>
      </div>
    </section>
  </PrismicLink>

  <!-- Hero without PrismicLink -->
  <section
    v-if="!isFilled.link(slice.primary.link) && ['default', 'vertical', 'straight'].includes(slice.variation)"
    :class="[
      'hero',
      'hero--' + slice.variation,
      'wrapper--fullscreen',
      slice.variation === 'straight' && slice.primary.text_color === 'White' ? 'text--white' : '',
      slice.variation === 'straight' && slice.primary.text_color === 'Black' ? 'text--black' : '',
    ]"
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
        <span
          v-if="isFilled.keyText(slice.primary.cta)"
          class="cta"
        >
          {{ slice.primary.cta }}
        </span>
      </div>
    </div>
  </section>

  <!-- Super Variation without PrismicLink -->
  <section
    v-else-if="!isFilled.link(slice.primary.link) && slice.variation === 'super'"
    :class="['hero', 'hero--super', 'wrapper--fullscreen']"
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
        <span
          v-if="isFilled.keyText(slice.primary.cta)"
          class="cta"
        >
          {{ slice.primary.cta }}
        </span>
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
