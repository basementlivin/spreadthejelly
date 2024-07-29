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
      class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none"
    >
      <p>
        &copy; {{ new Date().getFullYear() }} REVOLVE Gallery & Co-Op Studios. Site design and development by <a href="https://historyofsalad.com" target="_blank">History of Salad</a>.
      </p>
    </div>
  </Bounded>
</template>

