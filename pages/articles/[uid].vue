<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { components } from '~/slices'
import { useArticleSeo } from '~/composables/useArticleSeo';
import type { BlogArticleDocument } from '~/prismicio-types.d.ts'

const prismic = usePrismic()
const route = useRoute()

const article = ref<BlogArticleDocument | null>(null)
const nextArticle = ref<BlogArticleDocument | null>(null)
const prevArticle = ref<BlogArticleDocument | null>(null)

const fetchArticleData = async () => {
  article.value = await prismic.client.getByUID('blog_article', route.params.uid as string)
}

await fetchArticleData()

useArticleSeo(article)

// Lazy load next and previous articles after the main article is loaded
onMounted(async () => {
  if (article.value?.id) {
    const articleId = article.value.id

    const [nextArticles, prevArticles] = await Promise.all([
      prismic.client.getAllByType<BlogArticleDocument>('blog_article', {
        pageSize: 1,
        after: articleId,
        orderings: { field: 'my.blog_article.publication_date' },
        fetch: ['blog_article.title', 'blog_article.featured_image'],
      }),
      prismic.client.getAllByType<BlogArticleDocument>('blog_article', {
        pageSize: 1,
        after: articleId,
        orderings: { field: 'my.blog_article.publication_date desc' },
        fetch: ['blog_article.title', 'blog_article.featured_image'],
      }),
    ])

    nextArticle.value = nextArticles[0] || null
    prevArticle.value = prevArticles[0] || null
  }
})
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

    <nav class="article-navigation">
      <PrismicLink
        v-if="prevArticle"
        :field="prevArticle"
        class="prev-article link"
        aria-label="Navigate to the previous article."
      >
        <div class="image">
          <NuxtImg
            :src="prevArticle?.data?.featured_image?.url ?? ''"
            :alt="prevArticle?.data?.featured_image?.alt ?? ''"
          />
        </div>
        <div class="details">
          <span class="headline">Previous:</span>
          <span class="title">{{ prevArticle?.data?.title }}</span>
        </div>
      </PrismicLink>

      <PrismicLink
        v-if="nextArticle"
        :field="nextArticle"
        class="next-article link"
        aria-label="Navigate to the next article."
      >
        <div class="image">
          <NuxtImg
            :src="nextArticle?.data?.featured_image?.url ?? ''"
            :alt="nextArticle?.data?.featured_image?.alt ?? ''"
          />
        </div>
        <div class="details">
          <span class="headline">Next:</span>
          <span class="title">{{ nextArticle?.data?.title }}</span>
        </div>
      </PrismicLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_article-nav.scss';
</style>
