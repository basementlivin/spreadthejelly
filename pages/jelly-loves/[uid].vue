<script setup lang="ts">
import { components } from '~/slices';
import { useArticleSeo } from '~/composables/useArticleSeo';
import { isFilled } from "@prismicio/client";
import type { JellyLovesArticleDocument } from '~/prismicio-types.d.ts';
import { prismicImageSettings } from '@/utils/prismicImageSettings';

const prismic = usePrismic();
const route = useRoute();

// Fetch the article using useAsyncData
const { data: article } = useAsyncData('jellyLovesArticle', () =>
  prismic.client.getByUID<JellyLovesArticleDocument>('jelly_loves_article', route.params.uid as string)
);

useArticleSeo(article);

// Fetch the next and previous articles
const { data: nextArticle } = useAsyncData('nextJellyLovesArticle', () =>
  prismic.client.getAllByType<JellyLovesArticleDocument>('jelly_loves_article', {
    pageSize: 1,
    after: article.value?.id,
    orderings: { field: 'my.jelly_loves_article.publication_date' },
    fetch: ['jelly_loves_article.title', 'jelly_loves_article.featured_image'],
  })
);

const { data: prevArticle } = useAsyncData('prevJellyLovesArticle', () =>
  prismic.client.getAllByType<JellyLovesArticleDocument>('jelly_loves_article', {
    pageSize: 1,
    after: article.value?.id,
    orderings: { field: 'my.jelly_loves_article.publication_date desc' },
    fetch: ['jelly_loves_article.title', 'jelly_loves_article.featured_image'],
  })
);
</script>

<template>
  <div :key="route.fullPath">
    <main
      id="main"
      class="page--jelly-loves-article"
    >
      <div class="article__introduction wrapper wrapper--page-width">
        <h1 class="title h2">
          {{ article?.data.title }}
        </h1>
        <span class="author h3">
          by {{ article?.data.author }}
        </span>
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
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_article-nav.scss';
  @import '@/assets/scss/pages/_jelly-loves-article.scss';
</style>
