// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  dividing_line: defineAsyncComponent(() => import("./DividingLine/index.vue")),
  headline: defineAsyncComponent(() => import("./Headline/index.vue")),
  hero: defineAsyncComponent(() => import("./Hero/index.vue")),
  image: defineAsyncComponent(() => import("./Image/index.vue")),
  image_slider: defineAsyncComponent(() => import("./ImageSlider/index.vue")),
  jelly_likes: defineAsyncComponent(() => import("./JellyLikes/index.vue")),
  question: defineAsyncComponent(() => import("./Question/index.vue")),
  related_answers: defineAsyncComponent(
    () => import("./RelatedAnswers/index.vue"),
  ),
  subheadline: defineAsyncComponent(() => import("./Subheadline/index.vue")),
  team_members: defineAsyncComponent(() => import("./TeamMembers/index.vue")),
  testimonials: defineAsyncComponent(() => import("./Testimonials/index.vue")),
  text: defineAsyncComponent(() => import("./Copy/index.vue")),
});
