<template>
  <div class="flex items-center space-x-4 lg:space-x-0 product-box">
    <div class="flex items-center lg:space-x-5 lg:min-w-[418px] lg:mr-auto">
      <img :src="image_src" :alt="name" class="cart-image lg:h-[152px]" />
      <div class="space-y-2 detail lg:text-left">
        <h4 class="text-body1">{{ name }}</h4>
        <h4 class="text-body2">${{ totalPrice / count }}.00</h4>
        <button
          class="lg:hidden text-body2 underline underline-offset-4"
          @click="itemToRemove(this.name)"
        >
          Remove
        </button>
      </div>
    </div>
    <div class="space-y-2.5 lg:space-y-0 lg:flex lg:items-center lg:space-x-8">
      <div class="flex space-x-4">
        <button @click="decreaseCount(this.name)" :class="{ activeButton: this.count <= 1 }">
          -
        </button>
        <p class="border-2 rounded-lg py-1 lg:py-4 lg:px-9 w-16 lg:w-[80px] lg:h-[56px]">
          {{ count }}
        </p>
        <button @click="increaseCount(this.name)">+</button>
      </div>
      <p class="lg:w-20">${{ totalPrice }}.00</p>
      <img
        class="hidden lg:block border-2 p-4 rounded-full cursor-pointer"
        @click="itemToRemove(this.name)"
        src="../../assets/svg/x.svg"
        alt="remove"
      />
    </div>
  </div>
</template>

<script>
export default {
  emits: ['productToRemove', 'increaseCountByName', 'decreaseCountByName'],
  props: ['image_src', 'name', 'count', 'totalPrice'],
  data() {
    return {
      productToRemove: '',
      increaseCountByName: '',
      decreaseCountByName: '',
      isActive: false
    }
  },
  methods: {
    itemToRemove(name) {
      this.productToRemove = name
      this.$emit('productToRemove', name)
    },
    increaseCount(name) {
      this.increaseCountByName = name
      this.$emit('increaseCountByName', name)
      setTimeout(() => {
        this.$emit('increaseCountByName', '')
      }, 0)
    },
    decreaseCount(name) {
      this.decreaseCountByName = name
      this.$emit('decreaseCountByName', name)
      setTimeout(() => {
        this.$emit('decreaseCountByName', '')
      }, 0)
    },
    toggleButton() {
      if (this.count > 1) {
        return (this.isActive = true)
      } else {
        return (this.isActive = false)
      }
    }
  }
}
</script>

<style>
.product-box {
  margin-top: 20px;
}
.detail {
  width: 156px;
}
.cart-image {
  width: 70px;
  height: 80px;
}
@media (min-width: 1024px) {
  .cart-image {
    width: 152px;
    height: 152px;
  }
}
.activeButton {
  visibility: hidden;
}
</style>
