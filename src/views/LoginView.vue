<template>
  <section class="px-6 pt-20 pb-14 text-center">
    <LoginComponent v-if="currentPage === 1" :loginToggle="this.loginToggle" />
    <RegistrationComponent v-else />
  </section>
</template>

<script>
import LoginComponent from '../components/Login/LoginComponent.vue'
import RegistrationComponent from '../components/Login/RegistrationComponent.vue'
export default {
  components: {
    LoginComponent,
    RegistrationComponent
  },
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    loginToggle() {
      this.currentPage += 1
    }
  }
}
</script>
