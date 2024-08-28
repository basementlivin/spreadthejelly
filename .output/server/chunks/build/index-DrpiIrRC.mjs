import { _ as _export_sfc, b as usePrismic, e as useAsyncData, P as PrismicRichText, S as SliceZone, h as PrismicLink } from './server.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-CPEo5JM7.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withAsyncContext, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { c as components } from './index-BckJkNAY.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AskJellyForm",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: "",
      email: "",
      message: ""
    });
    const showAlert = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ask-jelly-form" }, _attrs))} data-v-c34970a7><form name="ask-jelly" method="POST" data-netlify="true" data-v-c34970a7><input type="hidden" name="form-name" value="ask-jelly" data-v-c34970a7><div class="form-group" data-v-c34970a7><label for="name" data-v-c34970a7>Name</label><input id="name"${ssrRenderAttr("value", form.value.name)} type="text" name="name" autocomplete="name" placeholder="NAME" required data-v-c34970a7></div><div class="form-group" data-v-c34970a7><label for="email" data-v-c34970a7>Email</label><input id="email"${ssrRenderAttr("value", form.value.email)} type="email" name="email" autocomplete="email" placeholder="EMAIL" required data-v-c34970a7></div><div class="form-group" data-v-c34970a7><label for="message" data-v-c34970a7>Message</label><textarea id="message" name="message" placeholder="MESSAGE" required data-v-c34970a7>${ssrInterpolate(form.value.message)}</textarea></div><button type="submit" class="link" data-v-c34970a7> send </button></form>`);
      if (showAlert.value) {
        _push(`<div class="alert" data-v-c34970a7> Got it, thanks! </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AskJellyForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AskJellyForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c34970a7"]]);
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
    const { data: pageData } = useAsyncData("askJellyPage", () => prismic.client.getSingle("ask_jelly"));
    const loadArticles = async () => {
      if (loading.value || !hasMore.value)
        return;
      loading.value = true;
      const newArticles = await prismic.client.getByType("ask_jelly_article", {
        pageSize: 6,
        // Number of articles per page (or, in this case, per group)
        page: page.value,
        // Page number for pagination
        orderings: {
          field: "my.ask_jelly_article.publication_date",
          direction: "desc"
        }
      });
      articles.value.push(...newArticles.results);
      if (newArticles.results_size < 6) {
        hasMore.value = false;
      }
      page.value++;
      loading.value = false;
    };
    [__temp, __restore] = withAsyncContext(() => loadArticles()), await __temp, __restore();
    usePageSeo(pageData);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c, _d, _e;
      const _component_PrismicRichText = PrismicRichText;
      const _component_SliceZone = SliceZone;
      const _component_NuxtImg = __nuxt_component_1;
      const _component_PrismicLink = PrismicLink;
      _push(`<main${ssrRenderAttrs(mergeProps({
        id: "main",
        class: "page--ask-jelly"
      }, _attrs))} data-v-edd26a29><section class="ask-jelly__intro wrapper wrapper--page-width" data-v-edd26a29><div class="content" data-v-edd26a29><h1 class="headline" data-v-edd26a29>${ssrInterpolate((_a = unref(pageData)) == null ? void 0 : _a.data.headline)}</h1>`);
      _push(ssrRenderComponent(_component_PrismicRichText, {
        field: (_b = unref(pageData)) == null ? void 0 : _b.data.copy,
        class: "copy"
      }, null, _parent));
      _push(`</div><div class="form" data-v-edd26a29>`);
      _push(ssrRenderComponent(AskJellyForm, null, null, _parent));
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_SliceZone, {
        slices: (_a2 = (_c = unref(pageData)) == null ? void 0 : _c.data.slices) != null ? _a2 : [],
        components: unref(components)
      }, null, _parent));
      if (articles.value.length) {
        _push(`<section class="ask-jelly__articles wrapper wrapper--wide" data-v-edd26a29><h2 class="headline" data-v-edd26a29> Jelly answers: </h2><div class="articles__container" data-v-edd26a29><!--[-->`);
        ssrRenderList(articles.value, (article) => {
          var _a3, _b2;
          _push(`<div class="article" data-v-edd26a29>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: (_a3 = article.data.featured_image.url) != null ? _a3 : "",
            alt: (_b2 = article.data.featured_image.alt) != null ? _b2 : "",
            class: "image"
          }, null, _parent));
          _push(`<p class="headline h4" data-v-edd26a29>${ssrInterpolate(article.data.title)}</p><span class="asked-by" data-v-edd26a29> From ${ssrInterpolate(article.data.asked_by)}</span>`);
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
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
        if (hasMore.value && !loading.value) {
          _push(`<span class="articles__load-more link" aria-label="Load more articles" data-v-edd26a29>${ssrInterpolate(((_d = unref(pageData)) == null ? void 0 : _d.data.load_more_button_text) ? unref(pageData).data.load_more_button_text : "Load More")}</span>`);
        } else if (!hasMore.value) {
          _push(`<p class="articles__no-more" data-v-edd26a29>${ssrInterpolate(((_e = unref(pageData)) == null ? void 0 : _e.data.no_more_articles_message) ? unref(pageData).data.no_more_articles_message : "You made it to the end!")}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ask-jelly/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-edd26a29"]]);

export { index as default };
//# sourceMappingURL=index-DrpiIrRC.mjs.map
