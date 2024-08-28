import { _ as __nuxt_component_1 } from './nuxt-img-DVe67KAQ.mjs';
import { _ as _export_sfc, l as getSliceComponentProps, P as PrismicRichText, h as PrismicLink } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      const _component_PrismicRichText = PrismicRichText;
      const _component_PrismicLink = PrismicLink;
      if (_ctx.slice.primary.team_member.length === 3) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          "data-slice-type": _ctx.slice.slice_type,
          "data-slice-variation": _ctx.slice.variation,
          class: "team-members wrapper wrapper--wide",
          "data-scroll-section": ""
        }, _attrs))} data-v-56178c49><div class="team-members__inner" data-v-56178c49><!--[-->`);
        ssrRenderList(_ctx.slice.primary.team_member, (item, index2) => {
          var _a, _b, _c;
          _push(`<div class="team-member" data-v-56178c49><div class="team-member__image" data-v-56178c49>`);
          if (unref(isFilled).image(item.image)) {
            _push(ssrRenderComponent(_component_NuxtImg, {
              src: (_a = item.image.url) != null ? _a : "",
              alt: (_c = (_b = item.image.alt) != null ? _b : item.name) != null ? _c : "",
              loading: "lazy",
              placeholder: ""
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="team-member__content" data-v-56178c49>`);
          if (unref(isFilled).keyText(item.name)) {
            _push(`<h3 class="name" data-v-56178c49>${ssrInterpolate(item.name)}</h3>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(isFilled).richText(item.bio)) {
            _push(ssrRenderComponent(_component_PrismicRichText, {
              field: item.bio,
              class: "bio"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (unref(isFilled).link(item.social_link)) {
            _push(ssrRenderComponent(_component_PrismicLink, {
              field: item.social_link,
              class: "link link--no-underline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.social_link_text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.social_link_text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/TeamMembers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56178c49"]]);

export { index as default };
//# sourceMappingURL=index-BPgeUlHT.mjs.map
