import { _ as _export_sfc, l as getSliceComponentProps } from './server.mjs';
import { useSSRContext, defineComponent, computed, unref, mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
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
    const { slice } = props;
    const headlineClass = computed(() => {
      const style = slice.primary.headline_style;
      const classMap = {
        Large: "headline--large",
        Medium: "headline--medium",
        Small: "headline--small",
        Hidden: "headline--hidden"
      };
      return classMap[style] || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFilled).keyText(unref(slice).primary.headline)) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: "headline wrapper",
          "data-scroll-section": ""
        }, _attrs))} data-v-509dae4c>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(slice).primary.headline_level), {
          "data-slice-type": unref(slice).slice_type,
          "data-slice-variation": unref(slice).variation,
          class: headlineClass.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(slice).primary.headline)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(slice).primary.headline), 1)
              ];
            }
          }),
          _: 1
        }), _parent);
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Headline/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-509dae4c"]]);

export { index as default };
//# sourceMappingURL=index-WeY1KHNR.mjs.map
