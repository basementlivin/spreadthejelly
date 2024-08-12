import { defineNuxtModule } from '@nuxt/kit'
import { installNuxtSiteConfig, updateSiteConfig } from 'nuxt-site-config-kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-site-config',
    configKey: 'siteConfig'
  },
  defaults: {
    url: 'https://spreadthejelly.com',
    title: 'Spread the Jelly',
    description: 'An editorial resource & storytelling platform for every motherhood journey.',
    defaultLocale: 'en',
  },
  async setup(options, nuxt) {
    await installNuxtSiteConfig()
    updateSiteConfig(options)
  }
})