<template>
  <div class="ask-jelly-form">
    <form
      name="ask-jelly"
      method="POST"
      data-netlify="true"
      @submit.prevent="handleSubmit"
    >
      <input
        type="hidden"
        name="form-name"
        value="ask-jelly"
      >
      <div class="form-group">
        <label for="name">Name</label>
        <input  
          id="name"
          v-model="form.name"
          type="text"
          name="name"
          autocomplete="name"
          placeholder="NAME"
          required
        >
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="EMAIL"
          required
        >
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          name="message"
          placeholder="MESSAGE"
          required
        />
      </div>
      <button
        type="submit"
        class="link"
      >
        send
      </button>
    </form>
    <div
      v-if="showAlert"
      class="alert"
    >
      Got it, thanks!
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const showAlert = ref(false)

const handleSubmit = () => {
  showAlert.value = true
  form.value.name = ''
  form.value.email = ''
  form.value.message = ''
  setTimeout(() => {
    showAlert.value = false
  }, 3000)
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/_form--ask-jelly.scss';
</style>