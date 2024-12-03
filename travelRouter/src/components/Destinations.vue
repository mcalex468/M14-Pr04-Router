<template>
    <div class="destination">
      <h2>All Destinations</h2>
      <div v-for="destination in destinations" :key="destination.id" class="AllDestinations">
        <h3>{{ destination.name }}</h3>
        <p>{{ destination.description }}</p>
        <img :src="`/images/${destination.image}`" alt="">

        <div v-for="experience in destination.experiences" :key="experience.name" class="AllExperience">
          <h4>{{ experience.name }}</h4>
          <p>{{ experience.description }}</p>
          <img :src="`/images/${experience.image}`" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  const destinations = ref([]);
  
 
  onMounted(async () => {
    const response = await fetch('/data.json'); 
    const data = await response.json();
    destinations.value = data.destinations; 
  });

  console.log(destinations.value);
  </script>
  
  <style scoped>
 
  </style>
  