<template>
  <h4 class="text-h4">Login</h4>
  <form class="flex flex-col" @submit.prevent="store.signIn">
    <div class="w-full flex flex-col mt-8 text-subtitle1 items-start space-y-2">
      <label for="email">Email</label>
      <input
        class="border-2 border-slate-gray rounded-lg w-full h-12"
        type="email"
        id="email"
        name="login"
      />
    </div>
    <div class="w-full flex flex-col mt-4 text-subtitle1 items-start space-y-2">
      <label for="password">Password</label>
      <input
        class="border-2 border-slate-gray rounded-lg w-full h-12"
        type="password"
        id="password"
        name="login"
      />
    </div>
    <button class="w-full text-center bg-resoultion-blue rounded-3xl confirm_button">
      <p @click="redirectToShop" class="text-button text-white py-3">Sign In</p>
    </button>
  </form>
  <button @click="props.loginToggle" class="text-body1 text-slate-gray mt-8">Create account</button>
</template>

<script setup>
import { useAuthStore } from '../../stores/authStore.ts'

const store = useAuthStore()

const props = defineProps({
  loginToggle: Function
})
</script>
