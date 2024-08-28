import { _ as _export_sfc, b as usePrismic, e as useAsyncData, P as PrismicRichText } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const prismic = usePrismic();
    const { data: page, error } = useAsyncData("contactPage", () => prismic.client.getSingle("contact"));
    if (error.value) {
      console.error("Error value from useAsyncData:", error.value);
    }
    const tooltipText = ref("");
    usePageSeo(page);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_PrismicRichText = PrismicRichText;
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "page--contact"
      }, _attrs))} data-v-193b7609><section class="contact__intro wrapper wrapper--narrow" data-v-193b7609><h1 class="headline" data-v-193b7609>${ssrInterpolate((_a = unref(page)) == null ? void 0 : _a.data.headline)}</h1>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: (_b = unref(page)) == null ? void 0 : _b.data.copy,
        class: "copy"
      }, null, _parent));
      _push(`<span class="link tooltip-container" aria-label="Copy email to clipboard." tabindex="0" data-v-193b7609>${ssrInterpolate((_d = (_c = unref(page)) == null ? void 0 : _c.data.contact_link[0]) == null ? void 0 : _d.link_text)} `);
      if (tooltipText.value) {
        _push(`<span class="tooltip" data-v-193b7609>${ssrInterpolate(tooltipText.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-193b7609"]]);

export { contact as default };
//# sourceMappingURL=contact-Tu8QpeZS.mjs.map
