<script setup lang="ts">
import { components } from '~/slices'
import { computed } from 'vue'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

const prismic = usePrismic()
const route = useRoute()

// Fetch the article data
const { data: article } = await useAsyncData(`ask-jelly/${route.params.uid}`, () =>
  prismic.client.getByUID('ask_jelly_article', route.params.uid as string)
)

const settings = useSettings()

</script>

<template>
  <div>
    <SliceZone
      id="main"
      wrapper="main"
      :slices="article?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>