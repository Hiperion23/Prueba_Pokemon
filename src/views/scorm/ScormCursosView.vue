<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/services/api'

interface Curso {
  id: number
  name: string
  slug: string
  launch_url: string
}

const cursos = ref<Curso[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const cargarCursos = async () => {
  try {
    loading.value = true
    error.value = null
    
    const { data } = await api.get('/cursos')
    console.log('✅ Cursos cargados:', data)
    cursos.value = data
  } catch (error: any) {
    console.error('❌ Error al cargar cursos:', error)
    error.value = error.message || 'Error al cargar los cursos'
  } finally {
    loading.value = false
  }
}

const visualizarCurso = (url: string) => {
  const visorUrl = `http://127.0.0.1:5173/scorm-player?url=${encodeURIComponent(url)}`
  window.open(visorUrl, '_blank', 'width=1024,height=768')
}

onMounted(cargarCursos)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8">
    <div class="bg-black/30 backdrop-blur-md rounded-xl p-6 mb-10 shadow-lg border border-white/20">
      <h1 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        ZIP'S
      </h1>
      <p class="mt-2 text-blue-200 opacity-80">Plataforma de aprendizaje del futuro</p>
    </div>
    
    <div v-if="loading" class="flex flex-col items-center justify-center py-20">
      <div class="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <p class="mt-4 text-blue-300 font-light">Cargando experiencias de aprendizaje...</p>
    </div>
    
    <div v-else-if="error" class="bg-red-900/30 backdrop-blur-md rounded-xl p-8 mx-auto max-w-lg border border-red-500/50 shadow-lg">
      <p class="text-red-200 mb-4">{{ error }}</p>
      <button 
        @click="cargarCursos" 
        class="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg"
      >
        Intentar nuevamente
      </button>
    </div>
    
    <div v-else-if="cursos.length === 0" class="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center mx-auto max-w-lg">
      <div class="text-6xl mb-4">🔍</div>
      <p class="text-blue-200">No hay cursos disponibles en este momento.</p>
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="curso in cursos" 
        :key="curso.id" 
        class="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20 group"
      >
        <div class="h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
          <div class="w-full h-full opacity-20 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]" style="background-size: 12px 12px;"></div>
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{{ curso.name }}</h3>
          <p class="text-sm text-blue-300 mt-2">{{ curso.slug }}</p>
          
          <button 
            @click="visualizarCurso(curso.launch_url)" 
            class="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
          >
            <span>Iniciar curso</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>