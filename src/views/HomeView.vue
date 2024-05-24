<script>
import HeroComponent from '../components/HeroComponent.vue'
import ProductsComponent from '../components/ProductsComponent.vue'
import MailComponent from '../components/MailComponent.vue'
export default {
  components: {
    HeroComponent,
    ProductsComponent,
    MailComponent
  }
}
</script>

<template>
  <HeroComponent />
  <ProductsComponent title="Prints" />
  <MailComponent />
  <ProductsComponent title="Stickers / pins" />
</template>
