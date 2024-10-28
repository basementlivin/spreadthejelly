<script setup lang="ts">
import { components } from '~/slices'
import { usePrismic } from '@prismicio/vue'
import { usePageSeo } from '~/composables/usePageSeo'

const prismic = usePrismic()
const route = useRoute()

const { data: page, error } = useAsyncData('aboutPage', () => 
  prismic.client.getSingle('about'))

if (error.value) {
  console.error('Error value from useAsyncData:', error.value)
}

usePageSeo(page)

function getStickerFileName(selection: string | null): string {
  switch (selection) {
    case 'Pink Flower': return 'sticker_01.webp';
    case 'Yellow Flower': return 'sticker_02.webp';
    case 'Blue Flower': return 'sticker_03.webp';
    case 'Green Flower': return 'sticker_04.webp';
    case 'Blue Star': return 'sticker_05.webp';
    case 'Red Star': return 'sticker_06.webp';
    case 'Green Star': return 'sticker_07.webp';
    default: return '';
  }
}

function getPositionClass(position: string | null): string {
  switch (position) {
    case 'Top': return 'top';
    case 'Middle': return 'middle';
    case 'Bottom': return 'bottom';
    default: return '';
  }
}

</script>

<template>
  <main 
    id="main"
    :key="route.fullPath"
    class="page--about"
  >
    <div class="about__intro wrapper wrapper--narrow">
      <div
        :class="['illustration__left', getPositionClass(page?.data.illustration_left_position ?? null)]"
      >
        <img
          v-if="getStickerFileName(page?.data.illustration_left ?? null)"
          :src="`/stickers/${getStickerFileName(page?.data.illustration_left ?? null)}`"
          :alt="page?.data.illustration_left || 'Sticker'"
        >
      </div>

      <div class="content">
        <h1 class="headline h1">
          {{ page?.data.headline }}
        </h1>
        <span class="subheadline">
          {{ page?.data.subheadline }}
        </span>
        <PrismicRichText
          :field="page?.data.copy"
          class="copy"
        />
      </div>
      
      <div
        :class="['illustration__right', getPositionClass(page?.data.illustration_right_position ?? null)]"
      >
        <img
          v-if="getStickerFileName(page?.data.illustration_right ?? null)"
          :src="`/stickers/${getStickerFileName(page?.data.illustration_right ?? null)}`"
          :alt="page?.data.illustration_right || 'Sticker'"
        >
      </div>
    </div>
    <SliceZone
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </main>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/pages/_about.scss';
</style>