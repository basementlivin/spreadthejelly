<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('page', 'home', {
    fetchLinks: [
      // Fetch linked documents
      // like all the fields in 'Event'
      // or the author of a blog post.
      // For example:
      'event.even_title',
      'event.date',
      'event.program',
      'exhibition.exhibition_title',
      'exhibition.opening_date',
      'exhibition.closing_date',
      'exhibition.featured_image',
    ]
  })
)

useSeoMeta({
  title: page.value?.data.meta_title ?? undefined,
  description: page.value?.data.meta_description ?? undefined,
  ogImage: prismic.asImageSrc(page.value?.data.meta_image) ?? undefined,
})
</script>


<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
