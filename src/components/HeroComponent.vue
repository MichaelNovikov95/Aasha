<template>
  <section class="bg-hero-pattern bg-origin-content">
    <div class="w-full px-6 lg:px-16 py-20">
      <div class="lg:flex p-10 lg:p-20 rounded-2xl bg-white lg:justify-center">
        <div class="lg:max-w-2xl text-center space-y-5">
          <h4 class="text-h4">Exclusive Artist Creations: Dive into Unique Merchandise!</h4>
          <p class="text-body1 font-normal">
            Each piece of merchandise is a masterpiece in its own right, born from the imagination
            and talent of our artists. Explore our curated selection and find the perfect addition
            to your personal collection.
          </p>
          <div class="w-60 lg:w-64 mx-auto border-2 rounded-lg border-slate-gray">
            <RouterLink class="text-button font-medium" to="/shop">
              <span class="flex justify-center py-3 space-x-2">
                Browse all
                <img src="@/assets/svg/arrow.svg" alt=""
              /></span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
