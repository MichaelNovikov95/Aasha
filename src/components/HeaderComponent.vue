<template>
  <header class="border-b-2 border-b-lavender-web">
    <div class="flex p-6 justify-between">
      <span class="cursor-pointer"><img src="../assets/svg/Aasha.svg" alt="Logo" /></span>
      <div class="flex flex-wrap space-x-2 content-end">
        <span class="cursor-pointer"><img src="../assets/svg/pers.svg" alt="Person icon" /></span>
        <span class="cursor-pointer"><img src="../assets/svg/cart.svg" alt="Cart icon" /></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
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
