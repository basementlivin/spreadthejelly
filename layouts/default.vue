<script setup lang="ts">
import { computed } from 'vue'
const settings = useSettings()
const prismic = usePrismic()

const title = computed(() => settings.value?.data.site_title ?? 'Spread the Jelly')
const description = computed(() => settings.value?.data.meta_description ?? 'An editorial resource & storytelling platform for every motherhood journey.')
const ogImage = computed(() => prismic.asImageSrc(settings.value?.data.og_image) ?? '/spread-the-jelly--og.png')

useSeoMeta({
  title,
  description,
  ogImage
})
</script>


<template>
  <div>
    <Header />
    <NewsletterSignup />
    <slot />
    <Footer />
  </div>
</template>