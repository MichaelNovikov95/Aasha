<template>
  <section class="space-y-10 lg:w-[640px]">
    <h4 class="text-h4 text-">Checkout</h4>
    <div class="lg:hidden text-center justify-around flex">
      <p class="text-body1">Order summary</p>
      <p>${{ totalPriceCount }}.00</p>
    </div>
    <div>
      <form @submit.prevent="getFormValues" class="space-y-2 mt-4 text-subtitle1">
        <h5 class="text-h5">Contact information</h5>
        <div class="flex flex-col email-form">
          <label for="email" class="mb-2">Email address</label>
          <input
            class="border-2 pl-2 h-12 rounded-lg border-slate-gray"
            type="email"
            name="email"
            required
          />
        </div>
        <h5 class="text-h5">Shipping address</h5>
        <div class="flex flex-col">
          <label for="country" class="mb-2">Country</label>
          <input
            class="border-2 pl-2 h-12 rounded-lg border-slate-gray"
            type="text"
            name="country"
            required
          />
        </div>
        <div class="lg:flex lg:space-x-8">
          <div class="flex lg:flex-1 flex-col">
            <label for="first_name" class="mb-2">First name</label>
            <input
              class="border-2 pl-2 h-12 rounded-lg border-slate-gray"
              type="text"
              name="first_name"
              required
            />
          </div>
          <div class="flex lg:flex-1 flex-col">
            <label for="last_name" class="mb-2">Last name</label>
            <input
              class="border-2 pl-2 h-12 rounded-lg border-slate-gray"
              type="text"
              name="last_name"
              required
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label for="address" class="mb-2">Address</label>
          <input
            class="border-2 pl-2 h-12 rounded-lg border-slate-gray"
            type="text"
            name="address"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="appartment" class="mb-2">Apartment number, suite, etc (optional)</label>
          <input
            class="border-2 pl-2 h-12 rounded-lg border-slate-gray"
            type="text"
            name="appartment"
          />
        </div>
        <div class="lg:flex lg:space-x-8">
          <div class="flex lg:flex-1 flex-col">
            <label for="city" class="mb-2">City</label>
            <input
              class="border-2 pl-2 h-12 rounded-lg border-slate-gray"
              type="text"
              name="city"
              required
            />
          </div>
          <div class="flex lg:flex-1 flex-col">
            <label for="state" class="mb-2">State / Province</label>
            <input
              class="border-2 pl-2 h-12 rounded-lg border-slate-gray"
              type="text"
              name="state"
              required
            />
          </div>
          <div class="flex lg:flex-1 flex-col">
            <label for="postal_code" class="mb-2">Postal code</label>
            <input
              class="border-2 pl-2 h-12 rounded-lg border-slate-gray"
              type="text"
              name="postal_code"
              required
            />
          </div>
        </div>
        <div type="submit" class="text-center bg-resoultion-blue rounded-3xl confirm_button">
          <button class="text-white text-button py-3">Next</button>
        </div>
        <div v-if="this.error !== ''">
          <p class="error_msg text-body1">{{ this.error }} should not be empty. Please, check it</p>
        </div>
      </form>
      <button @click="sendPay">Send req</button>
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
      },
      error: ''
    }
  },
  methods: {
    async sendPay() {
      try {
        const response = await fetch('https://aasha-server.onrender.com/shop/cart/charge', {
          method: 'POST',
          body: JSON.stringify(this.productParsedForCart),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const { url } = await response.json()
        console.log(url)
        window.location = url
      } catch (error) {
        console.log(error.message)
      }
    },

    moveForward() {
      setTimeout(() => {
        this.$emit('clientInfo', this.clientInfo)
        if (this.error === '') this.nextCheckoutStep()
      }, 0)
    },
    getFormValues(submitEvent) {
      const { elements } = submitEvent.target

      if (!this.emailValidation(elements.email.value)) return (this.error = 'email')
      this.clientInfo.email = elements.email.value

      if (!this.stringsValidation(elements.country.value)) return (this.error = 'country')
      this.clientInfo.country = elements.country.value

      if (!this.stringsValidation(elements.first_name.value)) return (this.error = 'First name')
      this.clientInfo.first_name = elements.first_name.value

      if (!this.stringsValidation(elements.last_name.value)) return (this.error = 'Last name')
      this.clientInfo.last_name = elements.last_name.value

      if (!this.stringsValidation(elements.address.value)) return (this.error = 'Address')
      this.clientInfo.address = elements.address.value

      this.clientInfo.appartment = elements.appartment.value

      if (!this.stringsValidation(elements.city.value)) return (this.error = 'City')
      this.clientInfo.city = elements.city.value

      if (!this.stringsValidation(elements.state.value)) return (this.error = 'State')
      this.clientInfo.state = elements.state.value

      if (!this.stringsValidation(elements.postal_code.value)) return (this.error = 'Postal Code')
      this.clientInfo.postal_code = elements.postal_code.value

      this.moveForward()
    },
    emailValidation(email) {
      return String(email)
        .toLowerCase()
        .trim()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    },
    stringsValidation(string) {
      return String(string).toLowerCase().trim()
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

.error_msg {
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  color: #d8000c;
  background-color: #ffbaba;
}
</style>
