<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import Sortable from 'sortablejs';
import { RouterLink } from 'vue-router';
import type { PokemonResult, PokemonApiResponse } from '../types/pokemon';

const listaModulo1 = ref<PokemonResult[]>([]);
const listaModulo2 = ref<PokemonResult[]>([]);
const loading = ref(false);

let instanceOrdenable1: Sortable | null = null;
let instanceOrdenable2: Sortable | null = null;

const cargarPokemon = async () => {
  loading.value = true;
  try {
    const respuesta = await axios.get<PokemonApiResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=200'
    );

    const pokemonData = respuesta.data.results.map(pokemon => ({
      name: pokemon.name,
      url: pokemon.url,
    }));

    const mitad = Math.ceil(pokemonData.length / 2);
    listaModulo1.value = pokemonData.slice(0, mitad);
    listaModulo2.value = pokemonData.slice(mitad);
  } catch (error) {
    console.error('Error al cargar Pokémon:', error);
  } finally {
    loading.value = false;
  }
};

const guardarOrden = () => {
  console.log('Orden en Módulo 1:', listaModulo1.value.map(p => p.name));
  console.log('Orden en Módulo 2:', listaModulo2.value.map(p => p.name));
  alert('Orden guardado correctamente');
};

const inicializarOrdenable = () => {
  const lista1 = document.getElementById('lista-modulo-1');
  const lista2 = document.getElementById('lista-modulo-2');

  if (lista1) {
    instanceOrdenable1 = new Sortable(lista1, {
      animation: 250,
      ghostClass: 'ghost',
      chosenClass: 'chosen',
      group: 'pokemon',
    });
  }

  if (lista2) {
    instanceOrdenable2 = new Sortable(lista2, {
      animation: 250,
      ghostClass: 'ghost',
      chosenClass: 'chosen',
      group: 'pokemon',
    });
  }
};

onMounted(() => {
  cargarPokemon();
  setTimeout(inicializarOrdenable, 100);
});

onUnmounted(() => {
  if (instanceOrdenable1) instanceOrdenable1.destroy();
  if (instanceOrdenable2) instanceOrdenable2.destroy();
});
</script>

<template>
  <div class="container mx-auto p-6 max-w-5xl">
    <div v-if="loading" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="loading-spinner"></div>
    </div>

    <h1 class="text-4xl font-extrabold mb-6 text-center text-gray-800 dark:text-white">
      Administrador de Pokémon
    </h1>

    <RouterLink to="/" class="back-button">
      Volver
    </RouterLink>

    <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl">
      <h2 class="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
        Ordenar Pokémon entre Módulos
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="modulo">
          <h3>Módulo 1</h3>
          <div id="lista-modulo-1" class="pokemon-list">
            <div v-for="pokemon in listaModulo1" :key="pokemon.name" class="pokemon-item">
              <span class="capitalize">{{ pokemon.name }}</span>
            </div>
          </div>
        </div>

        <div class="modulo">
          <h3>Módulo 2</h3>
          <div id="lista-modulo-2" class="pokemon-list">
            <div v-for="pokemon in listaModulo2" :key="pokemon.name" class="pokemon-item">
              <span class="capitalize">{{ pokemon.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-6">
        <button @click="guardarOrden" class="save-button">
          Guardar Orden
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  font-family: 'Poppins', sans-serif;
  background: #e3f2fd;
  padding: 20px;
  border-radius: 12px;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid transparent;
  border-top-color: #1565c0;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.back-button {
  display: inline-block;
  padding: 10px 16px;
  background: #1e88e5;
  color: white;
  border-radius: 8px;
  transition: 0.3s;
}

.back-button:hover {
  background: #1565c0;
}

.modulo {
  background: #90caf9;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.modulo:hover {
  transform: translateY(-5px);
}

h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 12px;
  color: #0d47a1;
}

.pokemon-list {
  min-height: 200px;
  background: #e3f2fd;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pokemon-item {
  padding: 12px;
  background: #42a5f5;
  color: white;
  border-radius: 8px;
  cursor: grab;
  transition: all 0.2s ease-in-out;
}

.pokemon-item:hover {
  background: #1e88e5;
  transform: scale(1.05);
}

.ghost {
  opacity: 0.4;
}

.chosen {
  background: #0d47a1 !important;
  transform: scale(1.1);
}

.save-button {
  background: #1976d2;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
}

.save-button:hover {
  background: #0d47a1;
}

.save-button:active {
  transform: scale(0.95);
}

/* Responsivo */
@media (max-width: 768px) {
  .grid {
    display: block;
  }

  .modulo {
    margin-bottom: 16px;
  }
}
</style>
