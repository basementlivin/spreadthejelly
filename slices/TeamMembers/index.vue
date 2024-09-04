<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { partialWidthSizes } from '@/utils/imageSizes';

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
    v-if="slice.primary.team_member.length === 3"
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
            v-if="isFilled.image(item.image)"
            :src="item.image.url ?? ''"
            :alt="item.image.alt ?? item.name ?? ''"
            :sizes="partialWidthSizes"
            :placeholder="[50, 25, 75, 5]"
            preset="default"
          />
        </div>
        <div class="team-member__content">
          <h3
            v-if="isFilled.keyText(item.name)"
            class="name"
          >
            {{ item.name }}
          </h3>
          <PrismicRichText
            v-if="isFilled.richText(item.bio)"
            :field="item.bio"
            class="bio" 
          />
          <PrismicLink
            v-if="isFilled.link(item.social_link)"
            :field="item.social_link"
            class="link link--no-underline"
            aria-label="Visit their social media profile"
          >
            {{ item.social_link_text }}
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_team-members.scss';
</style>