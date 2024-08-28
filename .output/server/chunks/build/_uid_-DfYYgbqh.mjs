import { _ as _export_sfc, b as usePrismic, d as useRoute, S as SliceZone, h as PrismicLink } from './server.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-DVe67KAQ.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { c as components } from './index-Dqi1DyiM.mjs';
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
      article.value = await prismic.client.getByUID("blog_article", route.params.uid);
    };
    [__temp, __restore] = withAsyncContext(() => fetchArticleData()), await __temp, __restore();
    useArticleSeo(article);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_SliceZone = SliceZone;
      const _component_PrismicLink = PrismicLink;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-20ba1e38>`);
      _push(ssrRenderComponent(_component_SliceZone, {
        id: "main",
        wrapper: "main",
        class: "page--article",
        slices: (_a2 = (_a = article.value) == null ? void 0 : _a.data.slices) != null ? _a2 : [],
        components: unref(components)
      }, null, _parent));
      _push(`<nav class="article-navigation" data-v-20ba1e38>`);
      if (prevArticle.value) {
        _push(ssrRenderComponent(_component_PrismicLink, {
          field: prevArticle.value,
          class: "prev-article link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b2, _c2, _d2;
            var _a22, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
            if (_push2) {
              _push2(`<div class="image" data-v-20ba1e38${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: (_a3 = (_c = (_b = (_a22 = prevArticle.value) == null ? void 0 : _a22.data) == null ? void 0 : _b.featured_image) == null ? void 0 : _c.url) != null ? _a3 : "",
                alt: (_b2 = (_f = (_e = (_d = prevArticle.value) == null ? void 0 : _d.data) == null ? void 0 : _e.featured_image) == null ? void 0 : _f.alt) != null ? _b2 : ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="details" data-v-20ba1e38${_scopeId}><span class="headline" data-v-20ba1e38${_scopeId}>Previous:</span><span class="title" data-v-20ba1e38${_scopeId}>${ssrInterpolate((_h = (_g = prevArticle.value) == null ? void 0 : _g.data) == null ? void 0 : _h.title)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "image" }, [
                  createVNode(_component_NuxtImg, {
                    src: (_c2 = (_k = (_j = (_i = prevArticle.value) == null ? void 0 : _i.data) == null ? void 0 : _j.featured_image) == null ? void 0 : _k.url) != null ? _c2 : "",
                    alt: (_d2 = (_n = (_m = (_l = prevArticle.value) == null ? void 0 : _l.data) == null ? void 0 : _m.featured_image) == null ? void 0 : _n.alt) != null ? _d2 : ""
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "details" }, [
                  createVNode("span", { class: "headline" }, "Previous:"),
                  createVNode("span", { class: "title" }, toDisplayString((_p = (_o = prevArticle.value) == null ? void 0 : _o.data) == null ? void 0 : _p.title), 1)
                ])
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
          class: "next-article link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b2, _c2, _d2;
            var _a22, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
            if (_push2) {
              _push2(`<div class="image" data-v-20ba1e38${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: (_a3 = (_c = (_b = (_a22 = nextArticle.value) == null ? void 0 : _a22.data) == null ? void 0 : _b.featured_image) == null ? void 0 : _c.url) != null ? _a3 : "",
                alt: (_b2 = (_f = (_e = (_d = nextArticle.value) == null ? void 0 : _d.data) == null ? void 0 : _e.featured_image) == null ? void 0 : _f.alt) != null ? _b2 : ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="details" data-v-20ba1e38${_scopeId}><span class="headline" data-v-20ba1e38${_scopeId}>Next:</span><span class="title" data-v-20ba1e38${_scopeId}>${ssrInterpolate((_h = (_g = nextArticle.value) == null ? void 0 : _g.data) == null ? void 0 : _h.title)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "image" }, [
                  createVNode(_component_NuxtImg, {
                    src: (_c2 = (_k = (_j = (_i = nextArticle.value) == null ? void 0 : _i.data) == null ? void 0 : _j.featured_image) == null ? void 0 : _k.url) != null ? _c2 : "",
                    alt: (_d2 = (_n = (_m = (_l = nextArticle.value) == null ? void 0 : _l.data) == null ? void 0 : _m.featured_image) == null ? void 0 : _n.alt) != null ? _d2 : ""
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "details" }, [
                  createVNode("span", { class: "headline" }, "Next:"),
                  createVNode("span", { class: "title" }, toDisplayString((_p = (_o = nextArticle.value) == null ? void 0 : _o.data) == null ? void 0 : _p.title), 1)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[uid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _uid_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-20ba1e38"]]);

export { _uid_ as default };
//# sourceMappingURL=_uid_-DfYYgbqh.mjs.map
