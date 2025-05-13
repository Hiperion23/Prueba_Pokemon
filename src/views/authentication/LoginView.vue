<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">🔐 Iniciar Sesión</h2>
  
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm text-gray-600 mb-1" for="email">Correo electrónico</label>
            <input
              v-model="email"
              id="email"
              type="email"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div>
            <label class="block text-sm text-gray-600 mb-1" for="password">Contraseña</label>
            <input
              v-model="password"
              id="password"
              type="password"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {{ loading ? 'Ingresando...' : 'Iniciar Sesión' }}
          </button>
        </form>
  
        <p v-if="error" class="mt-4 text-sm text-red-500 text-center">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import axios from 'axios'
  import api from '@/services/api'
  import router from '@/router'
  
  const email = ref('')
  const password = ref('')
  const error = ref<string | null>(null)
  const loading = ref(false)
  
  const handleLogin = async () => {
    loading.value = true
    error.value = null
  
    try {
      await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie', { withCredentials: true })
  
      await api.post('/login', {
        email: email.value,
        password: password.value,
      })
  
      await api.get('/user')
  
      setTimeout(() => {
        router.push('/scorm-cursos')
        }, 300)

    } catch (err: any) {
      error.value = err.response?.data?.message || 'Error al iniciar sesión'
    } finally {
      loading.value = false
    }
  }
  </script>
  