<template>
  <div class="h-80 space-y-12 shadow-[0px_15px_40px_-20px_rgba(117,118,185,0.6)] last:shadow-none">
    <div class="bg-glaucous rounded w-16 mt-4 ml-4">
      <p class="text-subtitle2 text-cosmic-latte px-2.5 py-1">${{ price }}.00</p>
    </div>
    <div class="flex justify-center">
      <img
        src="@/assets/svg/default_img.svg"
        alt="Product image"
        class="w-44 h-44 shadow-[9px_17px_20px_0px_rgba(117,118,185,0.6)]"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['price']
}
</script>
