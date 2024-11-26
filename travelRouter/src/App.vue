<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
</script>

<template>
<header>
<Navigation></Navigation>
</header>
<div class="container">
<RouterView></RouterView>
</div>
</template>