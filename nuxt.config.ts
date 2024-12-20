import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

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
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://prismic.io'},
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
    "nuxt-swiper",
    "nuxt-svgo",
    "nuxt-gtag"
  ],

  gtag: {
    id: "G-LDTYJ63JTB",
  },

  svgo: {
    autoImportPath: "~/assets/svg",
  },

  prismic: {
    endpoint: repositoryName,
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
        {
          type: "jelly_loves",
          path: "/jelly-loves",
        },
        {
          type: "jelly_loves_article",
          path: "/jelly-loves/:uid",
        }
      ]
    }
  },

  runtimeConfig: {
    gsapAuthToken: process.env.GSAP_AUTH_TOKEN,
  }
})