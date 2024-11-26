<script setup>
import jsonData from '../../public/data.json'

const destinations = jsonData.destinations;
</script>

<template>
<div class="home">
<h1>All Destinations</h1>
<div class="destinations"v-for="destination in destinations" :key="destination.id" >
        <h3>{{ destination.name }}</h3>
        <img :src="destination.image"{{destination.im}}/>
</div>

</div>
</template>
