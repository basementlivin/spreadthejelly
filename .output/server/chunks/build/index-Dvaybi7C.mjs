import { _ as _export_sfc, b as usePrismic, e as useAsyncData, S as SliceZone, h as PrismicLink } from './server.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-DVe67KAQ.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const initialPageSize = 9;
const subsequentPageSize = 6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const prismic = usePrismic();
    const articles = ref([]);
    const page = ref(1);
    const hasMore = ref(true);
    const loading = ref(false);
    const { data: pageData, error } = useAsyncData("blogPage", () => prismic.client.getSingle("blog"));
    if (error.value) {
      console.error("Error value from useAsyncData:", error.value);
    }
    const loadArticles = async (initialLoad = false) => {
      if (loading.value || !hasMore.value)
        return;
      loading.value = true;
      const pageSize = initialLoad ? initialPageSize : subsequentPageSize;
      const newArticles = await prismic.client.getByType("blog_article", {
        pageSize,
        // Number of articles per page (based on initial or subsequent load)
        page: page.value,
        // Page number for pagination
        orderings: {
          field: "my.blog_article.publication_date",
          direction: "desc"
        }
      });
      articles.value.push(...newArticles.results);
      if (newArticles.results_size < pageSize) {
        hasMore.value = false;
      }
      page.value++;
      loading.value = false;
    };
    [__temp, __restore] = withAsyncContext(() => loadArticles(true)), await __temp, __restore();
    usePageSeo(pageData);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c;
      const _component_SliceZone = SliceZone;
      const _component_NuxtImg = __nuxt_component_1;
      const _component_PrismicLink = PrismicLink;
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "page--blog"
      }, _attrs))} data-v-75faae77>`);
      _push(ssrRenderComponent(_component_SliceZone, {
        slices: (_a2 = (_a = unref(pageData)) == null ? void 0 : _a.data.slices) != null ? _a2 : [],
        components: unref(components)
      }, null, _parent));
      if (articles.value.length) {
        _push(`<section class="blog__articles wrapper wrapper--fullscreen" data-v-75faae77><div class="articles__container" data-v-75faae77><!--[-->`);
        ssrRenderList(articles.value, (article) => {
          var _a3, _b2;
          _push(`<div class="article" data-v-75faae77><div class="article__image" data-v-75faae77>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: (_a3 = article.data.featured_image.url) != null ? _a3 : "",
            alt: (_b2 = article.data.featured_image.alt) != null ? _b2 : ""
          }, null, _parent));
          _push(`</div><div class="article__details" data-v-75faae77><span class="tag" data-v-75faae77>${ssrInterpolate(article.tags[0])}</span><p class="headline" data-v-75faae77>${ssrInterpolate(article.data.title)}</p>`);
          _push(ssrRenderComponent(_component_PrismicLink, {
            field: article,
            class: "link"
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
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
        if (hasMore.value && !loading.value) {
          _push(`<span class="articles__load-more link" aria-label="Load more articles" data-v-75faae77>${ssrInterpolate(((_b = unref(pageData)) == null ? void 0 : _b.data.load_more_button_text) ? unref(pageData).data.load_more_button_text : "Load More")}</span>`);
        } else if (!hasMore.value) {
          _push(`<p class="articles__no-more" data-v-75faae77>${ssrInterpolate(((_c = unref(pageData)) == null ? void 0 : _c.data.no_more_articles_message) ? unref(pageData).data.no_more_articles_message : "You made it to the end!")}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-75faae77"]]);

export { index as default };
//# sourceMappingURL=index-Dvaybi7C.mjs.map
