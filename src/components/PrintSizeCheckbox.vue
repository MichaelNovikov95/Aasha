<template>
  <div>
    <fieldset class="overflow-hidden h-38">
      <div class="flex relative items-center z-10 bg-white" @click="show = !show">
        <legend class="text-button text-resoultion-blue border-2 rounded-lg w-full py-3 pl-4">
          Select Variant
        </legend>
        <img src="../assets/svg/arrow.svg" alt="arrow" class="absolute right-4 rotate-90" />
      </div>
      <Transition>
        <div v-if="show">
          <div class="text-resoultion-blue border-y-0 border-x-2 rounded-lg w-full py-3 pl-4">
            <input
              type="radio"
              id="large"
              name="print"
              value="large"
              checked
              v-model="checkedSize"
            />
            <label for="large" class="text-body1 ml-2">Large</label>
          </div>
          <div class="text-resoultion-blue border-2 rounded-lg w-full py-3 pl-4">
            <input type="radio" id="small" name="print" value="small" v-model="checkedSize" />
            <label for="small" class="text-body1 ml-2">Small</label>
          </div>
        </div>
      </Transition>
    </fieldset>
  </div>
</template>

<script>
export default {
  emits: ['checkedSize'],
  data() {
    return {
      checkedSize: 'large',
      show: false
    }
  },
  watch: {
    checkedSize(newCheckedSize, oldCheckedSize) {
      if (newCheckedSize !== oldCheckedSize) {
        this.$emit('checkedSize', newCheckedSize)
      }
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
}
</style>
