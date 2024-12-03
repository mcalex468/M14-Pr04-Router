<template>
<nav id="nav">
<RouterLink to="/">Home</RouterLink>
<div v-for="destination in destinations" key="destination.id">
    <RouterLink :to="'/Destinations/' + destination.slug">{{ destination.name}}</RouterLink>
</div>
<RouterLink to="/Dashboard">Dashboard</RouterLink>
<RouterLink to="/ITB">ITB</RouterLink>
</nav>


</template>

<script setup>
import { RouterLink } from 'vue-router';
import jsonData from '../../public/data.json'

const destinations = jsonData.destinations;
</script>