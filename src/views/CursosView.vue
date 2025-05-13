<template>
    <div class="min-h-screen bg-white text-gray-800 p-6 md:p-12 max-w-6xl mx-auto space-y-10">
      <h1 class="text-4xl font-bold text-green-700 text-center">🎓 Cursos Disponibles</h1>
  
      <div v-if="exportando" class="text-center text-green-700 text-lg font-semibold">
        ⏳ Exportando ZIP SCORM...
      </div>
  
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="curso in cursos"
          :key="curso.slug"
          class="bg-white rounded-lg shadow p-4 flex flex-col animate-fade-in"
        >
          <img :src="curso.thumbnail" :alt="curso.titulo" class="rounded mb-3 h-40 object-cover">
          <h2 class="text-xl font-bold text-green-700 mb-1">{{ curso.titulo }}</h2>
          <p class="text-sm text-gray-600 mb-3">{{ curso.descripcion }}</p>
  
          <div class="text-sm text-gray-500 mb-3">
            <p><strong>Categoría:</strong> {{ curso.categoria }}</p>
            <p><strong>Duración:</strong> {{ curso.duracion }}</p>
          </div>
  
          <div class="mt-auto flex justify-between items-center gap-2">
            <RouterLink
              :to="curso.ruta"
              class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-3 rounded"
            >
              Ver Curso
            </RouterLink>
            <button
              @click="generarZip(curso.slug)"
              class="bg-green-600 hover:bg-green-700 text-white py-2 px-3 text-sm rounded font-semibold"
              :disabled="exportando"
            >
              Generar ZIP SCORM
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, h, render } from 'vue'
  import { RouterLink } from 'vue-router'
  import api from '@/services/api'
  
  // Componentes de los cursos
  import CursoComida from './cursos/CursoComida.vue'
  import CursoFutbol from './cursos/CursoFutbol.vue'
  import CursoViaje from './cursos/CursoViaje.vue'
  
  interface Curso {
    slug: string
    titulo: string
    descripcion: string
    duracion: string
    categoria: string
    thumbnail: string
    ruta: string
  }
  
  const cursos = ref<Curso[]>([
    {
      slug: 'alimentacion-saludable',
      titulo: 'Alimentación Saludable',
      descripcion: 'Aprende a llevar una dieta equilibrada y cuidar tu salud.',
      duracion: '1 hora',
      categoria: 'Nutrición',
      thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      ruta: '/cursos/comida',
    },
    {
      slug: 'fundamentos-futbol',
      titulo: 'Fundamentos del Fútbol',
      descripcion: 'Domina las bases del deporte rey desde cero.',
      duracion: '1.5 horas',
      categoria: 'Deporte',
      thumbnail: 'https://images.pexels.com/photos/25525183/pexels-photo-25525183.jpeg',
      ruta: '/cursos/futbol',
    },
    {
      slug: 'introduccion-viajes',
      titulo: 'Introducción a los Viajes',
      descripcion: 'Descubre los beneficios de viajar por el mundo.',
      duracion: '45 minutos',
      categoria: 'Cultura y ocio',
      thumbnail: 'https://images.pexels.com/photos/28821827/pexels-photo-28821827.jpeg',
      ruta: '/cursos/viaje',
    }
  ])
  
  const cursoComponentes: Record<string, any> = {
    'alimentacion-saludable': CursoComida,
    'fundamentos-futbol': CursoFutbol,
    'introduccion-viajes': CursoViaje
  }
  
  const exportando = ref(false)
  
  const generarZip = async (slug: string) => {
    const componente = cursoComponentes[slug]
    if (!componente) {
      console.error('Componente no encontrado para', slug)
      return
    }
  
    exportando.value = true
  
    try {
      // Renderiza el componente y extrae el HTML
      const container = document.createElement('div')
      render(h(componente), container)
  
      await new Promise(resolve => setTimeout(resolve, 300))
      const html = container.innerHTML
  
      const response = await api.post(`/cursos/${slug}/exportar`, { html }, {
        responseType: 'blob'
      })
  
      const blob = new Blob([response.data], { type: 'application/zip' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${slug}.zip`
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error al generar ZIP', error)
    } finally {
      exportando.value = false
    }
  }
  </script>
  
  <style>
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.4s ease-out;
  }
  </style>
  