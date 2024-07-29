<script setup lang="ts">
// const navigation = useNavigation()
// const settings = useSettings()
</script>

<template>
  <Bounded
    as="footer"
    y-padding="sm"
  >
    <div
      class="flex flex-row justify-center gap-x-6 gap-y-3 leading-none"
    >
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
  </Bounded>
</template>

