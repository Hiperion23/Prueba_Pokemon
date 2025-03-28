<script setup lang="ts">
import { ref, onMounted } from 'vue';

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false; 
  }, 300);
});
</script>

<template>
  <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-black">
    <div class="relative w-24 h-24">
      <div class="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p class="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
        Loading...
      </p>
    </div>
  </div>
  
  <router-view v-else />
</template>
