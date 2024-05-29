<template>
  <section class="px-6 pt-6 pb-14">
    <DropDownComponent />
    <div class="container text-center">
      <ProductCardComponent
        v-for="card in cards"
        :key="card.id"
        :id="card.id"
        :price="card.price"
        :category="card.category"
        :name="card.name"
        :image_src="card.image_src"
      />
    </div>
  </section>
</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import DropDownComponent from '@/components/DropDownComponent.vue'
export default {
  components: {
    ProductCardComponent,
    DropDownComponent
  },
  props: ['title'],
  data() {
    return {
      cards: null
    }
  },
  mounted() {
    this.fetchCards()
  },
  methods: {
    async fetchCards() {
      try {
        const data = await fetch('http://localhost:3002/shop')
        const fetchedCards = await data.json()
        this.cards = fetchedCards
      } catch (error) {
        console.log(error.message)
      }
    }
  },
  computed: {
    printsCards() {
      return this.cards.filter((card) => card.category === 'prints')
    },
    stickersAndPinsCards() {
      return this.cards.filter((card) => card.category === 'stickers' || card.category === 'pins')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 24px;
}
.filter_container {
  display: flex;
  flex-direction: row-reverse;
}
</style>
