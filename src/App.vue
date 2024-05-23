<script>
export default {
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

<template>
  <header>
    <div class="flex p-6 justify-between">
      <span><img src="./assets/svg/Aasha.svg" alt="Logo" /></span>
      <div class="flex flex-wrap space-x-2 content-end">
        <span><img src="./assets/svg/pers.svg" alt="Person icon" /></span>
        <span><img src="./assets/svg/cart.svg" alt="Cart icon" /></span>
        <span><img src="./assets/svg/burger_menu.svg" alt="Burger_menu icon" /></span>
      </div>
    </div>
  </header>
  <section class="bg-hero-pattern">
    <div class="px-6 py-10 rounded-2xl">
      <div class="text-center space-y-5 justify-center p-10">
        <h4 class="text-h4">Exclusive Artist Creations: Dive into Unique Merchandise!</h4>
        <p class="text-body1 font-normal">
          Each piece of merchandise is a masterpiece in its own right, born from the imagination and
          talent of our artists. Explore our curated selection and find the perfect addition to your
          personal collection.
        </p>
        <div class="border-2 rounded-lg border-slate-gray">
          <span class="flex justify-center py-3 space-x-2">
            <span class="text-button font-medium">Browse all</span>
            <img src="./assets/svg/arrow.svg" alt=""
          /></span>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="text-center space-y-10 justify-center px-6 py-10">
      <h4 class="text-h4">Prints</h4>
      <div
        v-for="card in printsCards"
        :key="card.id"
        class="h-80 space-y-12 shadow-[0px_15px_40px_-20px_rgba(117,118,185,0.6)] last:shadow-none"
      >
        <div class="bg-glaucous rounded w-16 mt-4 ml-4">
          <p class="text-subtitle2 text-cosmic-latte px-2.5 py-1">${{ card.price }}.00</p>
        </div>
        <div class="flex justify-center">
          <img
            src="./assets/svg/default_img.svg"
            alt="Product image"
            class="w-44 h-44 shadow-[9px_17px_20px_0px_rgba(117,118,185,0.6)]"
          />
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="px-6 py-10 space-y-4">
      <h3 class="text-h3 text-center">Mailing list</h3>
      <p class="text-subtitle1">
        Sign up to the mailing list for the latest updates and get special offers with
        once-in-a-lifetime deals
      </p>
      <form class="flex justify-end border-2 border-slate-gray rounded-lg p-2 bg-white">
        <input
          class="text-body1 min-w-52"
          type="email"
          placeholder="Enter your email address"
        /><button class="bg-resoultion-blue text-white rounded-lg">
          <p class="py-3 px-4 text-button">Subscribe</p>
        </button>
      </form>
    </div>
  </section>
  <section>
    <div class="text-center space-y-10 justify-center px-6 py-10">
      <h4 class="text-h4">Stickers / pins</h4>
      <div
        v-for="card in stickersAndPinsCards"
        :key="card.id"
        class="h-80 space-y-12 shadow-[0px_15px_40px_-20px_rgba(117,118,185,0.6)] last:shadow-none"
      >
        <div class="bg-glaucous rounded w-16 mt-4 ml-4">
          <p class="text-subtitle2 text-cosmic-latte px-2.5 py-1">${{ card.price }}.00</p>
        </div>
        <div class="flex justify-center">
          <img
            src="./assets/svg/default_img.svg"
            alt="Product image"
            class="w-44 h-44 shadow-[9px_17px_20px_0px_rgba(117,118,185,0.6)]"
          />
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div class="px-6 py-10 bg-lavender-web space-y-10">
      <div class="flex justify-center text-body1 space-x-5 px-5">
        <a href="">History</a>
        <a href="">FAQ</a>
        <a href="">Policy</a>
        <a href="">Terms of use</a>
      </div>
      <div class="space-y-2">
        <p class="text-subtitle">Mailing list</p>
        <form class="flex justify-between border-2 border-slate-gray rounded-lg p-2 bg-white">
          <input
            class="text-body1 min-w-52"
            type="email"
            placeholder="Enter your email address"
          /><button class="bg-resoultion-blue text-white rounded-lg">
            <p class="py-3 px-4 text-button">Subscribe</p>
          </button>
        </form>
      </div>
      <div class="flex space-x-2 justify-center">
        <span><img src="./assets/svg/twitter.svg" alt="Twitter icon" /></span>
        <span><img src="./assets/svg/youtube.svg" alt="Youtube icon" /></span>
        <span><img src="./assets/svg/instagram.svg" alt="Instagram icon" /></span>
      </div>
      <div class="text-center">
        <hr />
        <p class="text-body mt-3">Copyright © 2024 Aasha shop | All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>
