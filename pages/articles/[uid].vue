<script setup lang="ts">
import { components } from '~/slices'
import { useArticleSeo } from '~/composables/useArticleSeo';
import type { BlogArticleDocument } from '~/prismicio-types.d.ts'
import { prismicImageSettings } from '@/utils/prismicImageSettings';

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
  <div :key="route.fullPath">
    <SliceZone
      id="main"
      wrapper="main"
      class="page--article"
      :slices="article?.data.slices ?? []"
      :components="components"
    />

    <nav class="article-navigation">
      <!-- Render Previous Article link only if it exists and is different from the current article -->
      <PrismicLink
        v-if="prevArticle && prevArticle[0] && prevArticle[0].id !== article?.id"
        :field="prevArticle[0]"
        class="prev-article link"
        aria-label="Navigate to the previous article."
      >
        <div class="image">
          <PrismicImage
            :field="prevArticle[0]?.data?.featured_image"
            :alt="prevArticle[0]?.data?.featured_image?.alt || 'No image description provided.'"
            :widths="prismicImageSettings.presets.tiny.widths"
            :imgix-params="prismicImageSettings.presets.tiny.imgixParams"
            loading="lazy"
          />
        </div>
        <div class="details">
          <span class="headline">Previous:</span>
          <span class="title">{{ prevArticle[0]?.data?.title }}</span>
        </div>
      </PrismicLink>

      <!-- Render Next Article link only if it exists and is different from the current article -->
      <PrismicLink
        v-if="nextArticle && nextArticle[0] && nextArticle[0].id !== article?.id"
        :field="nextArticle[0]"
        class="next-article link"
        aria-label="Navigate to the next article."
      >
        <div class="image">
          <PrismicImage
            :field="nextArticle[0]?.data?.featured_image"
            :alt="nextArticle[0]?.data?.featured_image?.alt || 'No image description provided.'"
            :widths="prismicImageSettings.presets.tiny.widths"
            :imgix-params="prismicImageSettings.presets.tiny.imgixParams"
            loading="lazy"
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
