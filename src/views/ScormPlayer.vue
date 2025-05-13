<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 space-y-6">
    <h1 class="text-3xl font-bold text-center text-cyan-400">Visor SCORM</h1>

    <iframe
      v-if="launchUrl"
      :src="launchUrl"
      class="w-full max-w-6xl h-[80vh] border-2 border-cyan-500 rounded-xl shadow-lg"
      allowfullscreen
    ></iframe>

    <p v-else class="text-yellow-400 text-lg animate-pulse">Cargando curso ...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const launchUrl = ref<string | null>(null)

onMounted(() => {
  const urlParam = route.query.url as string | undefined
  if (urlParam) {
    launchUrl.value = decodeURIComponent(urlParam)
  }
})
</script>
