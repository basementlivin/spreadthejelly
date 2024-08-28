import { defineAsyncComponent } from 'vue';
import { f as defineSliceZoneComponents } from './server.mjs';

const components = defineSliceZoneComponents({
  dividing_line: defineAsyncComponent(() => import('./index-C7xF4L0X.mjs')),
  featured_articles: defineAsyncComponent(
    () => import('./index-DWYNfHyR.mjs')
  ),
  headline: defineAsyncComponent(() => import('./index-WeY1KHNR.mjs')),
  hero: defineAsyncComponent(() => import('./index-DcPGj9gw.mjs')),
  image: defineAsyncComponent(() => import('./index-Dk6tTcEd.mjs')),
  image_slider: defineAsyncComponent(() => import('./index-DyojvNvI.mjs')),
  jelly_likes: defineAsyncComponent(() => import('./index-CYckqwy6.mjs')),
  pull_quote: defineAsyncComponent(() => import('./index-CbXIwyop.mjs')),
  question: defineAsyncComponent(() => import('./index-E5IR3FHR.mjs')),
  related_answers: defineAsyncComponent(
    () => import('./index-CzKcFgyw.mjs')
  ),
  related_articles: defineAsyncComponent(
    () => import('./index-BMA3i23P.mjs')
  ),
  subheadline: defineAsyncComponent(() => import('./index-DPxcLcd8.mjs')),
  team_members: defineAsyncComponent(() => import('./index-B-kVvoBy.mjs')),
  testimonials: defineAsyncComponent(() => import('./index-BLy98wej.mjs')),
  text: defineAsyncComponent(() => import('./index-TMwAs5Ie.mjs'))
});

export { components as c };
//# sourceMappingURL=index-VkYRJzs4.mjs.map
