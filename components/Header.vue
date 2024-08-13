<script setup lang="ts">
const navigation = useNavigation()
const settings = useSettings()

import { ref } from 'vue'

import Logo from '@/assets/svg/logo--header.svg'
import MenuHamburger from '@/assets/svg/menu--hamburger.svg'
import MenuX from '@/assets/svg/menu--x.svg'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <NuxtLink
        to="/"
        class="logo"
      >
        <Logo />
      </NuxtLink>
      <button 
        class="menu-toggle" 
        @click="toggleMenu"
      >
        <component :is="isMenuOpen ? MenuX : MenuHamburger" />
      </button>
    </div>
    <nav
      :class="{ 'menu-open': isMenuOpen }"
      class="slide-in-menu"
    >
      <div class="slide-in-menu__inner">
        <ul>
          <li
            v-for="item in navigation?.data.links"
            :key="$prismic.asText(item.label) || ''"
            class="menu-item h4"
          >
            <PrismicLink :field="item.link">
              {{ $prismic.asText(item.label) }}
            </PrismicLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_header.scss';
</style>