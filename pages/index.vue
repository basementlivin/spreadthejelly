<script setup lang="ts">
import { components } from '~/slices'
import { usePageSeo } from '~/composables/usePageSeo'
const prismic = usePrismic()

const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('page', 'home', {
    fetchLinks: [
    ]
  })
)
usePageSeo(page)
</script>

<template>
  <div>
    <SliceZone
      id="main"
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>