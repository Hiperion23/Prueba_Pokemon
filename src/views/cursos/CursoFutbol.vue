<template>
    <div class="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800 px-6 py-12 md:px-20 max-w-6xl mx-auto space-y-16">
      <h1 class="text-5xl font-extrabold text-blue-800 text-center animate-fade-in">⚽ Fundamentos del Fútbol</h1>
  
      <section class="space-y-6 animate-slide-up delay-100">
        <h2 class="text-3xl font-bold text-blue-700">🎥 Video introductorio</h2>
        <div class="overflow-hidden rounded-xl shadow-lg aspect-video">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/rXcGh4KIqik"
            title="Fundamentos del fútbol"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
  
      <section class="space-y-6 animate-slide-up delay-200">
        <h2 class="text-3xl font-bold text-blue-700">⚽ ¿Qué es el fútbol?</h2>
        <p class="text-lg leading-relaxed">
          El fútbol es un deporte de equipo que se juega entre dos equipos de once jugadores. Su objetivo es marcar más goles que el rival usando cualquier parte del cuerpo excepto los brazos y manos (salvo el portero).
        </p>
        <p class="text-lg leading-relaxed">
          Es el deporte más popular del mundo y se practica desde edades tempranas tanto de manera amateur como profesional.
        </p>
        <img
          src="https://images.pexels.com/photos/25525183/pexels-photo-25525183.jpeg"
          alt="Jugadores de fútbol"
          class="rounded-xl shadow-lg w-full transition-transform duration-500 hover:scale-102"
        />
      </section>
  
      <section class="space-y-6 animate-slide-up delay-300">
        <h2 class="text-3xl font-bold text-blue-700">📋 Fundamentos básicos del fútbol</h2>
        <ul class="grid md:grid-cols-2 gap-6 list-disc list-inside text-lg">
          <li>Control y conducción del balón</li>
          <li>Precisión en los pases y tiros</li>
          <li>Desplazamientos y posicionamiento</li>
          <li>Trabajo en equipo y comunicación</li>
          <li>Condición física y resistencia</li>
          <li>Conocimiento táctico</li>
        </ul>
      </section>
  
      <section class="space-y-6 animate-slide-up delay-400">
        <h2 class="text-3xl font-bold text-blue-700">🧠 Beneficios de practicar fútbol</h2>
        <ul class="space-y-3 text-lg">
          <li class="flex items-start gap-2"><span class="text-blue-600">✅</span> Mejora la coordinación y reflejos.</li>
          <li class="flex items-start gap-2"><span class="text-blue-600">✅</span> Aumenta la capacidad aeróbica y muscular.</li>
          <li class="flex items-start gap-2"><span class="text-blue-600">✅</span> Desarrolla disciplina, perseverancia y liderazgo.</li>
          <li class="flex items-start gap-2"><span class="text-blue-600">✅</span> Fomenta valores como el respeto y el compañerismo.</li>
        </ul>
      </section>
  
      <section class="space-y-6 animate-slide-up delay-500">
        <h2 class="text-3xl font-bold text-blue-700">🔚 Conclusión</h2>
        <p class="text-lg leading-relaxed">
          El fútbol no solo es un deporte, es una herramienta poderosa para el desarrollo físico, mental y social. Practicarlo mejora la salud y fortalece habilidades esenciales para la vida.
        </p>
        <p class="text-lg leading-relaxed font-semibold text-blue-800">
          ¡Súmate al equipo y aprende jugando!
        </p>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style>
  @keyframes fade-in {
    0% { opacity: 0; transform: scale(0.98); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes slide-up {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.7s ease-out both;
  }
  .animate-slide-up {
    animation: slide-up 0.8s ease-out both;
  }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
  </style>
  