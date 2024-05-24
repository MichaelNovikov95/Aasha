<template>
  <div class="flex space-x-2 text-subtitle1" @click="openToggle">
    <p>Category</p>
    <img src="@/assets/svg/chevron.svg" alt="Category_dropdown-menu" />
  </div>
  <ul class="text-body1" v-if="isOpen">
    <li><router-link to="/category/physicalMerch">Physical merch</router-link></li>
    <li><router-link to="/category/digitalMerch">Digital merch</router-link></li>
    <li><router-link to="/category/comissions">Comissions</router-link></li>
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
