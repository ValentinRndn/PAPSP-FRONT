<template>
  <aside class="flex items-center justify-center gap-5 mb-8 sm:hidden">
    <img src="../assets/logo_typo.png" alt="logo" class="size-1/4 mt-8" />

    <ul class="navbar flex gap-10 text-xl mt-10 font-cgothic font-bold text-grey">
      <li class="menu" :class="{ 'underline': currentPage === '/' }">
        <router-link to="/">ACCUEIL</router-link>
      </li>      
      <li class="menu" :class="{ 'underline': currentPage === '/map' }">
        <router-link to="/map">CARTOGRAPHIE</router-link>
      </li>
      <li class="menu" :class="{ 'underline': currentPage === '/guide' }">
        <router-link to="/guide">GUIDE</router-link>
      </li>
      <li class="menu" :class="{ 'underline': currentPage === '/contact' }">
        <router-link to="/contact">CONTACT</router-link>
      </li>
      <li class="menu" :class="{ 'underline': currentPage === '/blog' }">
        <router-link to="/blog">BLOG</router-link>
      </li>
      <li class="menu" :class="{ 'underline': currentPage === '/APropos' }">
        <router-link to="/APropos">EN SAVOIR +</router-link>
      </li>

      <router-link v-if="isUserLoggedIn" to="/backoffice/dashboard" class="menu">
      <img src="../assets/profile.png" alt="profil" class="size-6 object-cover object-center">      </router-link>
    </ul>
  </aside>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const currentPage = ref('');
const route = useRoute();

//Constant pour vérifier si le User est loggedIn
const isUserLoggedIn = ref(localStorage.getItem('token') !== null);

watch(
  () => route.path,
  (newPath) => {
    currentPage.value = newPath;
  },
  { immediate: true }
);
</script>

<style scoped>
.underline {
  text-decoration: underline;
}
</style>
