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
        return relatedDoc ? { ...relatedDoc, card_style: item.card_style, card_bg_color: item.card_bg_color, card_text_align: item.card_text_align, card_text_color: item.card_text_color } : null;
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
            'full-bleed': article.card_style === 'Full Bleed Image',
            'inset': article.card_style === 'Inset Image',
            'mask--blob-01': article.card_style === 'Blob Mask 1',
            'mask--blob-02': article.card_style === 'Blob Mask 2',
            'quote': article.card_style === 'Featured Quote',
            'bg--white': article.card_bg_color === 'White',
            'bg--black': article.card_bg_color === 'Black',
            'bg--yellow': article.card_bg_color === 'Sunset',
            'bg--red': article.card_bg_color === 'Ember',
            'bg--pink': article.card_bg_color === 'Soft Pink',
            'bg--green': article.card_bg_color === 'Light Chartreuse',
            'bg--blue': article.card_bg_color === 'Sky Blue',
          }"
        >
          <PrismicImage
            v-if="article.data.featured_image && article.card_style !== 'Featured Quote'"
            :field="article.data.featured_image"
            :alt="article.data.featured_image.alt || 'Image description not provided'"
            :widths="prismicImageSettings.presets.default.widths"
            :imgix-params="prismicImageSettings.presets.default.imgixParams"
          />
        </div>
        <div
          :class="{
            'article__details': true,
            'article__details--quote': article.card_style === 'Featured Quote',
            'align--top': article.card_text_align === 'Top',
            'align--bottom': article.card_text_align === 'Bottom',
            'text--white': article.card_text_color === 'White',
            'text--black': article.card_text_color === 'Black',
          }"
        >
          <span
            v-if="article.card_style === 'Featured Quote'"
            class="quote"
          >
            "{{ article.data.featured_quote }}"
          </span>
          <div class="title-and-link">
            <span
              :id="`article__title--${index}`"
              class="title h3"
            >
              {{ article.data.title }}
            </span>
            
            <PrismicLink
              :field="article"
              class="link"
              :aria-labelledby="`article__title--${index}`"
            >
              read more <span class="sr-only">about {{ article.data.title }}</span>
            </PrismicLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import url('/assets/scss/slices/_featured-articles.scss');
</style>
