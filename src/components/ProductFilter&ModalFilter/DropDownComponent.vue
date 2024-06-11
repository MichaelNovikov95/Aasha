<template>
  <Transition name="DropDownComponent"
    ><div
      v-if="show"
      class="flex fixed left-0 top-0 bottom-0 bg-white w-screen scroll-none overflow-y-hidden p-5 justify-between"
    >
      <div @click="$emit('close')"><img src="../../assets/svg/x.svg" alt="Exit icon" /></div>
      <ProductsFilterComponent @choosenCategory="(msg) => (choosenCategory = msg)" />
      <div><button class="text-button h-10" @click="$emit('close')">Apply</button></div>
    </div>
  </Transition>
</template>

<script>
import ProductsFilterComponent from './ProductsFilterComponent.vue'
export default {
  components: {
    ProductsFilterComponent
  },
  emits: ['choosenCategory'],
  props: {
    show: Boolean
  },
  data() {
    return {
      choosenCategory: ''
    }
  },
  watch: {
    choosenCategory(newChoosenCategory, oldChoosenCategory) {
      if (newChoosenCategory !== oldChoosenCategory) {
        this.$emit('choosenCategory', newChoosenCategory)
      }
    }
  }
}
</script>

<style>
.DropDownComponent-enter-active {
  transition: all 0.3s ease-out;
}

.DropDownComponent-leave-active {
  transition: all 0.3s ease-out;
}

.DropDownComponent-enter-from,
.DropDownComponent-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
