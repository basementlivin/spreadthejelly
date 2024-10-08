<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { prismicImageSettings } from '@/utils/prismicImageSettings';

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
          <PrismicImage
            v-if="item.image"
            :field="item.image"
            :alt="item.image.alt || item.name"
            :widths="prismicImageSettings.presets.default.widths"
            :imgix-params="prismicImageSettings.presets.default.imgixParams"
            loading="lazy"
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