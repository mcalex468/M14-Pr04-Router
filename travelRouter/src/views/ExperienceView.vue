<template>
  <!-- Muestra la información de la experiencia si está disponible -->
  <div v-if="experience" class="experience">
    <!-- Componente para regresar a la página anterior -->
    <GoBack />
    
    <!-- Título, imagen y descripción de la experiencia -->
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </div>
</template>

<script setup>
// Importación de funciones necesarias de Vue y Vue Router
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import GoBack from '@/components/GoBack.vue';

// Accede a los parámetros de la ruta actual
const route = useRoute();
const experience = ref(null);

// Función asincrónica para obtener la experiencia desde 'data.json'
const fetchExperience = async () => {
  const response = await fetch('/data.json'); 
  const data = await response.json(); 
  const destination = data.destinations.find(destino => destino.id === parseInt(route.params.id));
  if (destination) {
    experience.value = destination.experiences.find(experiencia => experiencia.slug === route.params.slug); // Asigna la experiencia encontrada
  }
};

// Llama a la función 
fetchExperience();
</script>
