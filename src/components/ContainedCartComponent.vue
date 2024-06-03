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

      <RouterLink
        to="/shop/cart/checkout"
        class="text-button text-white w-full bg-resoultion-blue py-3 rounded-lg"
      >
        Checkout
      </RouterLink>
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
    cart: Object
  },
  data() {
    return {
      productToRemove: ''
    }
  },
  computed: {
    productParsedForCart() {
      const result = Object.values(
        this.cart.reduce((r, { image_src, name, price }) => {
          r[name] ??= { image_src, name, count: 0, totalPrice: 0 }
          r[name].count++
          r[name].totalPrice += price
          return r
        }, {})
      )
      return result
    },
    totalPriceCount() {
      let total = 0
      this.productParsedForCart.forEach((product) => {
        total += product.totalPrice
      })
      return total
    }
  },
  watch: {
    productToRemove(newProductToRemove) {
      this.$emit('productToRemove', newProductToRemove)
    }
  }
}
</script>
