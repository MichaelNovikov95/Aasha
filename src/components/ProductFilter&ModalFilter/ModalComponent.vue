<template>
  <div @click="showFilters = true" class="flex justify-end">
    <img class="lg:hidden" src="@/assets/svg/filters.svg" alt="Filters icon" />
  </div>
  <Teleport to="body">
    <DropDownComponent
      :show="showFilters"
      @close="showFilters = false"
      @choosenCategory="(msg) => (choosenCategory = msg)"
    />
  </Teleport>
</template>

<script>
import DropDownComponent from './DropDownComponent.vue'
export default {
  emits: ['choosenCategory'],
  components: {
    DropDownComponent
  },
  data() {
    return {
      showFilters: false,
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
