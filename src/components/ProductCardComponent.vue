<template>
  <div
    class="relative w-[156px] lg:min-w-[285px] lg:max-w-[304px] h-[316px] lg:h-[392px] border shadow-[0px_4px_4px_rgba(25,33,61,0.25)] mb-10 lg:mb-14 p-2 rounded-lg border-[slategray]"
    @click="getElementId"
  >
    <div class="price_card bg-glaucous rounded w-16 lg:text-center">
      <p class="text-subtitle2 text-cosmic-latte px-2.5 py-1">${{ price[0] ?? price }}.00</p>
    </div>
    <div class="flex justify-center">
      <v-lazy-image
        :src="image_src"
        :src-placeholder="small_image_src"
        alt="Product image"
        loading="lazy"
        class="image_card w-full h-40 lg:h-72"
      />
    </div>
    <div class="mt-4 pb-4 lg:ml-6">
      <p class="text-subtitle1">{{ name }}</p>
      <p class="mt-2 text-body1">{{ fandom }}</p>
    </div>
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image'
export default {
  components: { VLazyImage },
  props: ['name', 'price', 'id', 'image_src', 'category', 'fandom', 'small_image_src'],
  methods: {
    getElementId() {
      this.$router.push(`/shop/${this.category}/${this.id}`)
    }
  }
}
</script>

<style scoped>
.desktop-card {
  position: relative;
  width: 304px;
  height: 309px;
}

.card:last-child {
  margin-bottom: 0px;
}
.price_card {
  position: absolute;
  right: 9px;
  top: 15px;
  z-index: 10;
}
.image_card {
  padding-top: 25px;
}
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
