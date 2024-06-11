<template>
  <section class="py-10 lg:py-16 px-6 lg:px-44">
    <div class="flex items-center text-body1 space-x-4">
      <span @click="goHome">Home</span>
      <img src="../assets/svg/line.svg" alt="line" />
      <span @click="goBack">Catalogue</span>
      <img src="../assets/svg/line.svg" alt="line" />
      <span>{{ this.card?.name }}</span>
    </div>
    <div class="lg:flex lg:justify-between">
      <div>
        <img
          :src="this.card?.image_src"
          :alt="this.card?.name"
          loading="lazy"
          class="lg:h-[528px] w-[528px]"
        />
        <div v-if="this.card?.more_images" class="flex justify-center lg:justify-normal space-x-5">
          <ul v-for="image in this.card?.more_images" :key="image.id" class="w-24 h-20">
            <img :src="image" alt="" class="w-full" loading="lazy" />
          </ul>
        </div>
      </div>
      <div class="space-y-6 mt-10">
        <h4 class="text-h4">{{ this.card?.name }}</h4>
        <h5 class="text-h5" v-if="this.card?.category !== 'prints'">${{ this.card?.price }}.00</h5>
        <h5 v-else class="text-h5">
          ${{ this.checkedSize === 'large' ? this.card?.price[0] : this.card?.price[1] }}.00
        </h5>
        <PrintSizeCheckbox
          v-if="this.card?.category === 'prints'"
          @checkedSize="(msg) => (checkedSize = msg)"
        />
        <button
          @click="addToCart"
          class="bg-resoultion-blue w-full rounded-lg flex items-center justify-center relative lg:w-[448px]"
        >
          <p class="text-button text-white py-3">Add to cart</p>
          <img src="../assets/svg/arrow.svg" alt="arrow" class="absolute right-4" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import PrintSizeCheckbox from './PrintSizeCheckbox.vue'
export default {
  components: {
    PrintSizeCheckbox
  },
  data() {
    return {
      card: null,
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      checkedSize: 'large',
      price: 0
    }
  },
  mounted() {
    this.fetchOneProduct()
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    goHome() {
      this.$router.go(-2)
    },
    choosenPrice() {
      if (this.checkedSize === 'large') {
        this.price = this.card.price[0]
      } else {
        this.price = this.card.price[1]
      }
    },
    addToCart() {
      this.choosenPrice()
      const pushedCardIntoCart = {
        image_src: this.card.image_src,
        name: this.card.name,
        price: this.price ?? this.card.price
      }
      this.cart.push(pushedCardIntoCart)
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    async fetchOneProduct() {
      try {
        const data = await fetch(`http://localhost:3002${this.$route.path}`)
        const fetchedCard = await data.json()
        this.card = fetchedCard
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>

<style></style>
