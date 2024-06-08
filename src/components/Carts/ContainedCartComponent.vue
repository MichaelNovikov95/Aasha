<template>
  <div class="text-center space-y-10">
    <h4 class="text-h4">Cart</h4>
    <div class="mt-16 divide-y divide-cadet-gray space-y-5">
      <div v-for="product in productParsedForCart" :key="product.key">
        <ProductCartComponent
          :image_src="product.image_src"
          :count="product.count"
          :name="product.name"
          :totalPrice="product.totalPrice"
          @productToRemove="(msg) => (productToRemove = msg)"
        />
      </div>
    </div>
    <div class="flex flex-col justify-center space-y-6">
      <div class="flex justify-between">
        <h6 class="text-h6">Subtotal</h6>
        <h6 class="text-h6">${{ totalPriceCount }}.00</h6>
      </div>

      <button
        @click="this.nextCheckoutStep"
        class="text-button text-white w-full bg-resoultion-blue py-3 rounded-lg"
      >
        Checkout
      </button>
      <RouterLink to="/shop" class="text-body1">Continue shopping</RouterLink>
    </div>
  </div>
</template>

<script>
import ProductCartComponent from './ProductCartComponent.vue'
export default {
  emits: ['productToRemove'],
  components: {
    ProductCartComponent
  },
  props: {
    cart: Object,
    productParsedForCart: Object,
    totalPriceCount: Number,
    nextCheckoutStep: Function
  },
  data() {
    return {
      productToRemove: ''
    }
  },
  watch: {
    productToRemove(newProductToRemove) {
      this.$emit('productToRemove', newProductToRemove)
    }
  }
}
</script>
