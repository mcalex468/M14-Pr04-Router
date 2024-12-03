<script setup>
import { RouterView, RouterLink } from 'vue-router';
import Navigation from './components/Navigation.vue';
import Destinations from './components/Destinations.vue';
</script>

<template>
<header>
<Navigation></Navigation>
</header>
<div class="container">
<RouterView/>
</div>
</template>