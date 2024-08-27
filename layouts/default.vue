<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollSmoother)
gsap.registerPlugin(ScrollTrigger)

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

onMounted(() => {
  if (typeof window !== 'undefined') {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.35,
      effects: true,
    })

    // Refresh ScrollTrigger on route changes
    watch(router.currentRoute, () => {
      smoother.scrollTop(0) // Start at the top of the new page
      ScrollTrigger.refresh()
    })
  }
})
</script>

<template>
  <div class="fade-container">
    <Header />
    <NewsletterSignup />
    <div
      id="smooth-wrapper"
      data-scroll-container
    >
      <div
        id="smooth-content"
        data-scroll-content
      >
        <slot />
        <Footer />
      </div>
    </div>
  </div>
</template>
