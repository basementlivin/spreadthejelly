import { defineAsyncComponent } from 'vue';
import { f as defineSliceZoneComponents } from './server.mjs';

const components = defineSliceZoneComponents({
  dividing_line: defineAsyncComponent(() => import('./index-C7xF4L0X.mjs')),
  featured_articles: defineAsyncComponent(
    () => import('./index-B7erlYtA.mjs')
  ),
  headline: defineAsyncComponent(() => import('./index-WeY1KHNR.mjs')),
  hero: defineAsyncComponent(() => import('./index-CsJ-ydkS.mjs')),
  image: defineAsyncComponent(() => import('./index-CtsF6CR1.mjs')),
  image_slider: defineAsyncComponent(() => import('./index-DUuJJgNn.mjs')),
  jelly_likes: defineAsyncComponent(() => import('./index-DTclftSU.mjs')),
  pull_quote: defineAsyncComponent(() => import('./index-CbXIwyop.mjs')),
  question: defineAsyncComponent(() => import('./index-CxXd_lEV.mjs')),
  related_answers: defineAsyncComponent(
    () => import('./index-CzKcFgyw.mjs')
  ),
  related_articles: defineAsyncComponent(
    () => import('./index-CayG-IHj.mjs')
  ),
  subheadline: defineAsyncComponent(() => import('./index-DPxcLcd8.mjs')),
  team_members: defineAsyncComponent(() => import('./index-DaLq28Kr.mjs')),
  testimonials: defineAsyncComponent(() => import('./index-BLy98wej.mjs')),
  text: defineAsyncComponent(() => import('./index-CUzcSCXs.mjs'))
});

export { components as c };
//# sourceMappingURL=index-BckJkNAY.mjs.map
