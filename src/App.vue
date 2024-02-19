<template>
    <div class="app">
      <NavigationBar v-if ="$route.path !== '/login' && $route.path !== '/admin'" />
      <router-view />
    </div>
</template>

<script setup>
  import NavigationBar from './components/NavigationBar.vue'
</script>

<style lang="tailwindcss">
</style>
