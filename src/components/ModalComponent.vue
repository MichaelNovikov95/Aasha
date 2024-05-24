<template>
  <Transition name="slide-fade"
    ><div
      v-if="show"
      class="flex fixed left-0 top-0 bottom-0 bg-white w-screen scroll-none overflow-y-hidden p-5 justify-between"
    >
      <DropDownComponent />
      <div @click="$emit('close')"><img src="../assets/svg/x.svg" alt="Exit icon" /></div>
    </div>
  </Transition>
</template>

<script>
import DropDownComponent from './DropDownComponent.vue'
export default {
  components: { DropDownComponent },
  props: {
    show: Boolean
  },
  data() {
    return {
      activeText: false
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
