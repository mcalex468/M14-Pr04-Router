<template>
    <div class="destination">
      <h2>All Destinations</h2>
      <div v-for="destination in destinations" :key="destination.id" class="AllDestinations">
        <h3>{{ destination.name }}</h3>
        <p>{{ destination.description }}</p>
  
        <div v-for="experience in destination.experiences" :key="experience.name" class="AllExperience">
          <h4>{{ experience.name }}</h4>
          <p>{{ experience.description }}</p>
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
  /*.destination {
    padding: 20px;
  }
  
  .AllDestinations {
    margin-bottom: 40px;
  }
  
  .AllExperience {
    margin-left: 20px;
    margin-top: 10px;
  }*/
  </style>
  