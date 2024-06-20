import { defineStore } from 'pinia'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') ?? '',
    error: '',
    returnUrl: null,
    email: '',
    first_name: '',
    last_name: ''
  }),
  actions: {
    signIn(submitEvent) {
      const { elements } = submitEvent.target
      const email = elements.email.value
      const password = elements.password.value
      const signInInfo = {
        email,
        password
      }
      this.signInAction(signInInfo)
      elements.email.value = ''
      elements.password.value = ''
    },
    async signInAction(loginData) {
      try {
        const response = await fetch('https://aasha-server.onrender.com/login', {
          method: 'POST',
          body: JSON.stringify(loginData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()

        this.token = json.token
        this.email = json.email
        this.first_name = json.first_name
        this.last_name = json.last_name

        localStorage.setItem('token', json.token)

        router.push(this.returnUrl || '/')
      } catch (e) {
        this.error = e.message
      }
    },
    logoutAction() {
      this.token = null
      localStorage.removeItem('token')
      router.push('/')
    }
  }
})
