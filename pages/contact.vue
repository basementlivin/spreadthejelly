<script setup lang="ts">
import { ref } from 'vue'
import { usePrismic } from '@prismicio/vue'

const prismic = usePrismic()

const { data: page, error } = useAsyncData('contactPage', () => 
  prismic.client.getSingle('contact'))

if (error.value) {
  console.error('Error value from useAsyncData:', error.value)
}

useSeoMeta({
  title: page.value?.data.meta_title ?? undefined,
  description: page.value?.data.meta_description ?? undefined,
  ogImage: prismic.asImageSrc(page.value?.data.meta_image) ?? undefined,
})

const tooltipText = ref('')

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    tooltipText.value = 'Email copied!'
    setTimeout(() => {
      tooltipText.value = 'Click to copy email.'
    }, 2750)
  }).catch(err => {
    console.error('Failed to copy text: ', err)
  })
}

const showHoverText = () => {
  tooltipText.value = 'Click to copy email.'
}

const hideHoverText = () => {
  tooltipText.value = ''
}

const handleKeydown = (event: KeyboardEvent, text: string) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    copyToClipboard(text)
  }
}
</script>

<template>
  <main 
    id="main"
    class="page--contact"
  >
    <section class="contact__intro wrapper wrapper--narrow">
      <h1 class="headline">
        {{ page?.data.headline }}
      </h1>
      <PrismicRichText
        :field="page?.data.copy"
        class="copy"
      />
      <span
        class="link tooltip-container"
        aria-label="Copy email to clipboard."
        tabindex="0"
        @click.prevent="copyToClipboard(page?.data.contact_link[0]?.email ?? '')"
        @mouseover="showHoverText"
        @mouseleave="hideHoverText"
        @focus="showHoverText"
        @blur="hideHoverText"
        @keydown="handleKeydown($event, page?.data.contact_link[0]?.email ?? '')"
      >
        {{ page?.data.contact_link[0]?.link_text }}
        <span
          v-if="tooltipText"
          class="tooltip"
        >
          {{ tooltipText }}
        </span>
      </span>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/pages/_contact.scss';
</style>