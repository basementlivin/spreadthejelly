import { computed } from 'vue'
import { usePrismic } from '@prismicio/vue'

export function usePageSeo(page) {
  const prismic = usePrismic()
  const settings = useSettings()

  const title = computed(() => page.value?.data.meta_title ?? settings.value?.data.site_title ?? 'Spread the Jelly')
  const description = computed(() => page.value?.data.meta_description ?? settings.value?.data.meta_description ?? '')
  const ogImage = computed(() => {
    const pageImage = prismic.asImageSrc(page.value?.data.meta_image)
    const settingsImage = prismic.asImageSrc(settings.value?.data.og_image)

    return pageImage
      ? { url: pageImage, alt: page.value?.data.meta_image.alt ?? '' }
      : settingsImage
      ? { url: settingsImage, alt: settings.value?.data.og_image.alt ?? '' }
      : { url: '/spread-the-jelly--og.png', alt: 'Default OG Image' }
  })

  useSeoMeta({
    title,
    description,
    ogImage: ogImage.value,
  })
}
