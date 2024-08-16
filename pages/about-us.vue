<script setup lang="ts">
import { components } from '~/slices'
import { usePrismic } from '@prismicio/vue'

const prismic = usePrismic()



const { data: page, error } = useAsyncData('aboutPage', () => 
  prismic.client.getSingle('about'))

if (error.value) {
  console.error('Error value from useAsyncData:', error.value)
}

useSeoMeta({
  title: page.value?.data.meta_title ?? undefined,
  description: page.value?.data.meta_description ?? undefined,
  ogImage: prismic.asImageSrc(page.value?.data.meta_image) ?? undefined,
})
</script>

<template>
  <main 
    id="main"
    class="page--about"
  >
    <div class="about__intro wrapper wrapper--narrow">
      <h1 class="headline">
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
    <SliceZone
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </main>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/pages/_about.scss';
</style>