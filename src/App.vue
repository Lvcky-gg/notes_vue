<template>
  <!-- <RouterLink to="/" class="button">Notes</RouterLink> |
  <RouterLink to="/stats" class="button">Stats</RouterLink> -->
  <NavBar />
  <RouterView />
</template>

<script setup>
import NavBar from './components/Layout/NavBar.vue'
</script>

<style>
@import './node_modules/bulma/css/bulma.min.css';
</style>
