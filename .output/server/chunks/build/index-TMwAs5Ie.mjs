import { _ as _export_sfc, l as getSliceComponentProps, P as PrismicRichText } from './server.mjs';
import { _ as _sfc_main$1 } from './NuxtImg-BenuarRB.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    const props = __props;
    function isCopyWithPullQuote(slice) {
      return slice.variation === "copyWithPullQuote";
    }
    const pullQuoteClass = computed(() => {
      if (isCopyWithPullQuote(props.slice)) {
        const position = props.slice.primary.pull_quote_position;
        return position === "Quote Right" ? "quote--right" : "quote--left";
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_PrismicRichText = PrismicRichText;
      const _component_NuxtImg = _sfc_main$1;
      if (_ctx.slice.variation === "default") {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: "copy wrapper wrapper--narrow",
          "data-scroll-section": ""
        }, _attrs))} data-v-01056182>`);
        if (unref(isFilled).richText(_ctx.slice.primary.copy)) {
          _push(ssrRenderComponent(_component_PrismicRichText, {
            field: _ctx.slice.primary.copy,
            class: "copy__inner"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
      } else if (_ctx.slice.variation === "copyWithImage") {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: "copy-with-image wrapper wrapper--wide",
          "data-scroll-section": ""
        }, _attrs))} data-v-01056182><figure class="image" data-v-01056182>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: (_a = _ctx.slice.primary.image.url) != null ? _a : "",
          alt: (_b = _ctx.slice.primary.image.alt) != null ? _b : "",
          loading: "lazy",
          placeholder: ""
        }, null, _parent));
        if (unref(isFilled).keyText(_ctx.slice.primary.image_caption)) {
          _push(`<figcaption class="image__caption" data-v-01056182>${ssrInterpolate(_ctx.slice.primary.image_caption)}</figcaption>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</figure>`);
        if (unref(isFilled).richText(_ctx.slice.primary.copy)) {
          _push(`<div class="copy" data-v-01056182>`);
          _push(ssrRenderComponent(_component_PrismicRichText, {
            field: _ctx.slice.primary.copy
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
      } else if (_ctx.slice.variation === "copyWithPullQuote") {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: ["copy-with-pull-quote", pullQuoteClass.value, "wrapper wrapper--wide"],
          "data-scroll-section": ""
        }, _attrs))} data-v-01056182>`);
        if (unref(isFilled).richText(_ctx.slice.primary.copy)) {
          _push(`<div class="copy" data-v-01056182>`);
          _push(ssrRenderComponent(_component_PrismicRichText, {
            field: _ctx.slice.primary.copy
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="pull-quote" data-v-01056182>`);
        if (unref(isFilled).keyText(_ctx.slice.primary.pull_quote)) {
          _push(`<blockquote class="quote" data-v-01056182>${ssrInterpolate(_ctx.slice.primary.pull_quote)}</blockquote>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Copy/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-01056182"]]);

export { index as default };
//# sourceMappingURL=index-TMwAs5Ie.mjs.map
