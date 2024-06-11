<template>
  <section class="px-6 lg:px-16 pt-6 pb-14 mt-6 lg:mt-20">
    <ModalComponent @choosenCategory="(msg) => (choosenCategory = msg)" />
    <container class="flex">
      <aside class="hidden lg:flex mr-8 lg:w-72">
        <ProductsFilterComponent @choosenCategory="(msg) => (choosenCategory = msg)" />
      </aside>
      <div class="container text-center lg:text-left" v-if="this.choosenCategory !== ''">
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
      <div class="container text-center lg:text-left" v-else>
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
    </container>
  </section>
</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import ModalComponent from '@/components/ProductFilter&ModalFilter/ModalComponent.vue'
import ProductsFilterComponent from '@/components/ProductFilter&ModalFilter/ProductsFilterComponent.vue'
export default {
  components: {
    ProductCardComponent,
    ModalComponent,
    ProductsFilterComponent
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
}
@media (max-width: 1023px) {
  .container {
    justify-content: space-around;
  }
}

@media (min-width: 1023px) {
  .container {
    justify-content: center;
    max-width: 1315px;
    column-gap: 32px;
  }
  .container > * {
    flex: 0 0 30%;
  }
}
.filter_container {
  display: flex;
  flex-direction: row-reverse;
}
</style>
