<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const route = useRoute()

// Fetch the article data reactively based on the route params
const { data: article } = useAsyncData(`ask-jelly/${route.params.uid}`, () =>
  prismic.client.getByUID('ask_jelly_article', route.params.uid as string)
)

useSeoMeta({
  title: article.value?.data.meta_title ?? undefined,
  description: article.value?.data.meta_description ?? undefined,
  ogImage: prismic.asImageSrc(article.value?.data.meta_image) ?? undefined,
})

</script>

<template>
  <div :key="$route.fullPath">
    <SliceZone
      id="main"
      wrapper="main"
      :slices="article?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>