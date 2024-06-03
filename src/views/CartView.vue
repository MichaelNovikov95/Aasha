<template>
  <section class="px-6 empty-container">
    <div v-if="cart.length === 0">
      <EmptyCartComponent />
    </div>
    <div v-else>
      <ContainedCartComponent :cart="cart" @productToRemove="(msg) => removeProduct(msg)" />
    </div>
  </section>
</template>

<script>
import EmptyCartComponent from '../components/EmptyCartComponent.vue'
import ContainedCartComponent from '../components/ContainedCartComponent.vue'

export default {
  emits: ['productToRemove'],
  components: {
    EmptyCartComponent,
    ContainedCartComponent
  },
  data() {
    return {
      productToRemove: '',
      cart: JSON.parse(localStorage.getItem('cart')) || []
    }
  },
  watch: {
    cart(newCart) {
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  },
  methods: {
    removeProduct(name) {
      const renewedCart = JSON.parse(localStorage.getItem('cart')).filter(
        (product) => product.name !== name
      )
      this.cart = renewedCart
    }
  }
}
</script>

<style>
.empty-container {
  padding-top: 80px;
  padding-bottom: 148px;
}
</style>
