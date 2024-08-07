<script setup lang="ts">
import { computed } from "vue";
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.HeadlineSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const { slice } = props;

const headlineClass = computed(() => {
  const style = slice.primary.headline_style;
  const classMap = {
    Large: 'headline--large',
    Medium: 'headline--medium',
    Small: 'headline--small',
    Hidden: 'headline--hidden',
  };
  return classMap[style] || '';
});
</script>

<template>
  <component
    :is="slice.primary.headline_level"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="headline wrapper"
    :class="headlineClass"
  >
    {{ slice.primary.headline }}
  </component>
</template>
