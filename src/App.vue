<template>
    <div class="app">
      <div>
    <!-- Navbar pour les écrans larges -->
    <NavigationBar class="block md:hidden"></NavigationBar>
    <!-- NavbarMobile pour les écrans petits -->
    <NavigationBarMobile class="hidden md:block"></NavigationBarMobile>
  </div>
      <router-view />
    </div>
</template>

<script setup>
  import NavigationBar from './components/NavigationBar.vue'
  import NavigationBarMobile from './components/NavigationBarMobile.vue';
  import Footer from './components/Footer.vue'
  // import AdminBar from './components/backOffice/AdminBar.vue'
  import HorizontalBar from './components/backOffice/HorizontalBar.vue'
</script>

<style lang="tailwindcss"> 
</style>


