<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <!-- <h1 class="text-2xl">Vue jobs</h1> -->
   <Navbar/>
    <!-- <Hero title="Become a Vue Dev" subtitle="Subtitulo"/> -->
  <RouterView/>
</template>