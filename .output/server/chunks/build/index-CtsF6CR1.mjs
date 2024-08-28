import { _ as __nuxt_component_1 } from './nuxt-img-CPEo5JM7.mjs';
import { _ as _export_sfc, l as getSliceComponentProps } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
      var _a, _b, _c, _d, _e, _f;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: [
          "image",
          "image--" + _ctx.slice.variation,
          "wrapper",
          {
            "wrapper--fullscreen": _ctx.slice.variation === "default",
            "wrapper--wide": _ctx.slice.variation === "twoColumn"
          }
        ],
        "data-scroll-section": ""
      }, _attrs))} data-v-1269663c>`);
      if (_ctx.slice.variation === "default" && unref(isFilled).image(_ctx.slice.primary.image)) {
        _push(`<div class="image__container full" data-v-1269663c>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: (_a = _ctx.slice.primary.image.url) != null ? _a : "",
          alt: (_b = _ctx.slice.primary.image.alt) != null ? _b : "",
          sizes: "xs:90vw sm:90vw md:90vw lg:90vw xl:90vw xxl:90vw",
          loading: "lazy",
          placeholder: ""
        }, null, _parent));
        if (_ctx.slice.variation === "default" && unref(isFilled).image(_ctx.slice.primary.image)) {
          _push(`<svg class="mask" viewBox="0 0 1543.25 38.41" data-v-1269663c><path fill="currentColor" fill-opacity="1" d="M.12 38.28h1543l-.39-30.48s-508.61 54.48-743.61 11.48-799-.18-799-.18v19.18Z" data-v-1269663c></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.slice.variation === "twoColumn" && unref(isFilled).image(_ctx.slice.primary.image_left) && unref(isFilled).image(_ctx.slice.primary.image_right)) {
        _push(`<div class="image__container columns" data-v-1269663c>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: (_c = _ctx.slice.primary.image_left.url) != null ? _c : "",
          alt: (_d = _ctx.slice.primary.image_left.alt) != null ? _d : "",
          sizes: "xs:90vw sm:90vw md:90vw lg:50vw xl:50vw xxl:50vw",
          loading: "lazy",
          placeholder: ""
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: (_e = _ctx.slice.primary.image_right.url) != null ? _e : "",
          alt: (_f = _ctx.slice.primary.image_right.alt) != null ? _f : "",
          sizes: "xs:90vw sm:90vw md:90vw lg:50vw xl:50vw xxl:50vw",
          loading: "lazy",
          placeholder: ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Image/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1269663c"]]);

export { index as default };
//# sourceMappingURL=index-CtsF6CR1.mjs.map
