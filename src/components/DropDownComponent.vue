<template>
  <div>
    <ul class="space-y-2">
      <li>
        <BrowseComponent />
      </li>
      <li>
        <CategoryComponent />
      </li>
      <li>
        <InfoComponent />
      </li>
    </ul>
  </div>
</template>

<script>
import BrowseComponent from '../components/DropDown_folders/BrowseComponent.vue'
import CategoryComponent from '../components/DropDown_folders/CategoryComponent.vue'
import InfoComponent from '../components/DropDown_folders/InfoComponent.vue'
export default {
  components: {
    BrowseComponent,
    CategoryComponent,
    InfoComponent
  }
}
</script>
