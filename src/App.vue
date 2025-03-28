<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Loading from './components/Loading.vue';

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false; 
  }, 2000);
});
</script>

<template>
  <Loading v-if="loading" />
  <router-view v-else />
</template>
