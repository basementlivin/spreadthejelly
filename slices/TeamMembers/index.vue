<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TeamMembersSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="team-members wrapper wrapper--wide"
    data-scroll-section
  >
    <div class="team-members__inner">
      <div
        v-for="(item, index) in slice.primary.team_member"
        :key="index"
        class="team-member"
      >
        <div class="team-member__image">
          <NuxtImg
            :src="item.image.url ?? ''"
            :alt="item.image.alt ?? item.name ?? ''"
            @load="console.log('Image URL:', item.image.url)"
          />
        </div>
        <div class="team-member__content">
          <h3 class="name">
            {{ item.name }}
          </h3>
          <PrismicRichText
            :field="item.bio"
            class="bio" 
          />
          <PrismicLink
            :field="item.social_link"
            class="link link--no-underline"
          >
            {{ item.social_link_text }}
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>
