<template>
  <div v-if="this.cart.length === 0">
    <EmptyCartComponent />
  </div>
  <div v-else>
    <ContainedCartComponent
      :cart="this.cart ?? []"
      @productToRemove="(msg) => (productToRemove = msg)"
      :productParsedForCart="productParsedForCart"
      :totalPriceCount="totalPriceCount"
      :nextCheckoutStep="nextCheckoutStep"
    />
  </div>
</template>

<script>
import EmptyCartComponent from '../EmptyCartComponent.vue'
import ContainedCartComponent from '../ContainedCartComponent.vue'
export default {
  emits: ['productToRemove'],
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
  components: {
    EmptyCartComponent,
    ContainedCartComponent
  },
  watch: {
    productToRemove(newProductToRemove) {
      this.$emit('productToRemove', newProductToRemove)
    }
  }
}
</script>
