<script setup lang="ts">
import { components } from '~/slices'
import { useArticleSeo } from '~/composables/useArticleSeo';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

const prismic = usePrismic()
const route = useRoute()

// Fetch the article data
const { data: article } = await useAsyncData(`articles/${route.params.uid}`, () =>
  prismic.client.getByUID('blog_article', route.params.uid as string)
)

useArticleSeo(article)
</script>

<template>
  <div>
    <SliceZone
      id="main"
      wrapper="main"
      class="page--article"
      :slices="article?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>