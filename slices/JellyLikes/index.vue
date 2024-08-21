<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.JellyLikesSlice>([
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
    class="jelly-likes wrapper wrapper--wide"
  >
    <div class="jelly-likes__inner">
      <span class="headline">{{ slice.primary.who_likes }}</span>
      <div class="products">
        <div
          v-for="(product, index) in slice.primary.products"
          :key="index"
          class="product"
        >
          <div class="product__image">
            <NuxtImg
              :src="product.product_image.url ?? ''"
              :alt="product.product_image.alt ?? ''"
              loading="lazy"
              placeholder
            />
          </div>
          <div class="product__details">
            <p class="name">
              {{ product.product_name }}
            </p>
            <p class="manufacturer">
              {{ product.product_manufacturer }}
            </p>
            <p class="info">
              {{ product.product_info }}
            </p>
            <p class="price">
              ${{ product.product_price }}
            </p>
            <PrismicLink
              :field="product.product_link"
              class="purchase-link"
            >
              BUY
            </PrismicLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_jelly-likes.scss';
</style>