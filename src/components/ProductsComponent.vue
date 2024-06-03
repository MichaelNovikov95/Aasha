<template>
  <section class="px-6 pt-6 pb-14">
    <ModalComponent @choosenCategory="(msg) => (choosenCategory = msg)" />
    <div class="container text-center" v-if="this.choosenCategory !== ''">
      <ProductCardComponent
        v-for="card in filteredCards"
        :key="card.id"
        :id="card.id"
        :price="card.price"
        :category="card.category"
        :name="card.name"
        :image_src="card.image_src"
        :fandom="card.fandom"
      />
    </div>
    <div class="container text-center" v-else>
      <ProductCardComponent
        v-for="card in cards"
        :key="card.id"
        :id="card.id"
        :price="card.price"
        :category="card.category"
        :name="card.name"
        :image_src="card.image_src"
        :fandom="card.fandom"
      />
    </div>
  </section>
</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
export default {
  components: {
    ProductCardComponent,
    ModalComponent
  },
  props: ['title'],
  data() {
    return {
      cards: null,
      choosenCategory: ''
    }
  },
  mounted() {
    if (this.choosenCategory === '') {
      return this.fetchCards()
    } else {
      this.filteredCards
    }
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
    filteredCards() {
      return this.cards.filter((card) => card.category === this.choosenCategory)
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
