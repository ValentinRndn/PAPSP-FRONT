<template>
    <div class="app">
      <NavigationBar v-if ="$route.path !== '/login' && $route.path !== '/admin'" />
      <router-view />
      <Footer v-if ="$route.path !== '/login' && $route.path !== '/admin'" />
    </div>
</template>

<script setup>
  import NavigationBar from './components/NavigationBar.vue'
  import Footer from './components/Footer.vue'

</script>

<style lang="tailwindcss">
</style>
