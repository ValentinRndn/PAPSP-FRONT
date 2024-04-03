<template>
    <div class="app">
      <NavigationBar v-if ="$route.path !== '/login' && $route.path !== '/backoffice/dashboard' && $route.path != '/'" />
      <router-view />
      <Footer v-if ="$route.path !== '/login' && $route.path !== '/backoffice/dashboard'" />
      <AdminBar v-if="$route.path === '/backoffice/dashboard'" />
    </div>
</template>

<script setup>
  import NavigationBar from './components/NavigationBar.vue'
  import Footer from './components/Footer.vue'
  // import AdminBar from './components/backOffice/AdminBar.vue'
  import HorizontalBar from './components/backOffice/HorizontalBar.vue'
</script>

<style lang="tailwindcss">
</style>
-