<script setup lang="ts">
import { computed } from 'vue'
const settings = useSettings()
const prismic = usePrismic()

const title = computed(() => settings.value?.data.site_title ?? 'Default Title')
const description = computed(() => settings.value?.data.meta_description ?? 'Default Description')
const ogImage = computed(() => prismic.asImageSrc(settings.value?.data.og_image) ?? 'default-image.jpg')

useSeoMeta({
  title,
  description,
  ogImage
})
</script>


<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>