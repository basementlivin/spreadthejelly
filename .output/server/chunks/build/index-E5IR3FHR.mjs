import { _ as _sfc_main$1 } from './NuxtImg-BenuarRB.mjs';
import { _ as _export_sfc, l as getSliceComponentProps, P as PrismicRichText } from './server.mjs';
import { useSSRContext, defineComponent, unref, mergeProps } from 'vue';
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
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtImg = _sfc_main$1;
      const _component_PrismicRichText = PrismicRichText;
      if (unref(isFilled).image(_ctx.slice.primary.shape) && unref(isFilled).richText(_ctx.slice.primary.question) && unref(isFilled).keyText(_ctx.slice.primary.asked_by)) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          "data-slice-type": _ctx.slice.slice_type,
          "data-slice-variation": _ctx.slice.variation,
          class: "question wrapper wrapper--wide",
          "data-scroll-section": ""
        }, _attrs))} data-v-609b061b><div class="question__inner" data-v-609b061b><div class="image" data-v-609b061b>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: (_a = _ctx.slice.primary.shape.url) != null ? _a : "",
          alt: (_b = _ctx.slice.primary.shape.alt) != null ? _b : ""
        }, null, _parent));
        _push(`</div><div class="content" data-v-609b061b>`);
        _push(ssrRenderComponent(_component_PrismicRichText, {
          field: _ctx.slice.primary.question,
          class: "content__question"
        }, null, _parent));
        _push(`<span class="content__asker" data-v-609b061b> from ${ssrInterpolate(_ctx.slice.primary.asked_by)}</span></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Question/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-609b061b"]]);

export { index as default };
//# sourceMappingURL=index-E5IR3FHR.mjs.map
