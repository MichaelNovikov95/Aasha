import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'
import CartView from '@/views/CartView.vue'
import LoginView from '@/views/LoginView.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import SuccessComponent from '@/components/Carts/Checkouts/PaymentStatus/SuccessComponent.vue'
import CancelComponent from '@/components/Carts/Checkouts/PaymentStatus/CancelComponent.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/shop/cart',
      name: 'cartshop',
      component: CartView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessComponent
    },
    {
      path: '/cancel',
      name: 'cancel',
      component: CancelComponent
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: PageNotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

// router.beforeEach(async (to) => {
//   const publicPages = ['/shop/cart']
//   const authRequired = publicPages.includes(to.path)
//   const auth = useAuthStore()

//   if (authRequired && !auth.token) {
//     auth.returnUrl = to.fullPath
//     return '/login'
//   }
// })

export default router
