<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { computed } from "vue";
import type { AskJellyArticleDocument, BlogArticleDocument, JellyLovesArticleDocument } from '~/prismicio-types.d.ts';
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

const colorMap = {
  "Black": "var(--black)",
  "White": "var(--white)",
  "Sunset": "var(--yellow)",
  "Ember": "var(--red)",
  "Soft Pink": "var(--pink)",
  "Light Chartreuse": "var(--green)",
  "Sky Blue": "var(--blue)",
};

// Explicitly define the color choices for the card
type ColorChoice = "Black" | "White" | "Sunset" | "Ember" | "Soft Pink" | "Light Chartreuse" | "Sky Blue";

const getColor = (choice: ColorChoice) => colorMap[choice];

// Fetch related documents for both Blog Articles and Jelly Loves Articles
const featuredArticlesData = await Promise.all([
  prismic.client.getByType<BlogArticleDocument>('blog_article', {
    fetchLinks: [
      "blog_article.featured_image"
    ]
  }),
  prismic.client.getByType<JellyLovesArticleDocument>('jelly_loves_article', {
    fetchLinks: [
      "jelly_loves_article.featured_image"
    ]
  }),
  prismic.client.getByType<AskJellyArticleDocument>('ask_jelly_article', {
    fetchLinks: [
      "ask_jelly_article.featured_image"
    ]
  })
]);

// Combine results from both queries
const combinedArticlesData = [
  ...featuredArticlesData[0].results,
  ...featuredArticlesData[1].results,
  ...featuredArticlesData[2].results
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
        return relatedDoc ? { 
          ...relatedDoc, 
          title: item.article_title, 
          subtitle: item.article_subtitle, 
          card_style: item.card_style, 
          featured_quote: item.featured_quote, 
          card_bg_color: getColor(item.card_bg_color as ColorChoice),
          card_hover_color: getColor(item.card_hover_color as ColorChoice),
          card_text_color: item.card_text_color, 
          card_text_align: item.card_text_align,
          scale: item.scale
        } : null;
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
      <PrismicLink
        v-for="(article, index) in featuredArticles"
        :key="index"
        :field="article"
        class="article"
        :aria-labelledby="`article__title--${index}`"
      >
        <div
          :class="{
            'article__image': true,
            'full-bleed': article.card_style === 'Full Bleed Image',
            'inset inset--vertical': article.card_style === 'Inset Image Vertical',
            'inset inset--horizontal': article.card_style === 'Inset Image Horizontal',
            'mask--blob-01': article.card_style === 'Blob Mask 1',
            'mask--blob-02': article.card_style === 'Blob Mask 2',
            'quote': article.card_style === 'Featured Quote',
            'scale': article.scale === true
          }"
          :style="{
            '--card-bg-color': article.card_bg_color,
            '--card-hover-color': article.card_hover_color,
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
            "{{ article.featured_quote }}"
          </span>
          <div class="title-and-link">
            <span class="tag">
              {{ article.tags[0] }}
            </span>
            <span
              :id="`article__title--${index}`"
              class="title h3"
            >
              {{ article.title }}
            </span>
            <span class="subtitle">
              {{ article.subtitle }}
            </span>
            <span class="link">read more</span>
          </div>
        </div>
      </PrismicLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import url('/assets/scss/slices/_featured-articles.scss');
</style>
