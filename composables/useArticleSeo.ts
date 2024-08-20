import { computed } from 'vue'
import { usePrismic } from '@prismicio/vue'
import type { PrismicDocument } from '@prismicio/types'

export function useArticleSeo(page: Ref<PrismicDocument | null>) {
  const prismic = usePrismic()
  const settings = useSettings()
  const route = useRoute()

  const title = computed(() => page.value?.data.meta_title ?? settings.value?.data.site_title ?? 'Spread the Jelly')
  const description = computed(() => page.value?.data.meta_description ?? settings.value?.data.meta_description ?? '')
  const ogImage = computed(() => {
    const pageImage = prismic.asImageSrc(page.value?.data.meta_image)
    const settingsImage = prismic.asImageSrc(settings.value?.data.og_image)

    return pageImage
      ? { url: pageImage, alt: page.value?.data.meta_image.alt ?? '' }
      : settingsImage
      ? { url: settingsImage, alt: settings.value?.data.og_image.alt ?? '' }
      : { url: '/spread-the-jelly--og.png', alt: 'Spread the Jelly' }
  })

  const ogUrl = computed(() => `https://spreadthejelly.com${route.path}`)

  const articleAuthor = computed(() => page.value?.data.author ?? 'Spread the Jelly')
  const articlePublishedTime = computed(() => page.value?.data.publication_date)

  useSeoMeta({
    title,
    description,
    ogImage: ogImage.value,
    ogUrl: ogUrl.value,
    ogSiteName: 'Spread the Jelly',
    articleAuthor: articleAuthor.value,
    articlePublishedTime: articlePublishedTime.value,
  })
}
