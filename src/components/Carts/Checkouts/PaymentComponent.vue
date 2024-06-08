<template>
  <h4 class="text-h4">Checkout</h4>
  <div class="border-2 border-slate-gray rounded-lg mt-10 p-6">
    <div class="flex justify-between pb-5 border-b-2 border-cadet-gray">
      <p>Order summary</p>
      <p>${{ totalPriceCount + deliveryPrice }}.00</p>
    </div>
    <div
      v-for="product of this.productParsedForCart"
      :key="product?.name"
      class="flex relative items-center mt-5 justify-between"
    >
      <div
        class="flex items-center justify-center top-0 left-0 absolute bg-slate-gray rounded-full w-5 h-5"
      >
        <p class="text-body2 text-white p-1">{{ product?.count }}</p>
      </div>
      <div class="flex">
        <img :src="product?.image_src" :alt="product?.name" class="w-16 h-16" />
        <div class="ml-2">
          <p class="text-subtitle1">{{ product?.name }}</p>
          <p class="text-body1">${{ product?.totalPrice / product?.count }}.00</p>
        </div>
      </div>
      <div class="ml-9">
        <p class="text-body1">${{ product?.totalPrice }}.00</p>
      </div>
    </div>
    <div class="mt-5 pt-5 pb-5 border-b-2 border-t-2 border-cadet-gray">
      <div class="flex justify-between">
        <p class="text-body1">Subtotal</p>
        <p>${{ totalPriceCount }}.00</p>
      </div>
      <div class="flex justify-between">
        <p class="text-body1">Shipping</p>
        <p>${{ deliveryPrice }}.00</p>
      </div>
    </div>
    <div class="flex justify-between mt-5 items-center">
      <h5 class="text-h5">Total</h5>
      <p>${{ totalPriceCount + deliveryPrice }}.00</p>
    </div>
  </div>
  <div class="border-2 border-slate-gray rounded-lg mt-10 p-6 text-body1">
    <div class="pb-4 border-b-2 border-cadet-gray space-y-4">
      <p>Contact information</p>
      <p>{{ clientInfo.email }}</p>
    </div>
    <div class="mt-4 space-y-4">
      <p>Shipping address</p>
      <p>{{ clientInfo.first_name }}</p>
      <p>{{ clientInfo.last_name }}</p>
    </div>
  </div>
  <div class="mt-10 text-center">
    <h4 class="text-h4">Payment information</h4>
    <form class="mt-4 max-w-xs mx-auto">
      <fieldset class="flex flex-wrap text-subtitle1">
        <div class="flex items-center space-x-2">
          <input
            class="w-5 h-5"
            type="radio"
            name="pay_method"
            id="card"
            value="card"
            checked
            v-model="picked"
          />
          <label for="card">Card</label>
        </div>
        <div class="flex items-center space-x-2 ml-4">
          <input
            class="w-5 h-5"
            type="radio"
            name="pay_method"
            id="google_pay"
            value="google_pay"
            v-model="picked"
            disabled
          />
          <label for="google_pay">Google pay</label>
        </div>
        <div class="flex items-center space-x-2 ml-4">
          <input
            class="w-5 h-5"
            type="radio"
            name="pay_method"
            id="apple_pay"
            value="apple_pay"
            v-model="picked"
            disabled
          />
          <label for="apple_pay">Apple pay</label>
        </div>
        <div class="flex items-center space-x-2 mt-4">
          <input
            class="w-5 h-5"
            type="radio"
            name="pay_method"
            id="paypal"
            value="paypal"
            v-model="picked"
            disabled
          />
          <label for="paypal">PayPal</label>
        </div>
      </fieldset>
    </form>
    <div>
      <form @submit.prevent="getCardValues" class="flex flex-col mt-4 text-subtitle1 space-y-4">
        <div class="flex flex-col items-start space-y-2">
          <label for="card_number">Card number</label>
          <input
            class="w-full border-2 rounded-lg h-12"
            type="text"
            id="card_number"
            name="card_info"
          />
        </div>
        <div class="flex flex-col items-start space-y-2">
          <label for="expiration">Expiration</label>
          <input
            class="w-full border-2 rounded-lg h-12"
            type="data"
            id="expiration"
            name="card_info"
          />
        </div>
        <div class="flex flex-col items-start space-y-2">
          <label for="cvc">CVC</label>
          <input
            class="w-full border-2 rounded-lg h-12"
            type="password"
            id="cvc"
            name="card_info"
          />
        </div>
        <div class="flex flex-col items-start space-y-2">
          <label for="name_on_card">Name on card</label>
          <input
            class="w-full border-2 rounded-lg h-12"
            type="text"
            id="name_on_card"
            name="card_info"
          />
        </div>
        <button
          @click="this.nextCheckoutStep"
          type="submit"
          class="text-center bg-resoultion-blue rounded-3xl confirm_button"
        >
          <p class="text-button text-white py-3">Pay</p>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productParsedForCart: Object,
    totalPriceCount: Number,
    clientInfo: Object,
    nextCheckoutStep: Function
  },
  data() {
    return {
      deliveryPrice: 11,
      picked: 'card',
      cardInfo: {
        cardNumber: '',
        expiration: '',
        cvc: '',
        name_on_card: ''
      }
    }
  },
  methods: {
    getCardValues(submitEvent) {
      const { elements } = submitEvent.target
      this.cardInfo.cardNumber = elements.card_number.value
      this.cardInfo.expiration = elements.expiration.value
      this.cardInfo.cvc = elements.cvc.value
      this.cardInfo.name_on_card = elements.name_on_card.value
    }
  }
}
</script>
