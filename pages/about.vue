<script setup>
import { components } from '~/slices';
const { client } = usePrismic();
const route = useRoute();

const { data: document } = await useAsyncData("about", async () => {
    const document = await client.getByUID("about", route.params.uid);

    if(document) {
        return document;
    } else {
        throw createError({ statusCode: 404, message: "Page not found" });
    }
});
</script>

<template>
  <h1>{{ document.data.title }}</h1>
</template>