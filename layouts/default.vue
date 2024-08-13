<script setup lang="ts">
const settings = useSettings()
const prismic = usePrismic()

useSeoMeta({
  title: settings.value?.data.site_title ?? undefined,
  description: settings.value?.data.meta_description ?? undefined,
  ogImage: prismic.asImageSrc(settings.value?.data.og_image) ?? undefined,
})
</script>

<template>
  <div 
    v-locomotive
    data-scroll-container
  >
    <Header />
    <slot />
    <Footer />
  </div>
</template>