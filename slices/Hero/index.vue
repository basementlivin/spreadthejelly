<script setup lang="ts">
import { type Content, type HTMLRichTextMapSerializer } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HeroSlice>(
  ['slice', 'index', 'slices', 'context']
));
const prismic = usePrismic()

const serializer: HTMLRichTextMapSerializer = {
  ...prismic.options.richTextSerializer,
  heading1: ({ children }) =>
    /* html */ `<h2 class="">${children}</h2>`,
}
</script>

<template>
  <section class="hero">
    <figure class="">
      <PrismicImage
        v-if="slice.primary.backgroundImage.url"
        :field="slice.primary.backgroundImage"
        class=""
      />
    </figure>
    <div class="">
      <PrismicRichText
        :field="slice.primary.text"
        :html-serializer="serializer"
        class=""
        wrapper="div"
      />
      <PrismicLink
        v-if="slice.primary.buttonLink && ('id' in slice.primary.buttonLink || 'url' in slice.primary.buttonLink)"
        :field="slice.primary.buttonLink"
        class="btn btn--secondary"
      >
        {{ slice.primary.buttonText || "Learn More" }}
      </PrismicLink>
    </div>
  </section>
</template>
