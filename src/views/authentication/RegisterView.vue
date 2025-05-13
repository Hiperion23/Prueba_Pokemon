<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">📝 Registro</h2>
  
        <form @submit.prevent="handleRegister" class="space-y-4">
          <div>
            <label class="block text-sm text-gray-600 mb-1" for="name">Nombre completo</label>
            <input
              v-model="name"
              id="name"
              type="text"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
  
          <div>
            <label class="block text-sm text-gray-600 mb-1" for="email">Correo electrónico</label>
            <input
              v-model="email"
              id="email"
              type="email"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
  
          <div>
            <label class="block text-sm text-gray-600 mb-1" for="password">Contraseña</label>
            <input
              v-model="password"
              id="password"
              type="password"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
  
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            {{ loading ? 'Registrando...' : 'Registrarse' }}
          </button>
        </form>
  
        <p v-if="error" class="mt-4 text-sm text-red-500 text-center">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import api from '@/services/api'
  import router from '@/router'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const error = ref<string | null>(null)
  const loading = ref(false)
  
  const handleRegister = async () => {
    loading.value = true
    error.value = null
  
    try {
      await api.get('/sanctum/csrf-cookie') // necesario para Sanctum
      await api.post('/register', { name: name.value, email: email.value, password: password.value })
  
      // Redirigir al home tras registro exitoso
      router.push('/')
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Error al registrarse'
    } finally {
      loading.value = false
    }
  }
  </script>
  