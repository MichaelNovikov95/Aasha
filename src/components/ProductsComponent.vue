<template>
  <section>
    <div class="text-center space-y-10 justify-center px-6 py-10">
      <h4 class="text-h4">{{ title }}</h4>
      <div v-if="this.title === 'Prints'">
        <ProductCardComponent v-for="card in printsCards" :key="card.id" :price="card.price" />
      </div>
      <div v-else>
        <ProductCardComponent
          v-for="card in stickersAndPinsCards"
          :key="card.id"
          :price="card.price"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'
export default {
  components: {
    ProductCardComponent
  },
  props: ['title'],
  data() {
    return {
      cards: [
        { id: 1, category: 'prints', sub_category: 'large', price: 15 },
        { id: 2, category: 'prints', sub_category: 'small', price: 11 },
        { id: 3, category: 'pins', price: 8 },
        { id: 4, category: 'pins', price: 8 },
        { id: 5, category: 'stickers', price: 4 },
        { id: 6, category: 'prints', sub_category: 'small', price: 11 },
        { id: 7, category: 'prints', sub_category: 'small', price: 11 },
        { id: 8, category: 'stickers', price: 4 },
        { id: 9, category: 'books', price: 45 },
        { id: 10, category: 'prints', sub_category: 'large', price: 15 }
      ]
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
