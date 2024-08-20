<script setup lang="ts">
import { components } from '~/slices'
import { usePrismic } from '@prismicio/vue'
import { usePageSeo } from '~/composables/usePageSeo'

const prismic = usePrismic()
const route = useRoute()

const { data: page, error } = useAsyncData('blogPage', () => 
  prismic.client.getSingle('blog'))

if (error.value) {
  console.error('Error value from useAsyncData:', error.value)
}

const { data: latestArticles } = useAsyncData(`articles/${route.params.uid}`, () =>
  prismic.client.getAllByType("blog_article", {
    limit: 6,
    orderings: { field: 'publication_date', direction: 'desc' }
  }))

usePageSeo(page)
</script>

<template>
  <main 
    id="main"
    class="page--blog"
  >
    <SliceZone
      :slices="page?.data.slices ?? []"
      :components="components"
    />

    <section
      v-if="latestArticles"
      class="blog__articles wrapper wrapper--wide"
    >
      <div class="articles__container">
        <div
          v-for="article in latestArticles"
          :key="article.id"
          class="article"
        >
          <NuxtImg
            :src="article.data.featured_image.url ?? ''"
            :alt="article.data.featured_image.alt ?? ''"
            class="image"
          />
          <p class="headline h4">
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
    </section>
  </main>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/pages/_blog.scss';
</style>