<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { computed } from "vue";
import type { AskJellyArticleDocument, BlogArticleDocument, JellyLovesArticleDocument } from '~/prismicio-types.d.ts';
import { prismicImageSettings } from '@/utils/prismicImageSettings';

const props = defineProps(
  getSliceComponentProps<Content.RelatedArticlesSlice>([
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
const relatedArticlesData = await Promise.all([
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
  ...relatedArticlesData[0].results,
  ...relatedArticlesData[1].results,
  ...relatedArticlesData[2].results
];

// Filter and map the related articles
const relatedArticles = computed(() => {
  return props.slice.primary.articles
    .filter(item => isFilled.contentRelationship(item.article_link)) // Ensure only filled relationships are processed
    .map(item => {
      const articleLink = item.article_link;

      // Find the related document based on the content relationship field
      const relatedDoc = combinedArticlesData.find(
        (doc) => isFilled.contentRelationship(articleLink) && doc.id === articleLink.id
      );

      // Return the related document along with all fields from each article item
      return relatedDoc ? { 
        ...relatedDoc, 
        title: item.article_title, 
        subtitle: item.article_subtitle, 
        card_style: item.card_style, 
        featured_quote: item.featured_quote, 
        card_bg_color: getColor(item.card_bg_color as ColorChoice),
      card_hover_color: getColor(item.card_hover_color as ColorChoice),

        card_text_color: item.card_text_color 

      } : null;
    })
    .filter(article => article !== null);  // Filter out any null entries
});

</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="related-articles wrapper wrapper--fullscreen"
  >
    <span
      v-if="isFilled.keyText(slice.primary.headline)"
      class="related-articles__headline h2"
    >
      {{ slice.primary.headline }}
    </span>
    <div
      v-if="isFilled.group(slice.primary.articles)"
      class="related-articles__inner"
    >
      <PrismicLink
        v-for="(article, index) in relatedArticles"
        :key="index"
        :field="article"
        class="article"
        :aria-labelledby="`article__details--${index}`"
      >
        <div
          class="article__image"
          :class="{
            'full-bleed': article.card_style === 'Full-Bleed Image',
            'mask mask--blob-01': article.card_style === 'Blob Mask 1',
            'mask mask--blob-02': article.card_style === 'Blob Mask 2',
            'inset inset--vertical': article.card_style === 'Inset Image Vertical',
            'inset inset--horizontal': article.card_style === 'Inset Image Horizontal',
            'mask mask--quote': article.card_style === 'Featured Quote',
          }"
          :style="{
            '--card-bg-color': article.card_bg_color,
            '--card-hover-color': article.card_hover_color
          }"
        >
          <PrismicImage
            v-if="article.data.featured_image && article.card_style !== 'Featured Quote'"
            :field="article.data.featured_image"
            :alt="article.data.featured_image.alt || 'No image description provided'"
            :widths="prismicImageSettings.presets.default.widths"
            :imgix-params="prismicImageSettings.presets.default.imgixParams"
            loading="lazy"
          />
          <span
            v-if="article.card_style === 'Featured Quote'"
            class="quote"
            :class="{
              'text--white': article.card_text_color === 'White',
              'text--black': article.card_text_color === 'Black',
            }"
          >
            "{{ article.featured_quote }}"
          </span>
        </div>
        <div
          :id="`article__details--${index}`"
          class="article__details"
        >
          <span class="tag">
            {{ article.tags[0] }}
          </span>
          <p class="title h3">
            {{ article.title }}
          </p>
          <p class="subtitle">
            {{ article.subtitle }}
          </p>
          <span class="link">read more</span>
        </div>
      </PrismicLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import url('/assets/scss/slices/_related-articles.scss');
</style>
