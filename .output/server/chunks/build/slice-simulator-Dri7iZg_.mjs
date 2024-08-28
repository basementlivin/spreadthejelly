import { S as SliceZone } from './server.mjs';
import { defineComponent, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { SliceSimulator } from '@slicemachine/adapter-nuxt/simulator';
import { c as components } from './index-BckJkNAY.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "slice-simulator",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SliceZone = SliceZone;
      _push(ssrRenderComponent(unref(SliceSimulator), _attrs, {
        default: withCtx(({ slices }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SliceZone, {
              slices,
              components: unref(components)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SliceZone, {
                slices,
                components: unref(components)
              }, null, 8, ["slices", "components"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/slice-simulator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=slice-simulator-Dri7iZg_.mjs.map
