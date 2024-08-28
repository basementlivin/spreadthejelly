import { _ as _sfc_main$1 } from './NuxtImg-BenuarRB.mjs';
import { _ as _export_sfc, l as getSliceComponentProps, h as PrismicLink } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { isFilled } from '@prismicio/client';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_PrismicLink = PrismicLink;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "jelly-likes wrapper wrapper--wide"
      }, _attrs))} data-v-3d6b4df7><div class="jelly-likes__inner" data-v-3d6b4df7>`);
      if (unref(isFilled).keyText(_ctx.slice.primary.who_likes)) {
        _push(`<span class="headline" data-v-3d6b4df7>${ssrInterpolate(_ctx.slice.primary.who_likes)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="products" data-v-3d6b4df7><!--[-->`);
      ssrRenderList(_ctx.slice.primary.products, (product, index2) => {
        var _a, _b;
        _push(`<div class="product" data-v-3d6b4df7>`);
        if (unref(isFilled).image(product.product_image)) {
          _push(`<div class="product__image" data-v-3d6b4df7>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: (_a = product.product_image.url) != null ? _a : "",
            alt: (_b = product.product_image.alt) != null ? _b : "",
            loading: "lazy",
            placeholder: ""
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isFilled).keyText(product.product_name) && unref(isFilled).keyText(product.product_manufacturer) && unref(isFilled).keyText(product.product_info) && unref(isFilled).number(product.product_price) && unref(isFilled).link(product.product_link)) {
          _push(`<div class="product__details" data-v-3d6b4df7><p class="name" data-v-3d6b4df7>${ssrInterpolate(product.product_name)}</p><p class="manufacturer" data-v-3d6b4df7>${ssrInterpolate(product.product_manufacturer)}</p><p class="info" data-v-3d6b4df7>${ssrInterpolate(product.product_info)}</p><p class="price" data-v-3d6b4df7> $${ssrInterpolate(product.product_price)}</p>`);
          _push(ssrRenderComponent(_component_PrismicLink, {
            field: product.product_link,
            class: "purchase-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` BUY `);
              } else {
                return [
                  createTextVNode(" BUY ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/JellyLikes/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d6b4df7"]]);

export { index as default };
//# sourceMappingURL=index-CYckqwy6.mjs.map
