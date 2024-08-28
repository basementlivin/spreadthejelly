import { _ as _export_sfc, b as usePrismic, e as useAsyncData, P as PrismicRichText, S as SliceZone } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { c as components } from './index-Dqi1DyiM.mjs';
import { u as usePageSeo } from './usePageSeo-Cw4Ji6ur.mjs';
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
import './useSettings-CLIk7AWv.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about-us",
  __ssrInlineRender: true,
  setup(__props) {
    const prismic = usePrismic();
    const { data: page, error } = useAsyncData("aboutPage", () => prismic.client.getSingle("about"));
    if (error.value) {
      console.error("Error value from useAsyncData:", error.value);
    }
    usePageSeo(page);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c, _d;
      const _component_PrismicRichText = PrismicRichText;
      const _component_SliceZone = SliceZone;
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "page--about"
      }, _attrs))} data-v-af615838><div class="about__intro wrapper wrapper--narrow" data-v-af615838><h1 class="headline" data-v-af615838>${ssrInterpolate((_a = unref(page)) == null ? void 0 : _a.data.headline)}</h1><span class="subheadline" data-v-af615838>${ssrInterpolate((_b = unref(page)) == null ? void 0 : _b.data.subheadline)}</span>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: (_c = unref(page)) == null ? void 0 : _c.data.copy,
        class: "copy"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_SliceZone, {
        slices: (_a2 = (_d = unref(page)) == null ? void 0 : _d.data.slices) != null ? _a2 : [],
        components: unref(components)
      }, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-af615838"]]);

export { aboutUs as default };
//# sourceMappingURL=about-us-CqEVR7Cx.mjs.map
