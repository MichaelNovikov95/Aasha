<template>
  <div class="flex space-x-2 text-subtitle1" @click="openToggle">
    <p>Info</p>
    <img src="@/assets/svg/chevron.svg" alt="Info_dropdown-menu" />
  </div>
  <ul class="text-body1" v-if="isOpen">
    <li><router-link to="/info/about">About</router-link></li>
    <li><router-link to="/info/contact">Contact</router-link></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    openToggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
