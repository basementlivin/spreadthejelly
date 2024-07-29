<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.EventPreviewSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const exhibitions = computed(() => {
  return props.slice.items.map(item => item.exhibition).filter(exhibition => isFilled.contentRelationship(exhibition)) as unknown as Content.ExhibitionDocument[];
})
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div
      v-for="(item, index) in slice.primary.events"
      :key="index"
      class="event py-12"
    >
      <pre>
        {{ item }}
      </pre>
    </div>
  </section>
</template>
