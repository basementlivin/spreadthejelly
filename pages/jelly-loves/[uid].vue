<script setup lang="ts">
import { components } from '~/slices';
import { useArticleSeo } from '~/composables/useArticleSeo';
import { isFilled } from "@prismicio/client";
import type { JellyLovesArticleDocument } from '~/prismicio-types.d.ts';
import { prismicImageSettings } from '@/utils/prismicImageSettings';
import { useRoute } from 'vue-router';

const prismic = usePrismic();
const route = useRoute();

// Fetch the article using useAsyncData, ensuring it refetches on UID changes
const { data: article } = useAsyncData('jellyLovesArticle', () =>
  prismic.client.getByUID<JellyLovesArticleDocument>('jelly_loves_article', route.params.uid as string),
  { watch: [() => route.params.uid] }  // Refetch when the route UID changes
)

useArticleSeo(article);

// Fetch all Jelly Loves articles sorted by publication date
const { data: allArticles } = useAsyncData('allJellyLovesArticles', () =>
  prismic.client.getAllByType<JellyLovesArticleDocument>('jelly_loves_article', {
    orderings: { field: 'my.jelly_loves_article.publication_date', direction: 'asc' },
    fetch: ['jelly_loves_article.title', 'jelly_loves_article.featured_image'],
  }),
  { watch: [() => route.params.uid] }  // Refetch when the route UID changes
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
  <main class="page--jelly-loves-article">
    <div class="article__introduction wrapper wrapper--page-width">
      <h1 class="title h2">{{ article?.data.title }}</h1>
      <span class="author h3">by {{ article?.data.author }}</span>
      <div class="image">
        <PrismicImage
          v-if="isFilled.image(article?.data.featured_image)"
          :field="article?.data.featured_image"
          :alt="article?.data.featured_image?.alt || 'No image description provided.'"
          :widths="prismicImageSettings.presets.hero.widths"
          :imgix-params="prismicImageSettings.presets.hero.imgixParams"
          loading="lazy"
        />
      </div>
      <PrismicRichText
        v-if="isFilled.richText(article?.data.article_introduction)"
        :field="article?.data.article_introduction"
        wrapper="div"
        class="intro"
      />
    </div>

    <SliceZone
      id="article__content"
      wrapper="div"
      class="page--jelly-loves-article"
      :slices="article?.data.slices ?? []"
      :components="components"
    />

    <nav class="article-navigation">
      <!-- Render Previous Article link only if it exists -->
      <PrismicLink
        v-if="prevArticle"
        :field="prevArticle"
        class="prev-article link"
        aria-label="Navigate to the previous article."
      >
        <div class="image">
          <PrismicImage
            :field="prevArticle?.data?.featured_image"
            :alt="prevArticle?.data?.featured_image?.alt || 'No image description provided.'"
            :widths="prismicImageSettings.presets.tiny.widths"
            :imgix-params="prismicImageSettings.presets.tiny.imgixParams"
            loading="lazy"
          />
        </div>
        <div class="details">
          <span class="headline">Previous:</span>
          <span class="title">{{ prevArticle?.data?.title }}</span>
        </div>
      </PrismicLink>

      <!-- Render Next Article link only if it exists -->
      <PrismicLink
        v-if="nextArticle"
        :field="nextArticle"
        class="next-article link"
        aria-label="Navigate to the next article."
      >
        <div class="image">
          <PrismicImage
            :field="nextArticle?.data?.featured_image"
            :alt="nextArticle?.data?.featured_image?.alt || 'No image description provided.'"
            :widths="prismicImageSettings.presets.tiny.widths"
            :imgix-params="prismicImageSettings.presets.tiny.imgixParams"
            loading="lazy"
          />
        </div>
        <div class="details">
          <span class="headline">Next:</span>
          <span class="title">{{ nextArticle?.data?.title }}</span>
        </div>
      </PrismicLink>
    </nav>
  </main>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_article-nav.scss';
  @import '@/assets/scss/pages/_jelly-loves-article.scss';
</style>
