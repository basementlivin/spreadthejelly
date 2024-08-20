<script setup lang="ts">
import { components } from '~/slices'
import { useArticleSeo } from '~/composables/useArticleSeo';

const prismic = usePrismic()
const route = useRoute()

// Fetch the article data reactively based on the route params
const { data: article } = useAsyncData(`ask-jelly/${route.params.uid}`, () =>
  prismic.client.getByUID('ask_jelly_article', route.params.uid as string)
)

useArticleSeo(article)
</script>

<template>
  <div :key="$route.fullPath">
    <SliceZone
      id="main"
      wrapper="main"
      class="page--ask-jelly-article"
      :slices="article?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>