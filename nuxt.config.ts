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
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
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
          `
        }
      }
    }
  },

  modules: [
    '@nuxtjs/prismic',
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxtjs/seo',
    '~/modules.ts'
  ],

  image: {
    provider: 'prismic',
    prismic: {},
  },

  prismic: {
    endpoint: 'spreadthejelly',
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
      ]
    }
  },

  site: {
    url: 'https://spreadthejelly.com',
    name: 'Spread the Jelly',
    description: 'An editorial resource & storytelling platform for every motherhood journey.',
    defaultLocale: 'en',
    social: {
      twitter: '@spreadthejelly',
      facebook: 'spreadthejelly',
      instagram: 'spreadthejelly'
    },
    seo: {
      titleTemplate: '%s - Spread the Jelly',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        site_name: 'Spread the Jelly',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@spreadthejelly',
      }
    }
  },
})