import { _ as _sfc_main$1 } from './NuxtImg-BenuarRB.mjs';
import { _ as _export_sfc, l as getSliceComponentProps, b as usePrismic, h as PrismicLink } from './server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const prismic = usePrismic();
    const relatedArticlesData = ([__temp, __restore] = withAsyncContext(() => prismic.client.getByType("blog_article", {
      fetchLinks: [
        "blog_article.title",
        "blog_article.featured_image"
      ]
    })), __temp = await __temp, __restore(), __temp);
    const relatedArticles = computed(() => {
      return props.slice.primary.articles.filter((item) => isFilled.contentRelationship(item.article_link)).map((item) => {
        const articleLink = item.article_link;
        const relatedDoc = relatedArticlesData.results.find(
          (doc) => isFilled.contentRelationship(articleLink) && doc.id === articleLink.id
        );
        return relatedDoc ? { ...relatedDoc, image_mask: item.image_mask, image_mask_color: item.image_mask_color } : null;
      }).filter((article) => article !== null);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_PrismicLink = PrismicLink;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "related-articles wrapper wrapper--fullscreen"
      }, _attrs))} data-v-0fbf7800>`);
      if (unref(isFilled).keyText(_ctx.slice.primary.headline)) {
        _push(`<span class="related-articles__headline" data-v-0fbf7800>${ssrInterpolate(_ctx.slice.primary.headline)}</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isFilled).group(_ctx.slice.primary.articles)) {
        _push(`<div class="related-articles__inner" data-v-0fbf7800><!--[-->`);
        ssrRenderList(relatedArticles.value, (article, index2) => {
          var _a, _b;
          _push(`<div class="article" data-v-0fbf7800><div class="${ssrRenderClass([{
            "mask mask--blob-01": article.image_mask === "Blob 1",
            "mask mask--blob-02": article.image_mask === "Blob 2",
            "mask--white": article.image_mask_color === "White",
            "mask--black": article.image_mask_color === "Black"
          }, "article__image"])}" data-v-0fbf7800>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: (_a = article.data.featured_image.url) != null ? _a : "",
            alt: (_b = article.data.featured_image.alt) != null ? _b : ""
          }, null, _parent));
          _push(`</div><div class="article__details" data-v-0fbf7800><span class="tag" data-v-0fbf7800>${ssrInterpolate(article.tags[0])}</span><p class="title h3" data-v-0fbf7800>${ssrInterpolate(article.data.title)}</p>`);
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
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/RelatedArticles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0fbf7800"]]);

export { index as default };
//# sourceMappingURL=index-BMA3i23P.mjs.map
