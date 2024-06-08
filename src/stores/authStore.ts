import { defineStore } from 'pinia'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({ token: localStorage.getItem('token') ?? '', error: '', returnUrl: null }),
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
        const response = await fetch('http://localhost:3002/login', {
          method: 'POST',
          body: JSON.stringify(loginData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()

        this.token = json.token

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
