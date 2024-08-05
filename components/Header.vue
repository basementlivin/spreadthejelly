<script setup lang="ts">
const navigation = useNavigation()
const settings = useSettings()
</script>

<template>
  <header>
    <div
      class=""
    >
      <NuxtLink
        to="/"
        class=""
      >
        {{ settings?.data.site_title }}
      </NuxtLink>
      <nav>
        <ul
          class=""
        >
          <li
            v-for="item in navigation?.data.links"
            :key="$prismic.asText(item.label) || ''"
            class=""
          >
            <PrismicLink
              :field="item.link"
            >
              {{
                $prismic.asText(item.label)
              }}
            </PrismicLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

