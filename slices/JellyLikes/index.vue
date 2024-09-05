<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { isFilled } from "@prismicio/client";
import { prismicImageSettings } from '@/utils/prismicImageSettings';

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
      <span
        v-if="isFilled.keyText(slice.primary.who_likes)"
        class="headline"
      >
        {{ slice.primary.who_likes }}
      </span>
      <div class="products">
        <div
          v-for="(product, index) in slice.primary.products"
          :key="index"
          class="product"
        >
          <div 
            v-if="isFilled.image(product.product_image)"
            class="product__image"
          >
            <PrismicImage
              v-if="product.product_image"
              :field="product.product_image"
              :alt="product.product_image.alt || `Product image for ${product.product_name}`"
              :widths="prismicImageSettings.presets.small.widths"
              :imgix-params="prismicImageSettings.presets.small.imgixParams"
            />
          </div>
          <div
            v-if="isFilled.keyText(product.product_name) && isFilled.keyText(product.product_manufacturer) && isFilled.keyText(product.product_info) && isFilled.number(product.product_price) && isFilled.link(product.product_link)"
            class="product__details"
          >
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
              aria-label="Visit product page to learn more and purchase"
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
