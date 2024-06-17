<template>
  <div v-if="this.cart.length === 0">
    <EmptyCartComponent />
  </div>
  <div v-else>
    <ContainedCartComponent
      :cart="this.cart ?? []"
      @productToRemove="(msg) => (productToRemove = msg)"
      @increaseCountByName="(msg) => (increaseCountByName = msg)"
      @decreaseCountByName="(msg) => (decreaseCountByName = msg)"
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
  emits: ['productToRemove', 'decreaseCountByName', 'increaseCountByName'],
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
  components: {
    EmptyCartComponent,
    ContainedCartComponent
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
