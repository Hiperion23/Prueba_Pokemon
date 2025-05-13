<template>
    <div class="min-h-screen bg-gradient-to-br from-white to-indigo-50 text-gray-800 px-6 py-12 md:px-20 max-w-6xl mx-auto space-y-16">
      <h1 class="text-5xl font-extrabold text-indigo-800 text-center animate-fade-in">✈️ Introducción a los Viajes</h1>
  
      <section class="space-y-6 animate-slide-up delay-100">
        <h2 class="text-3xl font-bold text-indigo-700">🎥 Video introductorio</h2>
        <div class="overflow-hidden rounded-xl shadow-lg aspect-video">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/XdwehmQYt7E"
            title="Beneficios de viajar"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
  
      <section class="space-y-6 animate-slide-up delay-200">
        <h2 class="text-3xl font-bold text-indigo-700">🌍 ¿Por qué viajar?</h2>
        <p class="text-lg leading-relaxed">
          Viajar permite conocer nuevas culturas, aprender otros idiomas, descubrir paisajes únicos y salir de la rutina diaria. Es una de las mejores formas de enriquecer nuestra mente y espíritu.
        </p>
        <p class="text-lg leading-relaxed">
          Ya sea dentro del país o al extranjero, cada destino ofrece nuevas experiencias que nos ayudan a crecer como personas.
        </p>
        <img
          src="https://images.pexels.com/photos/28821827/pexels-photo-28821827.jpeg"
          alt="Paisaje de viaje"
          class="rounded-xl shadow-lg w-200 transition-transform duration-500 hover:scale-102"        />
      </section>
  
      <section class="space-y-6 animate-slide-up delay-300">
        <h2 class="text-3xl font-bold text-indigo-700">🧳 Tipos de viajes</h2>
        <ul class="grid md:grid-cols-2 gap-6 list-disc list-inside text-lg">
          <li>Turismo cultural</li>
          <li>Ecoturismo y naturaleza</li>
          <li>Viajes de aventura</li>
          <li>Viajes gastronómicos</li>
          <li>Turismo urbano</li>
          <li>Viajes familiares o de pareja</li>
        </ul>
      </section>
  
      <section class="space-y-6 animate-slide-up delay-400">
        <h2 class="text-3xl font-bold text-indigo-700">🧠 Beneficios de viajar</h2>
        <ul class="space-y-3 text-lg">
          <li class="flex items-start gap-2"><span class="text-indigo-600">✅</span> Reduce el estrés y mejora el estado de ánimo.</li>
          <li class="flex items-start gap-2"><span class="text-indigo-600">✅</span> Aumenta la empatía y la tolerancia cultural.</li>
          <li class="flex items-start gap-2"><span class="text-indigo-600">✅</span> Fomenta el aprendizaje y la creatividad.</li>
          <li class="flex items-start gap-2"><span class="text-indigo-600">✅</span> Mejora la autoestima y la independencia.</li>
        </ul>
      </section>
  
      <section class="space-y-6 animate-slide-up delay-500">
        <h2 class="text-3xl font-bold text-indigo-700">🔚 Conclusión</h2>
        <p class="text-lg leading-relaxed">
          Viajar es mucho más que tomar vacaciones. Es abrir la mente, salir de la zona de confort y descubrir que el mundo es tan diverso como fascinante.
        </p>
        <p class="text-lg leading-relaxed font-semibold text-indigo-800">
          ¡Explora, aprende y crea recuerdos inolvidables!
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
  