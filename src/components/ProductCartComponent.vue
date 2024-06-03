<template>
  <div class="flex space-x-4 product-box">
    <img :src="image_src" :alt="name" class="cart-image" />
    <div class="space-y-2 detail">
      <h4 class="text-body1">{{ name }}</h4>
      <h4 class="text-body2">${{ totalPrice / count }}.00</h4>
      <button class="text-body2 underline underline-offset-4" @click="itemToRemove(this.name)">
        Remove
      </button>
    </div>
    <div class="space-y-2.5">
      <p class="border-2 rounded-lg py-1 w-16">{{ count }}</p>
      <p>${{ totalPrice }}.00</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['productToRemove'],
  props: ['image_src', 'name', 'count', 'totalPrice'],
  data() {
    return {
      productToRemove: ''
    }
  },
  methods: {
    itemToRemove(name) {
      this.productToRemove = name
      this.$emit('productToRemove', name)
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
</style>
