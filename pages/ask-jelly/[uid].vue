<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { components } from '~/slices'
import { useArticleSeo } from '~/composables/useArticleSeo'
import type { AskJellyArticleDocument } from '~/prismicio-types.d.ts'

const prismic = usePrismic()
const route = useRoute()

const article = ref<AskJellyArticleDocument | null>(null)
const nextArticle = ref<AskJellyArticleDocument | null>(null)
const prevArticle = ref<AskJellyArticleDocument | null>(null)

const fetchArticleData = async () => {
  article.value = await prismic.client.getByUID('ask_jelly_article', route.params.uid as string)
}

await fetchArticleData()

useArticleSeo(article)

// Lazy load next and previous articles after the main article is loaded
onMounted(async () => {
  if (article.value?.id) {
    const articleId = article.value.id

    const [nextArticles, prevArticles] = await Promise.all([
      prismic.client.getAllByType<AskJellyArticleDocument>('ask_jelly_article', {
        pageSize: 1,
        after: articleId,
        orderings: { field: 'my.ask_jelly_article.publication_date' },
        fetch: ['ask_jelly_article.title'],
      }),
      prismic.client.getAllByType<AskJellyArticleDocument>('ask_jelly_article', {
        pageSize: 1,
        after: articleId,
        orderings: { field: 'my.ask_jelly_article.publication_date desc' },
        fetch: ['ask_jelly_article.title'],
      }),
    ])

    nextArticle.value = nextArticles[0] || null
    prevArticle.value = prevArticles[0] || null
  }
})
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
