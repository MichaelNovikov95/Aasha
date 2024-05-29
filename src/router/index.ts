import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/shop/pins',
      name: 'pins',
      component: ShopView
    },
    {
      path: '/shop/pins/:id',
      name: 'pin',
      component: ProductView
    },
    {
      path: '/shop/prints',
      name: 'prints',
      component: ShopView
    },
    {
      path: '/shop/prints/:id',
      name: 'print',
      component: ProductView
    },
    {
      path: '/shop/books',
      name: 'books',
      component: ShopView
    },
    {
      path: '/shop/books/:id',
      name: 'book',
      component: ProductView
    },
    {
      path: '/shop/stickers',
      name: 'stickers',
      component: ShopView
    },
    {
      path: '/shop/stickers/:id',
      name: 'sticker',
      component: ProductView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
