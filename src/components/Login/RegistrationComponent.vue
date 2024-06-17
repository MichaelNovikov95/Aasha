<template>
  <h4 class="text-h4">Registration</h4>
  <form class="flex flex-col mt-8 space-y-4" @submit.prevent="registration">
    <div class="w-full flex flex-col text-subtitle1 items-start space-y-2">
      <label for="first_name">First name</label>
      <input
        class="border-2 pl-2 border-slate-gray rounded-lg w-full h-12"
        type="text"
        id="first_name"
        name="registration"
      />
    </div>
    <div class="w-full flex flex-col text-subtitle1 items-start space-y-2">
      <label for="last_name">Last name</label>
      <input
        class="border-2 pl-2 border-slate-gray rounded-lg w-full h-12"
        type="text"
        id="last_name"
        name="registration"
      />
    </div>
    <div class="w-full flex flex-col text-subtitle1 items-start space-y-2">
      <label for="email">Email</label>
      <input
        class="border-2 pl-2 border-slate-gray rounded-lg w-full h-12"
        type="email"
        id="email"
        name="registration"
      />
    </div>
    <div class="w-full flex flex-col mt-4 text-subtitle1 items-start space-y-2">
      <label for="password">Password</label>
      <input
        class="border-2 pl-2 border-slate-gray rounded-lg w-full h-12"
        type="password"
        id="password"
        name="registration"
      />
    </div>
    <button class="w-full text-center bg-resoultion-blue rounded-3xl confirm_button">
      <p class="text-button text-white py-3">Create</p>
    </button>
  </form>
</template>

<script>
export default {
  methods: {
    registration(submitEvent) {
      const { elements } = submitEvent.target
      const first_name = elements.first_name.value
      const last_name = elements.last_name.value
      const email = elements.email.value
      const password = elements.password.value
      const registrationInfo = {
        first_name,
        last_name,
        email,
        password
      }
      this.registrationAction(registrationInfo)
    },
    async registrationAction(personal_data) {
      try {
        const response = await fetch('https://aasha-server.onrender.com/registration', {
          method: 'POST',
          body: JSON.stringify(personal_data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
        console.log('Success', JSON.stringify(json))
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>
