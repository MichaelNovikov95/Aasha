<template>
  <div class="w-full">
    <fieldset class="overflow-hidden w-full mt-10">
      <div
        class="flex relative items-center z-10 bg-white border-2 rounded-lg"
        @click="showOptions = !showOptions"
        :class="{ active: showOptions }"
      >
        <legend class="text-button text-resoultion-blue w-full py-3 pl-4">Products</legend>
        <img src="../../assets/svg/arrow.svg" alt="arrow" class="absolute right-4 rotate-90" />
      </div>
      <Transition>
        <div v-if="showOptions" class="border-2 rounded-b-lg">
          <div class="text-resoultion-blue w-full py-3 pl-4 border-b-2">
            <input type="radio" id="prints" name="print" value="prints" v-model="choosenCategory" />
            <label for="prints" class="text-body1 ml-2">Prints</label>
          </div>
          <div class="text-resoultion-blue w-full py-3 pl-4 border-b-2">
            <input
              type="radio"
              id="stickers"
              name="print"
              value="stickers"
              v-model="choosenCategory"
            />
            <label for="stickers" class="text-body1 ml-2">Stickers</label>
          </div>
          <div class="text-resoultion-blue w-full py-3 pl-4 border-b-2">
            <input type="radio" id="pins" name="print" value="pins" v-model="choosenCategory" />
            <label for="pins" class="text-body1 ml-2">Pins/charms</label>
          </div>
          <div class="text-resoultion-blue w-full py-3 pl-4 border-b-2">
            <input type="radio" id="books" name="print" value="books" v-model="choosenCategory" />
            <label for="books" class="text-body1 ml-2">Books</label>
          </div>
          <div class="text-resoultion-blue w-full py-3 pl-4">
            <input type="radio" id="reset" name="print" value="" v-model="choosenCategory" />
            <label for="reset" class="text-body1 ml-2">Reset</label>
          </div>
        </div>
      </Transition>
    </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOptions: false,
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
.active {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
