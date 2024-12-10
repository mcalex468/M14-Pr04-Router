<script setup>
// Importación de funciones necesarias de Vue y Vue Router
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import GoBack from '@/components/GoBack.vue';

// Uso del hook 'useRoute' para acceder a los parámetros de la ruta actual
const route = useRoute();
 
// Referencia reactiva para almacenar el destino actual
const destination = ref(null);

// Función asincrónica para cargar los datos del destino desde 'data.json'
const cargarDestino = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  destination.value = data.destinations.find(destino => destino.id === parseInt(route.params.id)); // Filtra el destino por ID
};

// Observa cambios en el parámetro 'id' de la ruta para volver a cargar el destino
watch(() => route.params.id, () => {
  cargarDestino();
});

// Llama a la función al inicializar el componente
cargarDestino();
</script>

<template>
  <!-- Contenedor principal de la página de destino -->
  <div :key="$route.fullPath" class="destination">
    <!-- Componente para regresar a la página anterior -->
    <GoBack />

    <!-- Detalles del destino (imagen, nombre, descripción) -->
    <div class="destination-details">
      <img v-if="destination" :src="`/images/${destination.image}`" :alt="destination.name" />
      <div>
        <h1>{{ destination?.name }}</h1>
        <p>{{ destination?.description }}</p>
      </div>
    </div>

    <!-- Título de las experiencias -->
    <h2>Top Experiences in {{ destination.name }}</h2>
    <div class="experiences">
      <div class="cards">
        <!-- Itera sobre las experiencias del destino y crea un enlace a cada una -->
        <router-link
          v-for="experience in destination?.experiences"
          :key="experience.slug"
          :to="{ name: 'experience.show', params: { slug: experience.slug, id: destination.id } }"
        >
          <div class="card">
            <img :src="`/images/${experience.image}`" :alt="experience.name" />
            <span class="card__text">{{ experience.name }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
