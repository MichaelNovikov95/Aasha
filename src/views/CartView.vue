<template>
  <section class="px-6 empty-container lg:max-w-[1088px] lg:mr-auto lg:ml-auto">
    <PreCheckoutComponent
      v-if="checkoutStep === 1"
      :cart="cart"
      @productToRemove="(msg) => removeProduct(msg)"
      :productParsedForCart="productParsedForCart"
      :totalPriceCount="totalPriceCount"
      :nextCheckoutStep="nextCheckoutStep"
    />
    <CheckoutComponent
      v-else-if="checkoutStep === 2"
      :productParsedForCart="productParsedForCart"
      :totalPriceCount="totalPriceCount"
      @clientInfo="(msg) => (clientInfo = msg)"
      :nextCheckoutStep="nextCheckoutStep"
    />
    <PaymentComponent
      v-else-if="checkoutStep === 3"
      :productParsedForCart="productParsedForCart"
      :totalPriceCount="totalPriceCount"
      :clientInfo="clientInfo"
      :nextCheckoutStep="nextCheckoutStep"
    />
    <SuccessfulPaymentComponent v-else />
  </section>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue'

import PreCheckoutComponent from '../components/Carts/Checkouts/PreCheckoutComponent.vue'
import CheckoutComponent from '../components/Carts/Checkouts/CheckoutComponent.vue'
import PaymentComponent from '../components/Carts/Checkouts/PaymentComponent.vue'
import SuccessfulPaymentComponent from '../components/Carts/Checkouts/SuccessfulPaymentComponent.vue'

const emit = defineEmits({
  productToRemove: String,
  clientInfo: Object
})

const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])
const checkoutStep = ref(1)
const clietnInfo = {}

function removeProduct(name) {
  const renewedCart = JSON.parse(localStorage.getItem('cart')).filter(
    (product) => product.name !== name
  )
  cart.value = renewedCart
  localStorage.setItem('cart', JSON.stringify(renewedCart))
}

function nextCheckoutStep() {
  checkoutStep.value += 1
}

watchEffect((cart, newCart) => {
  if (newCart !== undefined) localStorage.setItem('cart', JSON.stringify(newCart))
})
watchEffect((checkoutStep, newCheckOutStep) => {
  if (newCheckOutStep?.value === 4) {
    localStorage.clear()
  }
})

const productParsedForCart = computed(() => {
  if (cart.value.length > 0) {
    return Object.values(
      cart.value.reduce((r, { image_src, name, price }) => {
        r[name] ??= { image_src, name, count: 0, totalPrice: 0 }
        r[name].count++
        r[name].totalPrice += price
        return r
      }, {})
    )
  } else {
    return []
  }
})

const totalPriceCount = computed(() => {
  let total = 0
  productParsedForCart.value.forEach((product) => (total += product.totalPrice))
  return total
})
</script>

<style>
.empty-container {
  padding-top: 80px;
  padding-bottom: 148px;
}
</style>
