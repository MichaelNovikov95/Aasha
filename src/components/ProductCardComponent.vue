<template>
  <div class="card" @click="getElementId">
    <div class="price_card bg-glaucous rounded w-16">
      <p class="text-subtitle2 text-cosmic-latte px-2.5 py-1">${{ price }}.00</p>
    </div>
    <div class="flex justify-center">
      <img :src="image_src" alt="Product image" loading="lazy" class="image_card w-full" />
    </div>
    <div>
      <p class="mt-4 text-subtitle1">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'id', 'image_src', 'category'],
  methods: {
    getElementId() {
      this.$router.push(`/shop/${this.category}/${this.id}`)
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  width: 156px;
  height: 316px;
  border-radius: 8px;
  border-color: slategray;
  border-width: 1px;
  margin-bottom: 40px;
  padding: 8px;
  box-shadow: 0px 4px 4px rgba(25, 33, 61, 0.25);
}
.card:last-child {
  margin-bottom: 0px;
}
.price_card {
  position: absolute;
  right: 9px;
  top: 15px;
}
.image_card {
  padding-top: 25px;
}
</style>
