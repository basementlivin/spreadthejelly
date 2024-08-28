import { b as usePrismic, d as useRoute, e as useAsyncData, S as SliceZone } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[uid]",
  __ssrInlineRender: true,
  setup(__props) {
    const prismic = usePrismic();
    const route = useRoute();
    const { data: page } = useAsyncData(
      route.params.uid,
      () => prismic.client.getByUID("page", route.params.uid, {
        fetchLinks: []
      }),
      "$yhB4qdtz2u"
    );
    usePageSeo(page);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_SliceZone = SliceZone;
      _push(ssrRenderComponent(_component_SliceZone, mergeProps({
        id: "main",
        wrapper: "main",
        slices: (_a2 = (_a = unref(page)) == null ? void 0 : _a.data.slices) != null ? _a2 : [],
        components: unref(components)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[uid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_uid_-CqpwMoVy.mjs.map
