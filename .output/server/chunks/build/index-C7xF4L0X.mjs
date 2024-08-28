import { _ as _export_sfc, l as getSliceComponentProps } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
import '@prismicio/client';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    const props = __props;
    const { slice } = props;
    const paddingMap = {
      "16px": "16px",
      "32px": "32px",
      "48px": "48px",
      "64px": "64px"
    };
    const paddingTop = computed(() => {
      return paddingMap[slice.primary.padding_top] || "0px";
    });
    const paddingBottom = computed(() => {
      return paddingMap[slice.primary.padding_bottom] || "0px";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": unref(slice).slice_type,
        "data-slice-variation": unref(slice).variation,
        style: { paddingTop: paddingTop.value, paddingBottom: paddingBottom.value },
        class: "dividing-line",
        "data-scroll-section": ""
      }, _attrs))} data-v-0f5b0655><div class="line" data-v-0f5b0655></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/DividingLine/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f5b0655"]]);

export { index as default };
//# sourceMappingURL=index-C7xF4L0X.mjs.map
