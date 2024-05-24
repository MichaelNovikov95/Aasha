<template>
  <header>
    <div class="flex p-6 justify-between">
      <span class="cursor-pointer"><img src="../assets/svg/Aasha.svg" alt="Logo" /></span>
      <div class="flex flex-wrap space-x-2 content-end">
        <span class="cursor-pointer"><img src="../assets/svg/pers.svg" alt="Person icon" /></span>
        <span class="cursor-pointer"><img src="../assets/svg/cart.svg" alt="Cart icon" /></span>
        <span class="cursor-pointer" @click="toggle"
          ><img src="../assets/svg/burger_menu.svg" alt="Burger_menu icon"
        /></span>
      </div>
    </div>
  </header>
  <ModalComponent :show="active" @close="toggle" />
</template>

<script>
import ModalComponent from './ModalComponent.vue'
export default {
  components: { ModalComponent },
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  }
}
</script>
