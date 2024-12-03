<template>
    <div v-if="destination">
      <h1>{{ destination.name }}</h1>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
      <div v-for="experience in destination.experiences" :key="experience.slug">
        <h3>{{ experience.name }}</h3>
        <img :src="`/images/${experience.image}`" :alt="experience.name" />
        <p>{{ experience.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import data from '@/../public/data.json';
  
  const route = useRoute();
  const destination = ref(null);
  
  const loadDestination = () => {
    const slug = route.params.slug;
    destination.value = data.destinations.find((dest) => dest.slug === slug);
  };
  
  onMounted(loadDestination);
  
  </script>
  