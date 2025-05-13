<template>
    <div class="min-h-screen bg-gradient-to-br from-white to-green-50 text-gray-800 px-6 py-12 md:px-20 max-w-6xl mx-auto space-y-16">
      <h1 class="text-5xl font-extrabold text-green-800 text-center animate-fade-in">🍽️ Alimentación Saludable</h1>
  
      <section class="space-y-6 animate-slide-up delay-100">
        <h2 class="text-3xl font-bold text-green-700">🎥 Introducción en video</h2>
        <div class="overflow-hidden rounded-xl shadow-lg aspect-video">
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/U0dW24WEgvE"
            title="¿Qué es una alimentación saludable?"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
  
      <section class="space-y-6 animate-slide-up delay-200">
        <h2 class="text-3xl font-bold text-green-700">🥗 ¿Qué significa alimentarse bien?</h2>
        <p class="text-lg leading-relaxed">
          Alimentarse saludablemente implica consumir una variedad de alimentos que aporten los nutrientes esenciales para el funcionamiento óptimo del cuerpo: proteínas, grasas buenas, carbohidratos complejos, vitaminas y minerales.
        </p>
        <p class="text-lg leading-relaxed">
          Mantener una dieta equilibrada contribuye a mejorar la energía, concentración, estado de ánimo y previene enfermedades crónicas como la diabetes tipo 2, hipertensión o problemas cardíacos.
        </p>
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
          alt="Plato nutritivo"
          class="rounded-xl shadow-lg w-full transition-transform duration-500 hover:scale-105"
        />
      </section>
  
      <section class="space-y-6 animate-slide-up delay-300">
        <h2 class="text-3xl font-bold text-green-700">📊 Beneficios de una buena alimentación</h2>
        <ul class="grid md:grid-cols-2 gap-6 list-disc list-inside text-lg">
          <li>Prevención de enfermedades crónicas</li>
          <li>Mejora del sistema inmunológico</li>
          <li>Mayor claridad mental y concentración</li>
          <li>Peso corporal saludable</li>
          <li>Mejor rendimiento físico y emocional</li>
          <li>Mayor longevidad y calidad de vida</li>
        </ul>
      </section>
  
      <section class="space-y-6 animate-slide-up delay-400">
        <h2 class="text-3xl font-bold text-green-700">📝 Recomendaciones prácticas</h2>
        <ul class="space-y-3 text-lg">
          <li class="flex items-start gap-2"><span class="text-green-600">✅</span> Come cinco porciones de frutas y verduras al día.</li>
          <li class="flex items-start gap-2"><span class="text-green-600">✅</span> Prefiere cereales integrales en lugar de refinados.</li>
          <li class="flex items-start gap-2"><span class="text-green-600">✅</span> Cocina con aceite de oliva o palta en lugar de grasas saturadas.</li>
          <li class="flex items-start gap-2"><span class="text-green-600">✅</span> Evita el exceso de azúcar, sal y alimentos ultraprocesados.</li>
          <li class="flex items-start gap-2"><span class="text-green-600">✅</span> Bebe al menos 6 a 8 vasos de agua diariamente.</li>
        </ul>
      </section>
  
      <section class="space-y-6 animate-slide-up delay-500">
        <h2 class="text-3xl font-bold text-green-700">🔚 Conclusión</h2>
        <p class="text-lg leading-relaxed">
          Llevar una alimentación saludable no se trata de perfección, sino de constancia y equilibrio. Pequeños cambios diarios pueden generar grandes impactos en tu salud general.
        </p>
        <p class="text-lg leading-relaxed font-semibold text-green-700">
          ¡Tu cuerpo es tu herramienta principal para vivir, cuídalo desde el plato!
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
  