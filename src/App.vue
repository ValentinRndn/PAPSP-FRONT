<template>
  <div class="app">
    <div v-if="!isLandingPage">
      <!-- Navbar pour les écrans larges -->
      <NavigationBar class="block md:hidden"></NavigationBar>
      <!-- NavbarMobile pour les écrans petits -->
      <NavigationBarMobile class="hidden md:block"></NavigationBarMobile>
    </div>
    <router-view @route-changed="onRouteChanged" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import NavigationBar from './components/NavigationBar.vue';
import NavigationBarMobile from './components/NavigationBarMobile.vue';
import Footer from './components/Footer.vue';
// import AdminBar from './components/backOffice/AdminBar.vue'
import HorizontalBar from './components/backOffice/HorizontalBar.vue';

const route = useRoute();
const isLandingPage = ref(false);

const onRouteChanged = () => {
  isLandingPage.value = route.name === 'LandingFront'; // Assurez-vous que le nom de la route est correct
};

// Initial check on component mount
onRouteChanged();

// Watch for route changes
watch(route, onRouteChanged);
</script>

<style lang="tailwindcss">
</style>
