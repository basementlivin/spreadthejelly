<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import gsap from 'gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollTrigger from 'gsap/ScrollTrigger'

const settings = useSettings()
const prismic = usePrismic()
const router = useRouter()
const route = useRoute()

const title = computed(() => settings.value?.data.site_title ?? 'Spread the Jelly')
const description = computed(() => settings.value?.data.meta_description ?? 'An editorial resource & storytelling platform for every motherhood journey.')
const ogImage = computed(() => prismic.asImageSrc(settings.value?.data.og_image) ?? '/spread-the-jelly--og.png')

useSeoMeta({
  title,
  description,
  ogImage
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 0.875,
      effects: true,
    })

    // Watch for route changes and refresh GSAP + manually refetch data
    watch(router.currentRoute, () => {
      smoother.scrollTop(0) // Reset scroll to top on page change
      ScrollTrigger.refresh()
    })
  }
})
</script>

<template>
  <div class="fade-container">
    <NewsletterSignup />
    <Header />
    <div id="smooth-wrapper">
      <div
        id="smooth-content"
        :key="route.fullPath"
      >
        <slot />
        <Footer />
      </div>
    </div>
  </div>
</template>
