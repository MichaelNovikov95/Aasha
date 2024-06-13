<template>
  <ServerError v-if="error !== ''" />
  <section v-if="error === ''" class="px-6 lg:px-16 pt-6 pb-14 mt-6 lg:mt-20">
    <ModalComponent @choosenCategory="(msg) => (choosenCategory = msg)" />
    <div>
      <LoaderComponent v-if="isLoading" />
    </div>
    <div class="flex" v-if="!isLoading">
      <aside class="hidden lg:flex mr-8 lg:w-72">
        <ProductsFilterComponent @choosenCategory="(msg) => (choosenCategory = msg)" />
      </aside>
      <div class="container text-center lg:text-left">
        <ProductCardComponent
          v-for="card in filteredCards()"
          :key="card.id"
          :id="card.id"
          :price="card.price"
          :category="card.category"
          :name="card.name"
          :image_src="card.image_src"
          :fandom="card.fandom"
        />
      </div>
    </div>
    <div class="flex space-x-2 justify-center">
      <button
        class="border-2 rounded-lg py-2 px-4 text-button"
        v-if="page > 1"
        @click="page = page - 1"
      >
        Prev
      </button>
      <button
        class="border-2 rounded-lg py-2 px-4 text-button"
        v-if="hasNextPage"
        @click="page = page + 1"
      >
        Next
      </button>
    </div>
  </section>
</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import ModalComponent from '@/components/ProductFilter&ModalFilter/ModalComponent.vue'
import ProductsFilterComponent from '@/components/ProductFilter&ModalFilter/ProductsFilterComponent.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'
import ServerError from '@/views/ServerError.vue'
export default {
  components: {
    ProductCardComponent,
    ModalComponent,
    ProductsFilterComponent,
    LoaderComponent,
    ServerError
  },
  props: ['title'],
  data() {
    return {
      cards: null,
      choosenCategory: '',
      page: 1,
      error: '',
      hasNextPage: true,
      isLoading: false
    }
  },
  mounted() {
    this.fetchCards()
  },
  methods: {
    async fetchCards() {
      try {
        this.isLoading = true
        const data = await fetch('https://aasha-server.onrender.com/shop')
        const fetchedCards = await data.json()
        this.cards = fetchedCards
      } catch (error) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    },
    filteredCards() {
      const start = (this.page - 1) * 8
      const end = this.page * 8
      const filteredCards = this.cards?.filter((card) =>
        card.category.includes(this.choosenCategory)
      )

      this.hasNextPage = filteredCards?.length > end

      return filteredCards?.slice(start, end)
    }
  },
  watch: {
    choosenCategory(newChoosenCategory, oldChoosenCategory) {
      if (newChoosenCategory !== oldChoosenCategory) {
        this.page = 1
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
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
