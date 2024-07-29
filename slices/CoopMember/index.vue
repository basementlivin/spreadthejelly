<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CoopMemberSlice>([
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
    class="coop-members bg-drywall p-12"
  >
    <div class="coop-members__inner flex flex-col gap-12">
      <div 
        v-for="(item, index) in slice.primary.member" 
        :key="index"
        class="member min-w-full flex flex-col gap-8 laptop:even:flex-row-reverse laptop:odd:flex-row"
      >
        <div class="member__image aspect-square border-void border-2 rounded-3xl overflow-hidden laptop:w-1/2">
          <NuxtImg
            :src="item.member_photo.url" 
            :alt="item.member_photo.alt || item.member_name"
            class="image object-cover w-full h-full"
          />
        </div>
    
        <div class="member__info flex flex-col justify-center laptop:w-1/2">
          <p class="role font-sans-regular text-xl">
            {{ item.member_role }}
          </p>
          <div class="name">
            <h3 class="first-last font-sans-light text-4xl">
              {{ item.member_name }}
              <span class="pronouns font-condensed text-3xl">
                ({{ item.member_pronouns }})
              </span>
            </h3>
          </div>
          
          <PrismicRichText
            :field="item.member_bio"
            class="bio font-sans-light py-6 flex flex-col gap-2"
          />

          <PrismicLink
            :field="item.member_link"
            class="link btn-red tracking-wider"
          >
            {{ item.member_link_text }}
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/styles/slices/coop-members.scss';
</style>