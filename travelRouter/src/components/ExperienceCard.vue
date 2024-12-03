<template>
  <div class="experience-card">
    <div v-for="experience in experiences" :key="experience.slug" class="card">
      <img :src="`/images/${experience.image}`" :alt="experience.name" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">{{ experience.name }}</h3>
        <p class="card-description">{{ experience.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
experiences: {
  type: Array,
  required: true
}
});
</script>
