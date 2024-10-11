<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { computed } from "vue";
import type { BlogArticleDocument } from '~/prismicio-types.d.ts';
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

// Fetch the related blog_article documents with typed data
const relatedArticlesData = await prismic.client.getByType<BlogArticleDocument>('blog_article', {
  fetchLinks: [
    "blog_article.title",
    "blog_article.featured_image",
    "blog_article.featured_quote"
  ]
});

// Filter and map the related articles
const relatedArticles = computed(() => {
  return props.slice.primary.articles
    .filter(item => isFilled.contentRelationship(item.article_link)) // Ensure only filled relationships are processed
    .map(item => {
      const articleLink = item.article_link;

      // Find the related document based on the content relationship field
      const relatedDoc = relatedArticlesData.results.find(
        (doc) => isFilled.contentRelationship(articleLink) && doc.id === articleLink.id
      );

      // Return the related document along with the card_style, card_bg_color, and card_text_color fields
      return relatedDoc ? { ...relatedDoc, card_style: item.card_style, card_bg_color: item.card_bg_color, card_text_color: item.card_text_color } : null;
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
      <div
        v-for="(article, index) in relatedArticles"
        :key="index"
        class="article"
      >
        <div
          class="article__image"
          :class="{
            'mask mask--blob-01': article.card_style === 'Blob Mask 1',
            'mask mask--blob-02': article.card_style === 'Blob Mask 2',
            'mask mask--quote': article.card_style === 'Featured Quote',
            'mask--white': article.card_bg_color === 'White',
            'mask--black': article.card_bg_color === 'Black',
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
            "{{ article.data.featured_quote }}"
          </span>
        </div>
        <div
          :id="`article__details--${index}`"
          class="article__details"
        >
          <span
            class="tag"
          >
            {{ article.tags[0] }}
          </span>

          <p
            class="title h3"
          >
            {{ article.data.title }}
          </p>
          
          <PrismicLink
            :field="article"
            class="link"
            :aria-labelledby="`article__details--${index}`"
          >
            read more <span class="sr-only">about {{ article.data.title }}</span>
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import url('/assets/scss/slices/_related-articles.scss');
</style>
