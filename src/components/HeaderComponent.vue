<template>
  <header class="border-b-2 border-b-lavender-web">
    <div class="flex px-6 lg:px-16 py-6 justify-between">
      <RouterLink to="/" class="cursor-pointer"
        ><img src="../assets/svg/Aasha.svg" alt="Logo"
      /></RouterLink>
      <div class="flex flex-wrap space-x-2 content-end">
        <button class="text-button" v-if="store.token" @click="store.logoutAction">Logout</button>
        <RouterLink to="/login" class="cursor-pointer" v-else
          ><img src="../assets/svg/pers.svg" alt="Person icon"
        /></RouterLink>
        <RouterLink to="/shop/cart" class="cursor-pointer"
          ><img src="../assets/svg/cart.svg" alt="Cart icon"
        /></RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '../stores/authStore.ts'
const store = useAuthStore()
</script>
