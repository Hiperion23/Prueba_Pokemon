<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 space-y-6">
    <h1 class="text-3xl font-bold text-center text-cyan-400"> Visor SCORM</h1>
    <p class="text-yellow-400 text-lg animate-pulse"> Cargando curso ...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  const urlParam = route.query.url as string | undefined
  if (urlParam) {
    const decoded = decodeURIComponent(urlParam)
    window.location.href = decoded 
  }
})
</script>
