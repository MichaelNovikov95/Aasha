import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import Paintings from '@/components/DropDown_folders/Browse_folder/Paintings.vue'
import Shop from '@/components/DropDown_folders/Browse_folder/Shop.vue'
import Sketches from '@/components/DropDown_folders/Browse_folder/Sketches.vue'
import Comissions from '@/components/DropDown_folders/Category_folder/Comissions.vue'
import DigitalMerch from '@/components/DropDown_folders/Category_folder/DigitalMerch.vue'
import PhysicalMerch from '@/components/DropDown_folders/Category_folder/PhysicalMerch.vue'
import About from '@/components/DropDown_folders/Info_folder/About.vue'
import Contact from '@/components/DropDown_folders/Info_folder/About.vue'

import BrowseComponent from '@/components/DropDown_folders/BrowseComponent.vue'
import CategoryComponent from '@/components/DropDown_folders/BrowseComponent.vue'
import InfoComponent from '@/components/DropDown_folders/BrowseComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/browse',
      name: 'browse',
      component: BrowseComponent
    },
    {
      path: '/browse/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/browse/shop/paintings',
      name: 'paintings',
      component: Paintings
    },
    {
      path: '/browse/shop/sketches',
      name: 'sketches',
      component: Sketches
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryComponent
    },
    {
      path: '/category/comissions',
      name: 'comissions',
      component: Comissions
    },
    {
      path: '/category/digitalMerch',
      name: 'digitalMerch',
      component: DigitalMerch
    },
    {
      path: '/category/physicalMerch',
      name: 'physicalMerch',
      component: PhysicalMerch
    },
    {
      path: '/info',
      name: 'info',
      component: InfoComponent
    },
    {
      path: '/info/about',
      name: 'about',
      component: About
    },
    {
      path: '/info/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
