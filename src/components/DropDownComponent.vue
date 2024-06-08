<template>
  <Transition name="DropDownComponent"
    ><div
      v-if="show"
      class="flex fixed left-0 top-0 bottom-0 bg-white w-screen scroll-none overflow-y-hidden p-5 justify-between"
    >
      <div @click="$emit('close')"><img src="../assets/svg/x.svg" alt="Exit icon" /></div>
      <div class="w-full">
        <fieldset class="overflow-hidden w-full mt-10 border-2 rounded-lg">
          <div class="flex relative items-center z-10 bg-white" @click="showOptions = !showOptions">
            <legend class="text-button text-resoultion-blue w-full py-3 pl-4">Products</legend>
            <img src="../assets/svg/arrow.svg" alt="arrow" class="absolute right-4 rotate-90" />
          </div>
          <Transition>
            <div v-if="showOptions">
              <div class="text-resoultion-blue w-full py-3 pl-4">
                <input
                  type="radio"
                  id="prints"
                  name="print"
                  value="prints"
                  v-model="choosenCategory"
                />
                <label for="prints" class="text-body1 ml-2">Prints</label>
              </div>
              <div class="text-resoultion-blue w-full py-3 pl-4">
                <input
                  type="radio"
                  id="stickers"
                  name="print"
                  value="stickers"
                  v-model="choosenCategory"
                />
                <label for="stickers" class="text-body1 ml-2">Stickers</label>
              </div>
              <div class="text-resoultion-blue w-full py-3 pl-4">
                <input type="radio" id="pins" name="print" value="pins" v-model="choosenCategory" />
                <label for="pins" class="text-body1 ml-2">Pins/charms</label>
              </div>
              <div class="text-resoultion-blue w-full py-3 pl-4">
                <input
                  type="radio"
                  id="books"
                  name="print"
                  value="books"
                  v-model="choosenCategory"
                />
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

      <div><button class="text-button h-10" @click="$emit('close')">Apply</button></div>
    </div>
  </Transition>
</template>

<script>
export default {
  emits: ['choosenCategory'],
  props: {
    show: Boolean
  },
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
