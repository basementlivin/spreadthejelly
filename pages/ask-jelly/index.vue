<script setup lang="ts">
import { ref } from 'vue'
import { components } from '~/slices'
import { usePrismic } from '@prismicio/vue'
import { usePageSeo } from '~/composables/usePageSeo'
import AskJellyForm from '@/components/AskJellyForm.vue'
import type { AskJellyArticleDocument } from '~/prismicio-types.d.ts'
import { prismicImageSettings } from '@/utils/prismicImageSettings';

const prismic = usePrismic()
const route = useRoute()

// State for loaded articles and pagination
const articles = ref<AskJellyArticleDocument[]>([])
const page = ref(1)
const hasMore = ref(true)
const loading = ref(false)

// Fetch the initial page content
const { data: pageData } = useAsyncData('askJellyPage', () => 
  prismic.client.getSingle('ask_jelly'))

// Function to load articles (initial and on "Load More")
const loadArticles = async () => {
  if (loading.value || !hasMore.value) return
  loading.value = true

  const newArticles = await prismic.client.getByType<AskJellyArticleDocument>("ask_jelly_article", {
    pageSize: 15,  // Number of articles per page (or, in this case, per group)
    page: page.value,  // Page number for pagination
    orderings: { 
      field: 'my.ask_jelly_article.publication_date', 
      direction: 'desc'
    }
  })

  // Add the new articles to the existing list
  articles.value.push(...newArticles.results)

  // If fewer articles than expected are returned, set hasMore to false
  if (newArticles.results_size < 6) {
    hasMore.value = false
  }

  // Increment the page number for the next load
  page.value++
  loading.value = false
}

// Fetch the initial articles when the page loads
await loadArticles()

usePageSeo(pageData)
</script>

<template>
  <main 
    id="main"
    class="page--ask-jelly"
  >
    <section class="ask-jelly__intro wrapper wrapper--page-width">
      <div class="content">
        <h1 class="headline">
          {{ pageData?.data.headline }}
        </h1>
        <PrismicRichText
          :field="pageData?.data.copy"
          class="copy"
        />
      </div>
      <div class="form">
        <AskJellyForm />
      </div>
    </section>

    <SliceZone
      :slices="pageData?.data.slices ?? []"
      :components="components"
    />

    <section
      v-if="articles.length"
      class="ask-jelly__articles wrapper wrapper--wide"
    >
      <h2 class="headline">
        Jelly answers:
      </h2>

      <div class="articles__container">
        <PrismicLink
          v-for="article in articles"
          :key="article.id"
          :field="article"
          class="article"
          :aria-label="`Read ${article.data.title} in its entirety`"
        >
          <PrismicImage
            :field="article.data.featured_image"
            :alt="article.data.featured_image.alt || 'No image description provided'"
            :widths="prismicImageSettings.presets.default.widths"
            :imgix-params="prismicImageSettings.presets.default.imgixParams"
            class="image"
          />
          <p class="headline h4">
            {{ article.data.title }}
          </p>
          <span class="asked-by">
            From {{ article.data.asked_by }}
          </span>
          <span class="link">
            read more
          </span>
        </PrismicLink>
      </div>

      <span
        v-if="hasMore && !loading"
        class="articles__load-more link"
        aria-label="Load more Ask Jelly articles"
        @click="loadArticles"
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
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/pages/_ask-jelly.scss';
</style>
