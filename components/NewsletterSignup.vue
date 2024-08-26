<script setup lang="ts">
import { isFilled } from '@prismicio/client';
import { ref, onMounted, onBeforeUnmount } from 'vue'

const newsletter = useNewsletterPopupForm()
const isModalVisible = ref(false) // Controls modal visibility
const isFormSubmitted = ref(false) // Controls form submission state
let closeTimeout: number | null = null // Explicitly define the type

onMounted(() => {
  // Show the modal after 3 seconds
  setTimeout(() => {
    isModalVisible.value = true
  }, 3000)

  // Add event listener for Escape key
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  // Clean up the event listener when the component is destroyed
  document.removeEventListener('keydown', handleEscape)
})

const closeModal = () => {
  if (closeTimeout !== null) {
    clearTimeout(closeTimeout) // Clear any active timeout
    closeTimeout = null // Reset timeout
  }
  isModalVisible.value = false
}

// Function to handle Escape key press
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isModalVisible.value) {
    closeModal()
  }
}

const handleSubmit = () => {
  isFormSubmitted.value = true
  // Show success message for 2.5 seconds, then close the modal
  closeTimeout = window.setTimeout(() => {
    closeModal()
  }, 2500)
}
</script>

<template>
  <div
    v-if="isModalVisible"
    class="modal-overlay"
    @click.self="closeModal"
  >
    <div
      :class="{
        'modal-content': true,
        'newsletter-popup': true,
      }"
    >
      <button
        class="close-button sr-only"
        aria-label="Close signup modal"
        @click="closeModal"
      >
        X
      </button>

      <div
        v-if="isFormSubmitted"
        class="success-message"
      >
        <span
          v-if="isFilled.keyText(newsletter?.data.success_headline)"
          class="headline"
        >
          {{ newsletter?.data.success_headline || 'Got it, thanks!' }}
        </span>
        <span
          v-if="isFilled.keyText(newsletter?.data.success_subheadline)"
          class="subheadline"
        >
          {{ newsletter?.data.success_subheadline }}
        </span>
      </div>
      
      <form
        v-else
        name="newsletter"
        method="POST"
        data-netlify="true"
        class="signup-form"
        @submit.prevent="handleSubmit"
      >
        <input
          type="hidden"
          name="newletter-signup-popup"
          value="newsletter"
          autocomplete="email"
        >

        <div class="signup-form__intro">
          <span
            v-if="isFilled.keyText(newsletter?.data.headline)"
            class="headline"
          >
            {{ newsletter?.data.headline || 'Get Jelly' }}
          </span>
          <span
            v-if="isFilled.keyText(newsletter?.data.subheadline)"
            class="subheadline"
          >
            {{ newsletter?.data.subheadline || 'Sign up for the newsletter' }}
          </span>
        </div>

        <div class="signup-form__content">
          <label
            for="email"
            class="sr-only"
          >
            Email Address
          </label>
  
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            required
          >
  
          <button
            v-if="isFilled.keyText(newsletter?.data.button_text)"
            type="submit"
            class="link"
          >
            {{ newsletter?.data.button_text || 'Join the club!' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  @import url('/assets/scss/components/_newsletter-popup.scss');
</style>
