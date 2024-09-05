<script setup lang="ts">
import { components } from '~/slices'
import { useArticleSeo } from '~/composables/useArticleSeo';
import type { BlogArticleDocument } from '~/prismicio-types.d.ts'
import { partialWidthSizes } from '@/utils/imageSizes'

const prismic = usePrismic()
const route = useRoute()

// Fetch the article using useAsyncData
const { data: article } = useAsyncData('article', () =>
  prismic.client.getByUID<BlogArticleDocument>('blog_article', route.params.uid as string)
)

useArticleSeo(article)

// Fetch the next and previous articles
const { data: nextArticle } = useAsyncData('nextArticle', () =>
  prismic.client.getAllByType<BlogArticleDocument>('blog_article', {
    pageSize: 1,
    after: article.value?.id,
    orderings: { field: 'my.blog_article.publication_date' },
    fetch: ['blog_article.title', 'blog_article.featured_image'],
  })
)

const { data: prevArticle } = useAsyncData('prevArticle', () =>
  prismic.client.getAllByType<BlogArticleDocument>('blog_article', {
    pageSize: 1,
    after: article.value?.id,
    orderings: { field: 'my.blog_article.publication_date desc' },
    fetch: ['blog_article.title', 'blog_article.featured_image'],
  })
)
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
        v-if="prevArticle && prevArticle[0]"
        :field="prevArticle[0]"
        class="prev-article link"
        aria-label="Navigate to the previous article."
      >
        <div class="image">
          <NuxtImg
            :src="prevArticle[0]?.data?.featured_image?.url ?? ''"
            :alt="prevArticle[0]?.data?.featured_image?.alt ?? ''"
            :sizes="partialWidthSizes"
            :placeholder="[50, 25, 75, 5]"
            preset="tiny"
            width="96"
            height="96"
          />
        </div>
        <div class="details">
          <span class="headline">Previous:</span>
          <span class="title">{{ prevArticle[0]?.data?.title }}</span>
        </div>
      </PrismicLink>

      <PrismicLink
        v-if="nextArticle && nextArticle[0]"
        :field="nextArticle[0]"
        class="next-article link"
        aria-label="Navigate to the next article."
      >
        <div class="image">
          <NuxtImg
            :src="nextArticle[0]?.data?.featured_image?.url ?? ''"
            :alt="nextArticle[0]?.data?.featured_image?.alt ?? ''"
            :sizes="partialWidthSizes"
            :placeholder="[50, 25, 75, 5]"
            preset="tiny"
            width="96"
            height="96"
          />
        </div>
        <div class="details">
          <span class="headline">Next:</span>
          <span class="title">{{ nextArticle[0]?.data?.title }}</span>
        </div>
      </PrismicLink>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_article-nav.scss';
</style>
