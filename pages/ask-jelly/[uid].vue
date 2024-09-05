<script setup lang="ts">
import { components } from '~/slices'
import { useArticleSeo } from '~/composables/useArticleSeo'
import type { AskJellyArticleDocument } from '~/prismicio-types.d.ts'

const prismic = usePrismic()
const route = useRoute()

// Fetch the article using useAsyncData
const { data: article } = useAsyncData('askJellyArticle', () =>
  prismic.client.getByUID<AskJellyArticleDocument>('ask_jelly_article', route.params.uid as string)
)

useArticleSeo(article)

// Fetch the next and previous articles
const { data: nextArticle } = useAsyncData('nextAskJellyArticle', () =>
  prismic.client.getAllByType<AskJellyArticleDocument>('ask_jelly_article', {
    pageSize: 1,
    after: article.value?.id,
    orderings: { field: 'my.ask_jelly_article.publication_date' },
    fetch: ['ask_jelly_article.title'],
  })
)

const { data: prevArticle } = useAsyncData('prevAskJellyArticle', () =>
  prismic.client.getAllByType<AskJellyArticleDocument>('ask_jelly_article', {
    pageSize: 1,
    after: article.value?.id,
    orderings: { field: 'my.ask_jelly_article.publication_date desc' },
    fetch: ['ask_jelly_article.title'],
  })
)
</script>

<template>
  <div :key="route.fullPath">
    <SliceZone
      id="main"
      wrapper="main"
      class="page--ask-jelly-article"
      :slices="article?.data.slices ?? []"
      :components="components"
    />

    <nav class="ask-jelly-article-navigation">
      <PrismicLink
        v-if="prevArticle && prevArticle[0]"
        :field="prevArticle[0]"
        class="prev-article"
        aria-label="Navigate to the previous article."
      >
        <span class="headline">Previous:</span> 
        <span class="title">{{ prevArticle[0]?.data?.title }}</span>
      </PrismicLink>

      <PrismicLink
        v-if="nextArticle && nextArticle[0]"
        :field="nextArticle[0]"
        class="next-article"
        aria-label="Navigate to the next article."
      >
        <span class="headline">Next:</span> 
        <span class="title">{{ nextArticle[0]?.data?.title }}</span>
      </PrismicLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_ask-jelly-article-nav.scss';
</style>
