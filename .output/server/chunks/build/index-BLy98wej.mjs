import { _ as _export_sfc, l as getSliceComponentProps } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
      if (_ctx.slice.primary.testimonials.length > 0) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          "data-slice-type": _ctx.slice.slice_type,
          "data-slice-variation": _ctx.slice.variation,
          class: "testimonials wrapper wrapper--fullscreen"
        }, _attrs))} data-v-43970c37><div class="testimonials__inner wrapper wrapper--wide" data-v-43970c37><!--[-->`);
        ssrRenderList(_ctx.slice.primary.testimonials, (testimonial, index2) => {
          _push(`<div class="testimonial" data-v-43970c37>`);
          if (unref(isFilled).keyText(testimonial.testimonial)) {
            _push(`<p class="quote" data-v-43970c37> &quot;${ssrInterpolate(testimonial.testimonial)}&quot; </p>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(isFilled).keyText(testimonial.credit)) {
            _push(`<span class="credit" data-v-43970c37>${ssrInterpolate(testimonial.credit)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Testimonials/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43970c37"]]);

export { index as default };
//# sourceMappingURL=index-BLy98wej.mjs.map
