import { _ as _export_sfc, b as usePrismic, d as useRoute, S as SliceZone, h as PrismicLink } from './server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { c as components } from './index-BckJkNAY.mjs';
import { u as useArticleSeo } from './useArticleSeo-CZgyaAgM.mjs';
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
  __name: "[uid]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const prismic = usePrismic();
    const route = useRoute();
    const article = ref(null);
    const nextArticle = ref(null);
    const prevArticle = ref(null);
    const fetchArticleData = async () => {
      article.value = await prismic.client.getByUID("ask_jelly_article", route.params.uid);
    };
    [__temp, __restore] = withAsyncContext(() => fetchArticleData()), await __temp, __restore();
    useArticleSeo(article);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_SliceZone = SliceZone;
      const _component_PrismicLink = PrismicLink;
      _push(`<div${ssrRenderAttrs(mergeProps({
        key: _ctx.$route.fullPath
      }, _attrs))} data-v-926144c4>`);
      _push(ssrRenderComponent(_component_SliceZone, {
        id: "main",
        wrapper: "main",
        class: "page--ask-jelly-article",
        slices: (_a2 = (_a = article.value) == null ? void 0 : _a.data.slices) != null ? _a2 : [],
        components: unref(components)
      }, null, _parent));
      _push(`<nav class="ask-jelly-article-navigation" data-v-926144c4>`);
      if (prevArticle.value) {
        _push(ssrRenderComponent(_component_PrismicLink, {
          field: prevArticle.value,
          class: "prev-article"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a22, _b, _c, _d;
            if (_push2) {
              _push2(`<span class="headline" data-v-926144c4${_scopeId}>Previous:</span><span class="title" data-v-926144c4${_scopeId}>${ssrInterpolate((_b = (_a22 = prevArticle.value) == null ? void 0 : _a22.data) == null ? void 0 : _b.title)}</span>`);
            } else {
              return [
                createVNode("span", { class: "headline" }, "Previous:"),
                createVNode("span", { class: "title" }, toDisplayString((_d = (_c = prevArticle.value) == null ? void 0 : _c.data) == null ? void 0 : _d.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (nextArticle.value) {
        _push(ssrRenderComponent(_component_PrismicLink, {
          field: nextArticle.value,
          class: "next-article"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a22, _b, _c, _d;
            if (_push2) {
              _push2(`<span class="headline" data-v-926144c4${_scopeId}>Next:</span><span class="title" data-v-926144c4${_scopeId}>${ssrInterpolate((_b = (_a22 = nextArticle.value) == null ? void 0 : _a22.data) == null ? void 0 : _b.title)}</span>`);
            } else {
              return [
                createVNode("span", { class: "headline" }, "Next:"),
                createVNode("span", { class: "title" }, toDisplayString((_d = (_c = nextArticle.value) == null ? void 0 : _c.data) == null ? void 0 : _d.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ask-jelly/[uid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _uid_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-926144c4"]]);

export { _uid_ as default };
//# sourceMappingURL=_uid_-DpAz8XfO.mjs.map
