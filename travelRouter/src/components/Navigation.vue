<script setup>
// Importa 'ref' desde Vue, que se utiliza para crear una referencia reactiva.
import { ref } from "vue";

// Crea una referencia reactiva llamada 'destinations' para almacenar los destinos.
const destinations = ref([]);

// funcion para obtener los datos del 'data.json'.
const fetchDestinations = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  destinations.value = data.destinations;
};

// Llama a la funcion
fetchDestinations();
</script>

<template>
  <!-- Contenedor de navegación con un id 'nav' -->
  <nav id="nav">
    <!-- Enlace a la página de inicio (Home) -->
    <RouterLink to="/">Home</RouterLink>
    
    <!-- Itera sobre la lista de destinos y crea un enlace para cada destino -->
    <div v-for="destination in destinations" :key="destination.id">
      <!-- Crea un enlace con el nombre del destino, usando el id y el slug  -->
      <RouterLink :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
        {{ destination.name }} <!-- Nombre del destino -->
      </RouterLink>
    </div>

    <!-- Enlaces adicionales para Dashboard y ITB -->
    <RouterLink to="/Dashboard">Dashboard</RouterLink>
    <RouterLink to="/ITB">ITB</RouterLink>
  </nav>
</template>
