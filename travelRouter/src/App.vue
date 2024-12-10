<script setup>
import { RouterView, RouterLink } from 'vue-router';
import Navigation from './components/Navigation.vue';
</script>

<template>
    
        <Navigation></Navigation>
   
    <div class="container">
        <RouterView />
    </div>
</template>