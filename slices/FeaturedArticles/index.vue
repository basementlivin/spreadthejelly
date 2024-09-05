<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { computed } from "vue";
import type { BlogArticleDocument } from '~/prismicio-types.d.ts';
import { prismicImageSettings } from '@/utils/prismicImageSettings';

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
        return relatedDoc ? { ...relatedDoc, image_style: item.image_style, bg_color: item.background_color, text_align: item.text_align, text_color: item.text_color } : null;
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
            'mask--blob-01': article.image_style === 'Blob Mask 1',
            'mask--blob-02': article.image_style === 'Blob Mask 2',
          }"
          :style="{
            backgroundColor: article.bg_color
          }"
        >
          <PrismicImage
            v-if="article.data.featured_image"
            :field="article.data.featured_image"
            :alt="article.data.featured_image.alt || 'Image description not provided'"
            :widths="prismicImageSettings.presets.default.widths"
            :imgix-params="prismicImageSettings.presets.default.imgixParams"
          />
        </div>
        <div
          class="article__details"
          :class="{
            'align--top': article.text_align === 'Top',
            'align--bottom': article.text_align === 'Bottom'
          }"
          :style="{
            color: article.text_color,
          }"
        >
          <p class="title h3">
            {{ article.data.title }}
          </p>
          
          <PrismicLink
            :field="article"
            class="link"
            aria-label="Read the full article"
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
