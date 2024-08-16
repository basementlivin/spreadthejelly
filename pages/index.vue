<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('page', 'home', {
    fetchLinks: [
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
    id="main"
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>