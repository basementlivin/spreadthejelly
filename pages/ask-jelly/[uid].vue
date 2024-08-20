<script setup lang="ts">
import { components } from '~/slices'
import { usePageSeo } from '~/composables/usePageSeo'

const prismic = usePrismic()
const route = useRoute()

// Fetch the article data reactively based on the route params
const { data: article } = useAsyncData(`ask-jelly/${route.params.uid}`, () =>
  prismic.client.getByUID('ask_jelly_article', route.params.uid as string)
)

usePageSeo(article)
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