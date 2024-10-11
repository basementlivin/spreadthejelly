<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { computed } from "vue";
import type { BlogArticleDocument, JellyLovesArticleDocument } from '~/prismicio-types.d.ts';
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

// Fetch related documents for both Blog Articles and Jelly Loves Articles
const featuredArticlesData = await Promise.all([
  prismic.client.getByType<BlogArticleDocument>('blog_article', {
    fetchLinks: [
      "blog_article.title",
      "blog_article.featured_image"
    ]
  }),
  prismic.client.getByType<JellyLovesArticleDocument>('jelly_loves_article', {
    fetchLinks: [
      "jelly_loves_article.title",
      "jelly_loves_article.featured_image"
    ]
  })
]);

// Combine results from both queries
const combinedArticlesData = [
  ...featuredArticlesData[0].results,
  ...featuredArticlesData[1].results
];

// Filter and map the featured articles
const featuredArticles = computed(() => {
  return props.slice.primary.articles
    .filter(item => isFilled.contentRelationship(item.article)) // Ensure only filled relationships are processed
    .map(item => {
      const articleLink = item.article;

      // Add type guard to ensure item.article has the id field
      if (isFilled.contentRelationship(articleLink)) {
        const relatedDoc = combinedArticlesData.find(
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
          :class="{
            'article__image': true,
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
          :class="{
            'article__details': true,
            'align--top': article.text_align === 'Top',
            'align--bottom': article.text_align === 'Bottom'
          }"
          :style="{
            color: article.text_color,
          }"
        >
          <p
            :id="`article__title--${index}`"
            class="title h3"
          >
            {{ article.data.title }}
          </p>
          
          <PrismicLink
            :field="article"
            class="link"
            :aria-labelledby="`article__title--${index}`"
          >
            read more <span class="hidden">about {{ article.data.title }}</span>
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import url('/assets/scss/slices/_featured-articles.scss');
</style>
