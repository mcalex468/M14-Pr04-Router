<script setup>
import Destinations from '@/components/Destinations.vue';


</script>

<template>
<div class="home">
<h1>All Destinations</h1>
<div v-for="destination in destinations" :key="destination.id">
{{ destination.name }}
{{ destination.description }}
</div>
</div>
</template>
