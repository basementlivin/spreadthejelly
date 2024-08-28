import { _ as _export_sfc, l as getSliceComponentProps, h as PrismicLink } from './server.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
      const _component_PrismicLink = PrismicLink;
      if (unref(isFilled).keyText(_ctx.slice.primary.quote) && unref(isFilled).keyText(_ctx.slice.primary.article_title) && unref(isFilled).link(_ctx.slice.primary.article_link)) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          "data-slice-type": _ctx.slice.slice_type,
          "data-slice-variation": _ctx.slice.variation,
          class: "pull-quote wrapper wrapper--wide"
        }, _attrs))} data-v-46f099fd><div class="pull-quote__inner" data-v-46f099fd><blockquote data-v-46f099fd><p class="quote" data-v-46f099fd> &quot;${ssrInterpolate(_ctx.slice.primary.quote)}&quot; </p><cite class="citation" data-v-46f099fd><span class="citation__article-title" data-v-46f099fd> From ${ssrInterpolate(_ctx.slice.primary.article_title)}</span>`);
        _push(ssrRenderComponent(_component_PrismicLink, {
          field: _ctx.slice.primary.article_link,
          class: "citation__article-link link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` read more `);
            } else {
              return [
                createTextVNode(" read more ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</cite></blockquote></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/PullQuote/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46f099fd"]]);

export { index as default };
//# sourceMappingURL=index-CbXIwyop.mjs.map
