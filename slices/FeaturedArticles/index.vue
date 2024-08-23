<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { computed } from "vue";
import type { BlogArticleDocument } from '~/prismicio-types.d.ts';

const props = defineProps(
  getSliceComponentProps<Content.FeaturedArticlesSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const prismic = usePrismic();

// Fetch the related blog_article documents with typed data
const featuredArticlesData = await prismic.client.getByType<BlogArticleDocument>('blog_article', {
  fetchLinks: [
    "blog_article.title",
    "blog_article.featured_image",
  ]
});

// Filter and map the featured articles
const featuredArticles = computed(() => {
  return props.slice.primary.articles
    .filter(item => isFilled.contentRelationship(item.article)) // Ensure only filled relationships are processed
    .map(item => {
      const articleLink = item.article;

      // Add type guard to ensure item.article has the id field
      if (isFilled.contentRelationship(articleLink)) {
        const relatedDoc = featuredArticlesData.results.find(
          (doc) => doc.id === articleLink.id
        );
        return relatedDoc ? { ...relatedDoc, image_style: item.image_style, text_align: item.text_align, text_color: item.text_color } : null;
      }
      return null;
    })
    .filter(article => article !== null);  // Filter out any null entries
});

</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="featured-articles wrapper wrapper--fullscreen"
  >
    <div
      v-if="isFilled.group(slice.primary.articles)"
      class="featured-articles__inner"
    >
      <div
        v-for="(article, index) in featuredArticles"
        :key="index"
        class="article"
      >
        <div
          class="article__image"
          :class="{
            'full-bleed': article.image_style === 'Full Bleed',
            'inset': article.image_style === 'Inset',
            'mask--blob': article.image_style === 'Blob Mask'
          }"
        >
          <NuxtImg
            :src="article.data.featured_image.url ?? ''"
            :alt="article.data.featured_image.alt ?? ''"
          />
        </div>
        <div
          class="article__details"
          :class="{
            'align--top': article.text_align === 'Top',
            'align--bottom': article.text_align === 'Bottom'
          }"
          :style="{
            color: article.text_color
          }"
        >
          <p class="title h3">
            {{ article.data.title }}
          </p>
          
          <PrismicLink
            :field="article"
            class="link"
          >
            read more
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import url('/assets/scss/slices/_featured-articles.scss');
</style>
