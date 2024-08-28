import { _ as _export_sfc, l as getSliceComponentProps, b as usePrismic, h as PrismicLink } from './server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, computed, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
    const relatedAnswersData = ([__temp, __restore] = withAsyncContext(() => prismic.client.getByType("ask_jelly_article", {
      fetchLinks: [
        "ask_jelly_article.title",
        "ask_jelly_article.asked_by"
      ]
    })), __temp = await __temp, __restore(), __temp);
    const relatedAnswers = computed(() => {
      return props.slice.primary.answers.map((item) => item.answer).filter((answer) => isFilled.contentRelationship(answer)).map((answer) => {
        const relatedDoc = relatedAnswersData.results.find(
          (doc) => doc.id === answer.id
        );
        return relatedDoc ? { ...answer, data: relatedDoc.data } : null;
      }).filter((answer) => answer !== null);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrismicLink = PrismicLink;
      _push(`<section${ssrRenderAttrs(mergeProps({
        "data-slice-type": _ctx.slice.slice_type,
        "data-slice-variation": _ctx.slice.variation,
        class: "related-answers wrapper wrapper--wide"
      }, _attrs))} data-v-d682ce72><span class="related-answers__headline" data-v-d682ce72>Related Answers</span>`);
      if (relatedAnswers.value) {
        _push(`<div class="related-answers__inner" data-v-d682ce72><!--[-->`);
        ssrRenderList(relatedAnswers.value, (answer, index2) => {
          _push(`<div class="answer" data-v-d682ce72><h3 class="title" data-v-d682ce72>${ssrInterpolate(answer.data.title)}</h3><p class="asked-by" data-v-d682ce72> From ${ssrInterpolate(answer.data.asked_by)}</p>`);
          _push(ssrRenderComponent(_component_PrismicLink, {
            field: answer,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/RelatedAnswers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d682ce72"]]);

export { index as default };
//# sourceMappingURL=index-CzKcFgyw.mjs.map
