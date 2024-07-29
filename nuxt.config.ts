import tailwindAspectRatio from '@tailwindcss/aspect-ratio'
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
          content: 'REVOLVE Gallery and Co-Op Studios is a community of artists and makers in Asheville, NC. We offer a variety of art classes, workshops, and events. We also have a gallery space where you can view and purchase art from our members and exhibiting artists.'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },

  css: [
    '~/assets/styles/global.css',
  ],

  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
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
          type: 'exhibition',
          path: '/exhibitions/:uid',
        },
        {
          type: 'event',
          path: '/events/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
      ]
    }
  },

  tailwindcss: {}
})