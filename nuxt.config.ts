import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Spread the Jelly',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'An editorial resource & storytelling platform for every motherhood journey.'
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'referrer', content: 'no-referrer-when-downgrade' },
        { name: 'robots', content: 'noindex, nofollow' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://images.prismic.io/spreadthejelly'},
      ]
    }
  },

  css: [
    '@/assets/scss/main.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/globals/reset";
            @import "@/assets/scss/globals/variables";
            @import "@/assets/scss/globals/mixins";
            @import "@/assets/scss/globals/typography";
            @import "@/assets/scss/globals/global";
            @import "breakpoint-sass/stylesheets/breakpoint";
            @import "@/assets/scss/globals/wrappers";
            @import "@/assets/scss/components/buttons";
          `
        }
      }
    }
  },

  modules: [
    "@nuxtjs/prismic",
    "@nuxt/image",
    "nuxt-swiper",
    "nuxt-svgo",
  ],

  image: {
    provider: "prismic",
    prismic: {},
    formats: ["webp", "avif", "jpg", "jpeg", "png", "gif"],
    screens: {
      'xs': 360,   // Small mobile devices
      'sm': 640,   // Standard mobile
      'md': 768,   // Tablets
      'lg': 1024,  // Tablets in landscape, smaller laptops
      'xl': 1280,  // Larger laptops
      '2xl': 1536, // Ultra-wide screens or higher-res displays
      '3xl': 1920, // Very large desktop screens
    },
    presets: {
      hero: {
        modifiers: {
          format: "webp",
          quality: 100,
          densities: [1, 2],
        }
      },
      default: {
        modifiers: {
          format: "webp",
          quality: 85,
          densities: [1, 2],
          loading: "lazy",
        }
      },
      small: {
        modifiers: {
          format: "webp",
          quality: 80,
          densities: [1, 2],
          loading: "lazy",
        }
      },
      tiny: {
        modifiers: {
          format: "webp",
          quality: 70,
          densities: [1, 2],
          loading: "lazy",
        }
      },
    }
  },

  svgo: {
    autoImportPath: "~/assets/svg",
  },

  prismic: {
    endpoint: "spreadthejelly",
    preview: "/api/preview",
    clientConfig: {
      routes: [
        {
          type: "page",
          uid: "home",
          path: "/",
        },
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "about",
          path: "/about-us",
        },
        {
          type: "contact",
          path: "/contact",
        },
        {
          type: "ask_jelly",
          path: "/ask-jelly",
        },
        {
          type: "ask_jelly_article",
          path: "/ask-jelly/:uid",
        },
        {
          type: "blog",
          path: "/articles",
        },
        {
          type: "blog_article",
          path: "/articles/:uid",
        },
      ]
    }
  },

  runtimeConfig: {
    gsapAuthToken: process.env.GSAP_AUTH_TOKEN,
  }
})