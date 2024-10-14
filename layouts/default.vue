<script setup lang="ts">
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const settings = useSettings()
const prismic = usePrismic()
const router = useRouter()

const title = computed(() => settings.value?.data.site_title ?? 'Spread the Jelly')
const description = computed(() => settings.value?.data.meta_description ?? 'An editorial resource & storytelling platform for every motherhood journey.')
const ogImage = computed(() => prismic.asImageSrc(settings.value?.data.og_image) ?? '/spread-the-jelly--og.png')

useSeoMeta({
  title,
  description,
  ogImage
})

// Watch for route changes and perform any required actions here
watch(router.currentRoute, () => {
  // Add any custom actions here if needed
})
</script>

<template>
  <div class="fade-container">
    <NewsletterSignup />
    <Header />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <slot />
        <Footer />
      </div>
    </div>
  </div>
</template>
