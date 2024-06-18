<template>
  <section class="py-10 lg:py-16 px-6 lg:px-44">
    <div class="flex items-center text-body1 space-x-4">
      <span @click="goHome" class="cursor-pointer">Home</span>
      <img src="../assets/svg/line.svg" alt="line" />
      <span @click="goBack" class="cursor-pointer">Catalogue</span>
      <img src="../assets/svg/line.svg" alt="line" />
      <span class="cursor-not-allowed">{{ this.card?.name.slice(0, 8) }}...</span>
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
      <div class="lg:max-w-[448px] space-y-6 mt-10">
        <h4 class="text-h4">{{ this.card?.name }}</h4>
        <ul class="text-body1">
          <li v-for="description in this.card?.description" :key="description">
            - {{ description }}
          </li>
        </ul>
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
        </button>
        <div :class="{ active: !productAdd }">
          <p class="success_msg">Product added to cart!</p>
        </div>
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
      price: 0,
      productAdd: false
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
      this.productAdded()
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
        const data = await fetch(`https://aasha-server.onrender.com${this.$route.path}`)
        const fetchedCard = await data.json()
        this.card = fetchedCard
      } catch (error) {
        console.log(error.message)
      }
    },
    productAdded() {
      this.productAdd = true
      setTimeout(() => {
        this.productAdd = false
      }, 1000)
    }
  }
}
</script>

<style>
.active {
  display: none;
}
.success_msg {
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  color: #270;
  background-color: #dff2bf;
}
</style>
