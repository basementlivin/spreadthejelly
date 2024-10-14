<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollTrigger from 'gsap/ScrollTrigger'

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

let smoother: ScrollSmoother | null = null // Explicitly define type

onMounted(() => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 0.875,
      effects: true,
    })

    // Refresh ScrollTrigger on route changes
    watch(router.currentRoute, () => {
      smoother?.scrollTop(0) // Start at the top of the new page
      ScrollTrigger.refresh()
    })
  }
})

onBeforeUnmount(() => {
  if (smoother) {
    smoother.kill() // Properly kill ScrollSmoother instance
    smoother = null
  }
  // Kill all ScrollTrigger instances
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>
