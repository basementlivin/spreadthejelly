import { defineAsyncComponent } from 'vue';
import { f as defineSliceZoneComponents } from './server.mjs';

const components = defineSliceZoneComponents({
  dividing_line: defineAsyncComponent(() => import('./index-C7xF4L0X.mjs')),
  featured_articles: defineAsyncComponent(
    () => import('./index-CmmmhRdA.mjs')
  ),
  headline: defineAsyncComponent(() => import('./index-WeY1KHNR.mjs')),
  hero: defineAsyncComponent(() => import('./index-Bh6ickmP.mjs')),
  image: defineAsyncComponent(() => import('./index-DofFWW6w.mjs')),
  image_slider: defineAsyncComponent(() => import('./index-DgVltBPJ.mjs')),
  jelly_likes: defineAsyncComponent(() => import('./index-pNrtq-An.mjs')),
  pull_quote: defineAsyncComponent(() => import('./index-CbXIwyop.mjs')),
  question: defineAsyncComponent(() => import('./index-CZZR80qj.mjs')),
  related_answers: defineAsyncComponent(
    () => import('./index-CzKcFgyw.mjs')
  ),
  related_articles: defineAsyncComponent(
    () => import('./index-L5QVmigU.mjs')
  ),
  subheadline: defineAsyncComponent(() => import('./index-DPxcLcd8.mjs')),
  team_members: defineAsyncComponent(() => import('./index-BPgeUlHT.mjs')),
  testimonials: defineAsyncComponent(() => import('./index-BLy98wej.mjs')),
  text: defineAsyncComponent(() => import('./index-BFY_0U92.mjs'))
});

export { components as c };
//# sourceMappingURL=index-Dqi1DyiM.mjs.map
