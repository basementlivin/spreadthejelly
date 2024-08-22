<script setup lang="ts">

import FooterMask from '@/assets/svg/mask--footer.svg'
import FooterLogo from '@/assets/svg/logo--footer.svg'
import FacebookIcon from '@/assets/svg/social--facebook.svg'
import InstagramIcon from '@/assets/svg/social--instagram.svg'
import TikTokIcon from '@/assets/svg/social--tiktok.svg'
import YouTubeIcon from '@/assets/svg/social--youtube.svg'
import { isFilled } from '@prismicio/client'

const footerLinks = useFooterLinks()

</script>

<template>
  <div class="footer__mask">
    <FooterMask class="mask" />
  </div>
  <footer
    class="footer"
    data-scroll-section
  >
    <div class="footer__logo">
      <FooterLogo class="logo" />
    </div>
    <div class="footer__links">
      <ul class="links">
        <li
          v-for="item in footerLinks?.data?.links"
          :key="item?.label?.[0]|| ''"
          class="link--footer"
        >
          <PrismicLink :field="item.link">
            {{ item?.label || '' }}
          </PrismicLink>
        </li>
      </ul>
    </div>
    <div class="footer__newsletter-signup">
      <span class="form-header">Hear the news</span>
      <form
        action="#"
        method="post"
        class="newsletter-signup"
      >
        <input
          type="email"
          name="email"
          autocomplete="email"
          placeholder="Your email"
          class="input"
        >
        <button
          type="submit"
          class="button link"
        >
          subscribe
        </button>
      </form>
    </div>
    <div class="footer__social">
      <div class="social-links">
        <PrismicLink
          v-if="footerLinks?.data?.facebook_url && isFilled.link(footerLinks?.data?.facebook_url)"
          :field="footerLinks?.data?.facebook_url"
        >
          <FacebookIcon />
        </PrismicLink>
        <PrismicLink
          v-if="footerLinks?.data?.instagram_url && isFilled.link(footerLinks?.data?.instagram_url)"
          :field="footerLinks?.data?.instagram_url"
        >
          <InstagramIcon />
        </PrismicLink>
        <PrismicLink
          v-if="footerLinks?.data?.tiktok_url && isFilled.link(footerLinks?.data?.tiktok_url)"
          :field="footerLinks?.data?.tiktok_url"
        >
          <TikTokIcon />
        </PrismicLink>
        <PrismicLink
          v-if="footerLinks?.data?.youtube_url && isFilled.link(footerLinks?.data?.youtube_url)"
          :field="footerLinks?.data?.youtube_url"
        >
          <YouTubeIcon />
        </PrismicLink>
      </div>
    </div>
    <div class="footer__credits">
      <p>
        &copy; {{ new Date().getFullYear() }} Spread the Jelly.
        Site development by 
        <a
          href="https://historyofsalad.com"
          target="_blank"
        >
          History of Salad.
        </a>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_footer.scss';
</style>