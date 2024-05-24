<template>
  <div class="flex space-x-2 text-subtitle1" @click="openToggle">
    <p>Browse</p>
    <img src="@/assets/svg/chevron.svg" alt="Browse_dropdown-menu" />
  </div>
  <ul class="text-body1" v-if="isOpen">
    <li><router-link to="/browse/shop">Shop</router-link></li>
    <li><router-link to="/browse/shop/paintings">Paintings</router-link></li>
    <li><router-link to="/browse/shop/sketches">Sketches</router-link></li>
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
