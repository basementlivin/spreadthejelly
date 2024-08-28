import { _ as __nuxt_component_1 } from './nuxt-img-CPEo5JM7.mjs';
import { _ as _export_sfc, l as getSliceComponentProps, h as PrismicLink, P as PrismicRichText } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { isFilled } from '@prismicio/client';
import BumpMask from './mask--hero-D_ikcu6H.mjs';
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
import './nuxt-icon-Ds-GuuPN.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2;
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_NuxtImg = __nuxt_component_1;
      const _component_PrismicLink = PrismicLink;
      const _component_PrismicRichText = PrismicRichText;
      if (["default", "vertical", "straight"].includes(_ctx.slice.variation)) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: [
            "hero",
            "hero--" + _ctx.slice.variation,
            "wrapper--fullscreen",
            _ctx.slice.variation === "straight" && _ctx.slice.primary.text_color === "White" ? "text--white" : "",
            _ctx.slice.variation === "straight" && _ctx.slice.primary.text_color === "Black" ? "text--black" : ""
          ],
          "data-scroll-section": ""
        }, _attrs))} data-v-b2220d24><div class="hero__bg" data-v-b2220d24><div class="image" data-v-b2220d24>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: (_a2 = _ctx.slice.primary.image.url) != null ? _a2 : "",
          alt: (_b2 = _ctx.slice.primary.image.alt) != null ? _b2 : ""
        }, null, _parent));
        if (_ctx.slice.variation === "default") {
          _push(ssrRenderComponent(unref(BumpMask), { class: "image--mask" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="hero__content wrapper wrapper--wide" data-v-b2220d24><div class="headline" data-v-b2220d24>`);
        if (unref(isFilled).keyText((_a = _ctx.slice.primary.headline[0]) == null ? void 0 : _a.headline)) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent((_b = _ctx.slice.primary.headline[0]) == null ? void 0 : _b.headline_level), { class: "h1" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a22, _b22;
              if (_push2) {
                _push2(`${ssrInterpolate((_a22 = _ctx.slice.primary.headline[0]) == null ? void 0 : _a22.headline)}`);
              } else {
                return [
                  createTextVNode(toDisplayString((_b22 = _ctx.slice.primary.headline[0]) == null ? void 0 : _b22.headline), 1)
                ];
              }
            }),
            _: 1
          }), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="details" data-v-b2220d24>`);
        if (unref(isFilled).keyText(_ctx.slice.primary.subheadline)) {
          _push(`<span class="subheadline" data-v-b2220d24>${ssrInterpolate(_ctx.slice.primary.subheadline)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isFilled).link((_c = _ctx.slice.primary.link[0]) == null ? void 0 : _c.link_location) && unref(isFilled).keyText((_d = _ctx.slice.primary.link[0]) == null ? void 0 : _d.link_text)) {
          _push(ssrRenderComponent(_component_PrismicLink, {
            field: _ctx.slice.primary.link[0].link_location,
            class: "link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a22, _b22;
              if (_push2) {
                _push2(`${ssrInterpolate((_a22 = _ctx.slice.primary.link[0]) == null ? void 0 : _a22.link_text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString((_b22 = _ctx.slice.primary.link[0]) == null ? void 0 : _b22.link_text), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></section>`);
      } else if (_ctx.slice.variation === "super") {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: ["hero", "hero--super", "wrapper--fullscreen"],
          "data-scroll-section": ""
        }, _attrs))} data-v-b2220d24><div class="hero__bg" data-v-b2220d24><div class="image" data-v-b2220d24>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: (_c2 = _ctx.slice.primary.image.url) != null ? _c2 : "",
          alt: (_d2 = _ctx.slice.primary.image.alt) != null ? _d2 : ""
        }, null, _parent));
        _push(ssrRenderComponent(unref(BumpMask), { class: "image--mask" }, null, _parent));
        _push(`</div></div><div class="hero__content wrapper wrapper--wide" data-v-b2220d24><div class="headline" data-v-b2220d24>`);
        if (unref(isFilled).keyText((_e = _ctx.slice.primary.headline[0]) == null ? void 0 : _e.headline)) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent((_f = _ctx.slice.primary.headline[0]) == null ? void 0 : _f.headline_level), { class: "h1" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a22, _b22;
              if (_push2) {
                _push2(`${ssrInterpolate((_a22 = _ctx.slice.primary.headline[0]) == null ? void 0 : _a22.headline)}`);
              } else {
                return [
                  createTextVNode(toDisplayString((_b22 = _ctx.slice.primary.headline[0]) == null ? void 0 : _b22.headline), 1)
                ];
              }
            }),
            _: 1
          }), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="details" data-v-b2220d24>`);
        if (unref(isFilled).keyText(_ctx.slice.primary.subheadline)) {
          _push(`<span class="subheadline" data-v-b2220d24>${ssrInterpolate(_ctx.slice.primary.subheadline)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(isFilled).link((_g = _ctx.slice.primary.link[0]) == null ? void 0 : _g.link_location) && unref(isFilled).keyText((_h = _ctx.slice.primary.link[0]) == null ? void 0 : _h.link_text)) {
          _push(ssrRenderComponent(_component_PrismicLink, {
            field: _ctx.slice.primary.link[0].link_location,
            class: "link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a22, _b22;
              if (_push2) {
                _push2(`${ssrInterpolate((_a22 = _ctx.slice.primary.link[0]) == null ? void 0 : _a22.link_text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString((_b22 = _ctx.slice.primary.link[0]) == null ? void 0 : _b22.link_text), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="copy" data-v-b2220d24>`);
        _push(ssrRenderComponent(_component_PrismicRichText, {
          field: _ctx.slice.primary.copy
        }, null, _parent));
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/Hero/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2220d24"]]);

export { index as default };
//# sourceMappingURL=index-CsJ-ydkS.mjs.map
