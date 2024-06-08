<template>
  <section class="space-y-10">
    <h4 class="text-h4">Checkout</h4>
    <div class="text-center justify-around flex">
      <p class="text-body1">Order summary</p>
      <p>${{ totalPriceCount }}.00</p>
    </div>
    <div>
      <form @submit.prevent="getFormValues" class="space-y-2 mt-4 text-subtitle1">
        <h5 class="text-h5">Contact information</h5>
        <div class="flex flex-col email-form">
          <label for="email" class="mb-2">Email address</label>
          <input
            class="border-2 h-12 rounded-lg border-slate-gray"
            type="email"
            name="email"
            required
          />
        </div>
        <h5 class="text-h5">Shipping address</h5>
        <div class="flex flex-col">
          <label for="country" class="mb-2">Country</label>
          <input
            class="border-2 h-12 rounded-lg border-slate-gray"
            type="text"
            name="country"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="first_name" class="mb-2">First name</label>
          <input
            class="border-2 h-12 rounded-lg border-slate-gray"
            type="text"
            name="first_name"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="last_name" class="mb-2">Last name</label>
          <input
            class="border-2 h-12 rounded-lg border-slate-gray"
            type="text"
            name="last_name"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="address" class="mb-2">Address</label>
          <input
            class="border-2 h-12 rounded-lg border-slate-gray"
            type="text"
            name="address"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="appartment" class="mb-2">Apartment number, suite, etc (optional)</label>
          <input class="border-2 h-12 rounded-lg border-slate-gray" type="text" name="appartment" />
        </div>
        <div class="flex flex-col">
          <label for="city" class="mb-2">City</label>
          <input
            class="border-2 h-12 rounded-lg border-slate-gray"
            type="text"
            name="city"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="state" class="mb-2">State / Province</label>
          <input
            class="border-2 h-12 rounded-lg border-slate-gray"
            type="text"
            name="state"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="postal_code" class="mb-2">Postal code</label>
          <input
            class="border-2 h-12 rounded-lg border-slate-gray"
            type="text"
            name="postal_code"
            required
          />
        </div>
        <div class="text-center bg-resoultion-blue rounded-3xl confirm_button">
          <button @click="this.nextCheckoutStep" type="submit" class="text-white text-button py-3">
            Next
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    productParsedForCart: Object,
    totalPriceCount: Number,
    nextCheckoutStep: Function
  },
  data() {
    return {
      clientInfo: {
        email: '',
        country: '',
        first_name: '',
        last_name: '',
        address: '',
        appartment: '',
        city: '',
        state: '',
        postal_code: ''
      }
    }
  },
  methods: {
    getFormValues(submitEvent) {
      const { elements } = submitEvent.target
      this.clientInfo.email = elements.email.value
      this.clientInfo.country = elements.country.value
      this.clientInfo.first_name = elements.first_name.value
      this.clientInfo.last_name = elements.last_name.value
      this.clientInfo.address = elements.address.value
      this.clientInfo.appartment = elements.appartment.value
      this.clientInfo.city = elements.city.value
      this.clientInfo.state = elements.state.value
      this.clientInfo.postal_code = elements.postal_code.value
      localStorage.setItem('personalInfo', JSON.stringify(this.clientInfo))
    }
  }
}
</script>

<style>
.confirm_button {
  margin-top: 40px !important;
}

.email-form {
  margin-bottom: 24px !important;
}
</style>
