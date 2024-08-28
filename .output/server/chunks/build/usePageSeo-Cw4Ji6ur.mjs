import { u as useSettings } from './useSettings-CLIk7AWv.mjs';
import { b as usePrismic, d as useRoute, g as useSeoMeta } from './server.mjs';
import { computed } from 'vue';

function usePageSeo(page) {
  const prismic = usePrismic();
  const settings = useSettings();
  const route = useRoute();
  const title = computed(() => {
    var _a2, _b2;
    var _a, _b;
    return (_b2 = (_a2 = (_a = page.value) == null ? void 0 : _a.data.meta_title) != null ? _a2 : (_b = settings.value) == null ? void 0 : _b.data.site_title) != null ? _b2 : "Spread the Jelly";
  });
  const description = computed(() => {
    var _a2, _b2;
    var _a, _b;
    return (_b2 = (_a2 = (_a = page.value) == null ? void 0 : _a.data.meta_description) != null ? _a2 : (_b = settings.value) == null ? void 0 : _b.data.meta_description) != null ? _b2 : "";
  });
  const ogImage = computed(() => {
    var _a2, _b2;
    var _a, _b, _c, _d;
    const pageImage = prismic.asImageSrc((_a = page.value) == null ? void 0 : _a.data.meta_image);
    const settingsImage = prismic.asImageSrc((_b = settings.value) == null ? void 0 : _b.data.og_image);
    return pageImage ? { url: pageImage, alt: (_a2 = (_c = page.value) == null ? void 0 : _c.data.meta_image.alt) != null ? _a2 : "" } : settingsImage ? { url: settingsImage, alt: (_b2 = (_d = settings.value) == null ? void 0 : _d.data.og_image.alt) != null ? _b2 : "" } : { url: "/spread-the-jelly--og.png", alt: "Spread the Jelly" };
  });
  const ogUrl = computed(() => `https://spreadthejelly.com${route.path}`);
  useSeoMeta({
    title,
    description,
    ogImage: ogImage.value,
    ogUrl: ogUrl.value,
    ogSiteName: "Spread the Jelly"
  });
}

export { usePageSeo as u };
//# sourceMappingURL=usePageSeo-Cw4Ji6ur.mjs.map
