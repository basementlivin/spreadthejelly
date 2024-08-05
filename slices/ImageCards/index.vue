<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.ImageCardsSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <Bounded
    as="section"
    class=""
  >
    <div class="">
      <Heading
        v-if="$prismic.asText(slice.primary.heading)"
        class=""
      >
        {{ $prismic.asText(slice.primary.heading) }}
      </Heading>
      <ul class="">
        <li
          v-for="item in slice.items"
          :key="item.image.url ?? undefined"
          class=""
        >
          <div
            v-if="item.image.url"
            class=""
          >
            <PrismicLink
              v-if="item.buttonLink && ('id' in item.buttonLink || 'url' in item.buttonLink)"
              :field="item.buttonLink"
              class=""
              tabindex="-1"
            >
              <PrismicImage :field="item.image" />
            </PrismicLink>
            <PrismicImage
              v-else
              :field="item.image"
            />
          </div>
          <PrismicRichText
            :field="item.text"
            class=""
            wrapper="div"
          />
          <div v-if="item.buttonLink && ('id' in item.buttonLink || 'url' in item.buttonLink)">
            <PrismicLink
              :field="item.buttonLink"
              class=""
            >
              {{ item.buttonText || "More Info" }}
            </PrismicLink>
          </div>
        </li>
      </ul>
    </div>
  </Bounded>
</template>
