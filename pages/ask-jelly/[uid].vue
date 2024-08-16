<script setup lang="ts">
import { components } from '~/slices'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

const prismic = usePrismic()
const route = useRoute()

// Fetch the article data
const { data: article } = await useAsyncData(`ask-jelly/${route.params.uid}`, () =>
  prismic.client.getByUID('ask_jelly_article', route.params.uid as string)
)

useSeoMeta({
  title: article.value?.data.meta_title ?? undefined,
  description: article.value?.data.meta_description ?? undefined,
  ogImage: prismic.asImageSrc(article.value?.data.meta_image) ?? undefined,
})

</script>

<template>
  <div>
    <SliceZone
      id="main"
      wrapper="main"
      :slices="article?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>