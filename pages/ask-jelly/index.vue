<script setup lang="ts">

import { components } from '~/slices'
import { usePrismic } from '@prismicio/vue'
import AskJellyForm from '@/components/AskJellyForm.vue'

const prismic = usePrismic()
const route = useRoute()

const { data: page, error } = useAsyncData('askJellyPage', () => 
  prismic.client.getSingle('ask_jelly'))

if (error.value) {
  console.error('Error value from useAsyncData:', error.value)
}

const { data: latestArticles } = useAsyncData(`ask-jelly/${route.params.uid}`, () =>
  prismic.client.getAllByType("ask_jelly_article", {
    limit: 6,
    orderings: { field: 'publication_date', direction: 'desc' }
  }))

useSeoMeta({
  title: page.value?.data.meta_title ?? undefined,
  description: page.value?.data.meta_description ?? undefined,
  ogImage: prismic.asImageSrc(page.value?.data.meta_image) ?? undefined,
})
</script>

<template>
  <main 
    id="main"
    class="page--ask-jelly"
  >
    <section class="ask-jelly__intro wrapper wrapper--page-width">
      <div class="content">
        <h1 class="headline">
          {{ page?.data.headline }}
        </h1>
        <PrismicRichText
          :field="page?.data.copy"
          class="copy"
        />
      </div>
      <div class="form">
        <AskJellyForm />
      </div>
    </section>

    <SliceZone
      :slices="page?.data.slices ?? []"
      :components="components"
    />

    <section
      v-if="latestArticles"
      class="ask-jelly__articles wrapper wrapper--wide"
    >
      <h2 class="headline">
        Jelly answers
      </h2>

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
          <span class="asked-by">
            From {{ article.data.asked_by }}
          </span>
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
  @import '@/assets/scss/pages/_ask-jelly.scss';
</style>