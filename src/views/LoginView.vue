<template>
  <section class="px-6 pt-20 pb-14 lg:pb-20 text-center lg:max-w-[480px] lg:ml-auto lg:mr-auto">
    <div v-if="token">
      <h3 class="text-h3 pb-20">You are logged in!</h3>
      <div>
        <RouterLink to="/" class="underline underline-offset-4">Return to home page</RouterLink>
      </div>
      <button @click="show">show token</button>
    </div>

    <div v-else>
      <LoginComponent v-if="currentPage === 1" :loginToggle="loginToggle" />
      <RegistrationComponent v-else />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const store = useAuthStore()
const token = store.token

import LoginComponent from '../components/Login/LoginComponent.vue'
import RegistrationComponent from '../components/Login/RegistrationComponent.vue'

const currentPage = ref(1)

function show() {
  console.log(token === '')
  console.log(typeof token)
}

function loginToggle() {
  currentPage.value += 1
}
</script>
