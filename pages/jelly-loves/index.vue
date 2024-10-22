<script setup lang="ts">
import { ref } from 'vue'
import { components } from '~/slices'
import { usePrismic } from '@prismicio/vue'
import { usePageSeo } from '~/composables/usePageSeo'
import type { JellyLovesArticleDocument } from '~/prismicio-types.d.ts'
import { prismicImageSettings } from '@/utils/prismicImageSettings'

const prismic = usePrismic();
const route = useRoute()

// State for loaded articles and pagination
const articles = ref<JellyLovesArticleDocument[]>([]);
const page = ref(1);
const hasMore = ref(true);
const loading = ref(false);

// Initial number of articles to load
const initialPageSize = 6;
// Number of articles to load on "Load More"
const subsequentPageSize = 6;

// Fetch the initial page content
const { data: pageData, error } = useAsyncData('jellyLovesPage', () => 
  prismic.client.getSingle('jelly_loves'));

if (error.value) {
  console.error('Error value from useAsyncData:', error.value);
}

// Function to load articles (initial and on "Load More")
const loadArticles = async (initialLoad = false) => {
  if (loading.value || !hasMore.value) return;
  loading.value = true;

  const pageSize = initialLoad ? initialPageSize : subsequentPageSize;

  const newArticles = await prismic.client.getByType<JellyLovesArticleDocument>("jelly_loves_article", {
    pageSize, 
    page: page.value, 
    orderings: { 
      field: 'my.jelly_loves_article.publication_date', 
      direction: 'desc'
    }
  });

  // Add the new articles to the existing list
  articles.value.push(...newArticles.results);

  // If fewer articles than expected are returned, set hasMore to false
  if (newArticles.results_size < pageSize) {
    hasMore.value = false;
  }

  // Increment the page number for the next load
  page.value++;
  loading.value = false;
};

// Wrapper function for "Load More" button click
const handleLoadMoreClick = () => {
  loadArticles();
};

// Fetch the initial articles when the page loads
await loadArticles(true);

usePageSeo(pageData);
</script>

<template>
  <div :key="route.fullPath">
    <main 
      id="main"
      class="page--jelly-loves"
    >
      <SliceZone
        :slices="pageData?.data.slices ?? []"
        :components="components"
      />
  
      <section
        v-if="articles.length"
        class="jelly-loves__articles wrapper wrapper--fullscreen"
      >
        <div class="articles__container">
          <PrismicLink
            v-for="article in articles"
            :key="article.id"
            :field="article"
            class="article"
            :aria-label="`Read ${article.data.title} in its entirety`"
          >
            <div class="article__image">
              <PrismicImage
                :field="article.data.featured_image"
                :alt="article.data.featured_image.alt || 'No image description provided'"
                :widths="prismicImageSettings.presets.default.widths"
                :imgix-params="prismicImageSettings.presets.default.imgixParams"
                loading="lazy"
              />
            </div>
  
            <div class="article__details">
              <span class="tag">
                {{ article.tags[0] }}
              </span>
    
              <p class="headline">
                {{ article.data.title }}
              </p>
    
              <span class="link">
                read more
              </span>
            </div>
          </PrismicLink>
        </div>
  
        <span
          v-if="hasMore && !loading"
          class="articles__load-more link"
          aria-label="Load more articles"
          @click="handleLoadMoreClick"
        >
          {{ pageData?.data.load_more_button_text ? pageData.data.load_more_button_text : 'Load More' }}
        </span>
        <p
          v-else-if="!hasMore"
          class="articles__no-more"
        >
          {{ pageData?.data.no_more_articles_message ? pageData.data.no_more_articles_message : 'You made it to the end!' }}
        </p>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/pages/_jelly-loves.scss';
</style>
