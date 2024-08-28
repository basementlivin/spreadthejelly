<script setup lang="ts">
import { isFilled } from '@prismicio/client';
import { ref, onMounted } from 'vue'
import Cookies from 'universal-cookie'

const newsletter = useNewsletterPopupForm()
const isModalVisible = ref(false) // Controls modal visibility
const isFormSubmitted = ref(false) // Controls form submission state
const COOKIE_NAME = 'newsletter_signup'
const DAYS_TO_EXPIRE = 30 // Number of days before the modal is shown again
const cookies = new Cookies() // Initialize universal-cookie

onMounted(() => {
  console.log("Checking if the user has seen the newsletter signup modal...")
  if (!hasSeenModal()) {
    console.log("User has not seen the modal. Showing it in 5 seconds...")
    setTimeout(() => {
      isModalVisible.value = true
    }, 5000)
  } else {
    console.log("User has already seen the modal. Not showing it.")
  }
})

const closeModal = () => {
  console.log("Closing the modal...")
  isModalVisible.value = false
}

const handleSubmit = () => {
  console.log("Form submitted. Setting the cookie...")
  isFormSubmitted.value = true
  setCookie(COOKIE_NAME, 'true', DAYS_TO_EXPIRE) // Set the cookie after submission
  setTimeout(() => {
    console.log("Hiding the modal after showing the success message...")
    closeModal()
  }, 2500)
}

// Function to set a cookie with an expiration date
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date()
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
  cookies.set(name, value, { path: '/', expires })
  console.log(`Cookie "${name}" set with value "${value}" and expiration of ${days} days.`)
}

// Function to check if the user has already seen the modal
const hasSeenModal = (): boolean => {
  const cookieValue = cookies.get(COOKIE_NAME)
  console.log(`Checking for cookie "${COOKIE_NAME}":`, cookieValue)
  return cookieValue !== undefined
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
        name="newsletter-signup--popup"
        method="POST"
        data-netlify="true"
        class="signup-form"
        @submit.prevent="handleSubmit"
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
