import { _ as __nuxt_component_1 } from './nuxt-img-CPEo5JM7.mjs';
import { _ as _export_sfc, l as getSliceComponentProps, b as usePrismic, h as PrismicLink } from './server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    const featuredArticlesData = ([__temp, __restore] = withAsyncContext(() => prismic.client.getByType("blog_article", {
      fetchLinks: [
        "blog_article.title",
        "blog_article.featured_image"
      ]
    })), __temp = await __temp, __restore(), __temp);
    const featuredArticles = computed(() => {
      return props.slice.primary.articles.filter((item) => isFilled.contentRelationship(item.article)).map((item) => {
        const articleLink = item.article;
        if (isFilled.contentRelationship(articleLink)) {
          const relatedDoc = featuredArticlesData.results.find(
            (doc) => doc.id === articleLink.id
          );
          return relatedDoc ? { ...relatedDoc, image_style: item.image_style, bg_color: item.background_color, text_align: item.text_align, text_color: item.text_color } : null;
        }
        return null;
      }).filter((article) => article !== null);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      const _component_PrismicLink = PrismicLink;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "featured-articles wrapper wrapper--fullscreen"
      }, _attrs))} data-v-02e8e912>`);
      if (unref(isFilled).group(_ctx.slice.primary.articles)) {
        _push(`<div class="featured-articles__inner" data-v-02e8e912><!--[-->`);
        ssrRenderList(featuredArticles.value, (article, index2) => {
          var _a, _b;
          _push(`<div class="article" data-v-02e8e912><div class="${ssrRenderClass([{
            "full-bleed": article.image_style === "Full Bleed",
            "inset": article.image_style === "Inset",
            "mask--blob-01": article.image_style === "Blob Mask 1",
            "mask--blob-02": article.image_style === "Blob Mask 2"
          }, "article__image"])}" style="${ssrRenderStyle({
            backgroundColor: article.bg_color
          })}" data-v-02e8e912>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: (_a = article.data.featured_image.url) != null ? _a : "",
            alt: (_b = article.data.featured_image.alt) != null ? _b : ""
          }, null, _parent));
          _push(`</div><div class="${ssrRenderClass([{
            "align--top": article.text_align === "Top",
            "align--bottom": article.text_align === "Bottom"
          }, "article__details"])}" style="${ssrRenderStyle({
            color: article.text_color
          })}" data-v-02e8e912><p class="title h3" data-v-02e8e912>${ssrInterpolate(article.data.title)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/FeaturedArticles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-02e8e912"]]);

export { index as default };
//# sourceMappingURL=index-B7erlYtA.mjs.map
