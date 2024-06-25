<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <Navbar/>
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
