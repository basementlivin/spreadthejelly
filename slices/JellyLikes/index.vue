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
        <PrismicLink
          v-for="(product, index) in slice.primary.products"
          :key="index"
          :field="product.product_link"
          class="product"
          :aria-label="`Visit the ${product.product_name} product page to learn more and purchase`"
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
          <div class="product__details">
            <p 
              v-if="isFilled.keyText(product.product_name)"
              class="name"
            >
              {{ product.product_name }}
            </p>

            <p
              v-if="isFilled.keyText(product.product_manufacturer)" 
              class="manufacturer"
            >
              {{ product.product_manufacturer }}
            </p>

            <p
              v-if="isFilled.keyText(product.product_info)"
              class="info"
            >
              {{ product.product_info }}
            </p>

            <p
              v-if="isFilled.number(product.product_price)"
              class="price"
            >
              ${{ product.product_price }}
            </p>

            <span class="purchase-link">BUY</span>
          </div>
        </PrismicLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/slices/_jelly-likes.scss';
</style>
