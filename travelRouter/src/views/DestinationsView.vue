<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import GoBack from '@/components/GoBack.vue';

const route = useRoute();
const destination = ref(null);

const cargarDestino = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  destination.value = data.destinations.find(destino => destino.id === parseInt(route.params.id));
};

watch(() => route.params.id, () => {
  cargarDestino();
});

cargarDestino();
</script>

<template>
  <div :key="$route.fullPath" class="destination">
    <GoBack />
    <div class="destination-details">
      <img v-if="destination" :src="`/images/${destination.image}`" :alt="destination.name" />
      <div>
        <h1>{{ destination?.name }}</h1>
        <p>{{ destination?.description }}</p>
      </div>
    </div>

    <h2>Experiences</h2>
    <div class="experiences">
      <div class="cards">
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
