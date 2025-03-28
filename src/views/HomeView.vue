<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router'
import type { PokemonResult, PokemonApiResponse } from '../types/pokemon'

const listaPokemon = ref<PokemonResult[]>([])
const offsetActual = ref(0)

const cargarPokemon = async () => {
  try {
    const respuesta = await axios.get<PokemonApiResponse>(
      `https://pokeapi.co/api/v2/pokemon?offset=${offsetActual.value}&limit=43`
    )
    listaPokemon.value = respuesta.data.results
  } catch (error) {
    console.error('Error al cargar Pokémon:', error)
  }
}

const extraerIdPokemon = (url: string): string => {
  const coincidencias = url.match(/\/(\d+)\//)
  return coincidencias ? coincidencias[1] : ''
}

onMounted(cargarPokemon)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
    <div class="container mx-auto max-w-4xl">
      <h1 class="text-4xl font-bold text-center text-blue-900 mb-8 
                 transform transition-all duration-300 hover:scale-105">
        Lista de Pokémon
      </h1>

      <div class="flex justify-center mb-6">
        <RouterLink 
          to="/admin" 
          class="px-6 py-2 bg-green-500 text-white rounded-lg 
                 shadow-md hover:bg-green-600 
                 transition-all duration-300 
                 transform hover:-translate-y-1 
                 active:scale-95"
        >
          Siguiente
        </RouterLink>
      </div>

      <div class="bg-white shadow-xl rounded-xl overflow-hidden">
        <table class="w-full">
          <thead class="bg-blue-500 text-white">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Imagen</th>
              <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(pokemon) in listaPokemon" 
              :key="pokemon.name"
              class="border-b border-gray-200 
                     hover:bg-blue-50 
                     transition-all duration-300 
                     ease-in-out"
            >
              <td class="px-6 py-4 text-gray-700 font-medium">
                {{ extraerIdPokemon(pokemon.url) }}
              </td>
              <td class="px-6 py-4">
                <img 
                  :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${extraerIdPokemon(pokemon.url)}.png`" 
                  :alt="pokemon.name"
                  class="w-16 h-16 mx-auto 
                         transform transition-transform duration-300 
                         hover:scale-110 hover:rotate-6"
                >
              </td>
              <td class="px-6 py-4 text-gray-800 font-semibold capitalize">
                {{ pokemon.name }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
