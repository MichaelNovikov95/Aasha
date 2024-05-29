<template>
  <section>
    <div>
      <span @click="goHome">Home</span> - <span @click="goBack">Catalogue</span> -
      <span>{{ this.card?.name }}</span>
    </div>
    <div>
      <img :src="this.card?.image_src" :alt="this.card?.name" loading="lazy" />
      <div v-if="this.card?.additional_image"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      card: null
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
