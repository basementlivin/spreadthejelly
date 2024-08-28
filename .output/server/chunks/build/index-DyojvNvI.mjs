import { _ as _sfc_main$1 } from './NuxtImg-BenuarRB.mjs';
import { _ as _export_sfc, l as getSliceComponentProps } from './server.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { Autoplay, Navigation, A11y, Keyboard, Thumbs, FreeMode } from 'swiper/modules';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
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
  __name: "index",
  __ssrInlineRender: true,
  props: getSliceComponentProps(),
  setup(__props) {
    const props = __props;
    const slides = computed(() => {
      const images = props.slice.primary.images;
      const minSlides = 10;
      let duplicatedImages = [...images];
      if (images.length < minSlides) {
        while (duplicatedImages.length < minSlides) {
          duplicatedImages = [...duplicatedImages, ...images];
        }
      }
      return duplicatedImages;
    });
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      if (props.slice.primary.images && _ctx.slice.variation === "default") {
        _push(`<section${ssrRenderAttrs(mergeProps({
          "data-slice-type": _ctx.slice.slice_type,
          "data-slice-variation": _ctx.slice.variation,
          class: "image-slider wrapper wrapper--fullscreen",
          "data-scroll-section": ""
        }, _attrs))} data-v-c30a0824>`);
        _push(ssrRenderComponent(unref(Swiper), {
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation), "SwiperA11y" in _ctx ? _ctx.SwiperA11y : unref(A11y), "SwiperKeyboard" in _ctx ? _ctx.SwiperKeyboard : unref(Keyboard)],
          "grab-cursor": true,
          "space-between": 0,
          "slides-per-view": 1,
          loop: true,
          speed: 680,
          autoplay: {
            delay: 2850,
            disableOnInteraction: false
          },
          breakpoints: {
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            },
            1600: {
              slidesPerView: 4
            }
          },
          navigation: {
            nextEl: ".swiper-button-next--custom",
            prevEl: ".swiper-button-prev--custom"
          },
          a11y: {
            enabled: true
          },
          keyboard: {
            enabled: true
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(slides), (slide, index2) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: index2 }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b, _c, _d;
                    if (_push3) {
                      _push3(`<div class="image" data-v-c30a0824${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_NuxtImg, {
                        src: (_a = slide.image.url) != null ? _a : "",
                        alt: (_b = slide.image.alt) != null ? _b : ""
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "image" }, [
                          createVNode(_component_NuxtImg, {
                            src: (_c = slide.image.url) != null ? _c : "",
                            alt: (_d = slide.image.alt) != null ? _d : ""
                          }, null, 8, ["src", "alt"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(slides), (slide, index2) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: index2 }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        createVNode("div", { class: "image" }, [
                          createVNode(_component_NuxtImg, {
                            src: (_a = slide.image.url) != null ? _a : "",
                            alt: (_b = slide.image.alt) != null ? _b : ""
                          }, null, 8, ["src", "alt"])
                        ])
                      ];
                    }),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="swiper-navigation" data-v-c30a0824><div class="swiper-button-next--custom" data-v-c30a0824> + </div></div></section>`);
      } else if (props.slice.primary.images && _ctx.slice.variation === "thumbsGallery") {
        _push(`<section${ssrRenderAttrs(mergeProps({
          "data-slice-type": _ctx.slice.slice_type,
          "data-slice-variation": _ctx.slice.variation,
          class: "thumbs-slider wrapper--narrow",
          "data-scroll-section": ""
        }, _attrs))} data-v-c30a0824>`);
        _push(ssrRenderComponent(unref(Swiper), {
          modules: [unref(Thumbs), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation), "SwiperA11y" in _ctx ? _ctx.SwiperA11y : unref(A11y), "SwiperKeyboard" in _ctx ? _ctx.SwiperKeyboard : unref(Keyboard)],
          thumbs: {
            swiper: thumbsSwiper.value
          },
          "space-between": 0,
          "slides-per-view": 1,
          loop: true,
          speed: 680,
          navigation: {
            nextEl: ".swiper-button-next--custom",
            prevEl: ".swiper-button-prev--custom"
          },
          a11y: {
            enabled: true
          },
          keyboard: {
            enabled: true
          },
          class: "thumbs-slider__main"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(slides), (slide, index2) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: index2 }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b, _c, _d;
                    if (_push3) {
                      _push3(`<div class="image" data-v-c30a0824${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_NuxtImg, {
                        src: (_a = slide.image.url) != null ? _a : "",
                        alt: (_b = slide.image.alt) != null ? _b : ""
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "image" }, [
                          createVNode(_component_NuxtImg, {
                            src: (_c = slide.image.url) != null ? _c : "",
                            alt: (_d = slide.image.alt) != null ? _d : ""
                          }, null, 8, ["src", "alt"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--><div class="swiper-navigation" data-v-c30a0824${_scopeId}><div class="swiper-button-prev--custom" data-v-c30a0824${_scopeId}> \u2013 </div><div class="swiper-button-next--custom" data-v-c30a0824${_scopeId}> + </div></div>`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(slides), (slide, index2) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: index2 }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        createVNode("div", { class: "image" }, [
                          createVNode(_component_NuxtImg, {
                            src: (_a = slide.image.url) != null ? _a : "",
                            alt: (_b = slide.image.alt) != null ? _b : ""
                          }, null, 8, ["src", "alt"])
                        ])
                      ];
                    }),
                    _: 2
                  }, 1024);
                }), 128)),
                createVNode("div", { class: "swiper-navigation" }, [
                  createVNode("div", { class: "swiper-button-prev--custom" }, " \u2013 "),
                  createVNode("div", { class: "swiper-button-next--custom" }, " + ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Swiper), {
          modules: [unref(Thumbs), "SwiperFreeMode" in _ctx ? _ctx.SwiperFreeMode : unref(FreeMode)],
          "watch-slides-progress": "",
          "space-between": 10,
          "slides-per-view": 3,
          "grab-cursor": true,
          "free-mode": {
            enabled: true,
            minimumVelocity: 0.05
          },
          loop: true,
          breakpoints: {
            768: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 5
            }
          },
          class: "thumbs-slider__thumbs",
          onSwiper: setThumbsSwiper
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(slides), (slide, index2) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: index2 }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b, _c, _d;
                    if (_push3) {
                      _push3(`<div class="thumb" data-v-c30a0824${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_NuxtImg, {
                        src: (_a = slide.image.url) != null ? _a : "",
                        alt: (_b = slide.image.alt) != null ? _b : ""
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "thumb" }, [
                          createVNode(_component_NuxtImg, {
                            src: (_c = slide.image.url) != null ? _c : "",
                            alt: (_d = slide.image.alt) != null ? _d : ""
                          }, null, 8, ["src", "alt"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(slides), (slide, index2) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: index2 }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        createVNode("div", { class: "thumb" }, [
                          createVNode(_component_NuxtImg, {
                            src: (_a = slide.image.url) != null ? _a : "",
                            alt: (_b = slide.image.alt) != null ? _b : ""
                          }, null, 8, ["src", "alt"])
                        ])
                      ];
                    }),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("slices/ImageSlider/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c30a0824"]]);

export { index as default };
//# sourceMappingURL=index-DyojvNvI.mjs.map
