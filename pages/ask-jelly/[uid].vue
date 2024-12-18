<script setup lang="ts">
import { components } from '~/slices'
import { useArticleSeo } from '~/composables/useArticleSeo'
import type { AskJellyArticleDocument } from '~/prismicio-types.d.ts'
import { useRoute } from 'vue-router'

const prismic = usePrismic()
const route = useRoute()

// Fetch the current Ask Jelly article
const { data: article } = useAsyncData(`
  articles/${route.params.uid}`,
  () =>
    prismic.client.getByUID<AskJellyArticleDocument>(
      'ask_jelly_article', route.params.uid as string
    ), 
)

useArticleSeo(article)

// Fetch all Ask Jelly articles sorted by publication date
const { data: allArticles } = useAsyncData('allAskJellyArticles', () =>
  prismic.client.getAllByType<AskJellyArticleDocument>('ask_jelly_article', {
    orderings: { field: 'my.ask_jelly_article.publication_date', direction: 'asc' },
    fetch: ['ask_jelly_article.title'],
  }),
)

// Find the current article index and determine next/previous articles
const currentIndex = computed(() => {
  return allArticles.value?.findIndex(a => a.id === article.value?.id)
})

const nextArticle = computed(() => {
  return allArticles.value && currentIndex.value !== undefined && currentIndex.value < allArticles.value.length - 1
    ? allArticles.value[currentIndex.value + 1]
    : null
})

const prevArticle = computed(() => {
  return allArticles.value && currentIndex.value !== undefined && currentIndex.value > 0
    ? allArticles.value[currentIndex.value - 1]
    : null
})
</script>

<template>
  <div>
    <SliceZone
      id="main"
      wrapper="main"
      class="page--ask-jelly-article"
      :slices="article?.data.slices ?? []"
      :components="components"
    />

    <nav class="ask-jelly-article-navigation">
      <PrismicLink
        v-if="prevArticle"
        :field="prevArticle"
        class="prev-article"
        aria-label="Navigate to the previous article."
      >
        <span class="headline">Previous:</span> 
        <span class="title">{{ prevArticle?.data?.title }}</span>
      </PrismicLink>

      <PrismicLink
        v-if="nextArticle"
        :field="nextArticle"
        class="next-article"
        aria-label="Navigate to the next article."
      >
        <span class="headline">Next:</span> 
        <span class="title">{{ nextArticle?.data?.title }}</span>
      </PrismicLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_ask-jelly-article-nav.scss';
</style>
