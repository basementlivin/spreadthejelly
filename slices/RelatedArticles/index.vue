<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { computed } from "vue";
import type { BlogArticleDocument } from '~/prismicio-types.d.ts';
import { partialWidthSizes } from '@/utils/imageSizes';

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

      // Return the related document along with the image_mask field
      return relatedDoc ? { ...relatedDoc, image_mask: item.image_mask, image_mask_color: item.image_mask_color } : null;
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
            'mask mask--blob-01': article.image_mask === 'Blob 1',
            'mask mask--blob-02': article.image_mask === 'Blob 2',
            'mask--white': article.image_mask_color === 'White',
            'mask--black': article.image_mask_color === 'Black',
          }"
        >
          <NuxtImg
            :src="article.data.featured_image.url ?? ''"
            :alt="article.data.featured_image.alt ?? ''"
            :sizes="partialWidthSizes"
            :placeholder="[50, 25, 75, 5]"
            preset="default"
          />
        </div>
        <div class="article__details">
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
  @import url('/assets/scss/slices/_related-articles.scss');
</style>
