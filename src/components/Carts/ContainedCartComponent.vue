<template>
  <h4 class="text-h4 text-center">Cart</h4>
  <div class="lg:flex text-center space-y-10 lg:space-y-0 lg:mt-16">
    <div
      class="lg:flex lg:flex-col lg:flex-1 lg mt-16 lg:mt-0 divide-y divide-cadet-gray space-y-5"
    >
      <div v-for="product in productParsedForCart" :key="product.key">
        <ProductCartComponent
          :image_src="product.image_src"
          :count="product.count"
          :name="product.name"
          :totalPrice="product.totalPrice"
          @productToRemove="(msg) => (productToRemove = msg)"
          @increaseCountByName="(msg) => (increaseCountByName = msg)"
          @decreaseCountByName="(msg) => (decreaseCountByName = msg)"
        />
      </div>
    </div>
    <div
      class="flex lg:h-[195px] lg:w-[304px] flex-col justify-center space-y-6 lg:border-2 lg:rounded-lg lg:p-7 lg:ml-8"
    >
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
  emits: ['productToRemove', 'decreaseCountByName', 'increaseCountByName'],
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
      productToRemove: '',
      decreaseCountByName: '',
      increaseCountByName: ''
    }
  },
  watch: {
    productToRemove(newProductToRemove) {
      this.$emit('productToRemove', newProductToRemove)
    },
    decreaseCountByName(newDecreaseCountByName) {
      this.$emit('decreaseCountByName', newDecreaseCountByName)
    },
    increaseCountByName(newIncreaseCountByName) {
      this.$emit('increaseCountByName', newIncreaseCountByName)
    }
  }
}
</script>
