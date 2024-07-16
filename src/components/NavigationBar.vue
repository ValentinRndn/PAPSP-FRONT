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
      <li class="menu" :class="{ 'underline': currentPage === '/blog' }">
        <router-link to="/blog">BLOG</router-link>
      </li>
      <li class="menu" :class="{ 'underline': currentPage === '/contact' }">
        <router-link to="/contact">CONTACT</router-link>
      </li>
      <li v-if="isUserLoggedIn" class="relative">
        <button @click="toggleDropdown" class="menu">
          <img src="../assets/profile.png" alt="profil" class="size-6 object-cover object-center">
        </button>
        <ul v-if="dropdownVisible" class="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          <li class="menu-item p-2 hover:bg-gray-100">
            <router-link to="/backoffice/dashboard">Aller au back office</router-link>
          </li>
          <li class="menu-item p-2 hover:bg-gray-100 cursor-pointer" @click="logout">Se déconnecter</li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const currentPage = ref('');
const route = useRoute();
const router = useRouter();

// Constante pour vérifier si le User est loggedIn
const isUserLoggedIn = ref(localStorage.getItem('token') !== null);

// État pour gérer la visibilité du menu déroulant
const dropdownVisible = ref(false);

watch(
  () => route.path,
  (newPath) => {
    currentPage.value = newPath;
  },
  { immediate: true }
);

// Fonction pour basculer la visibilité du menu déroulant
const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

// Fonction pour gérer la déconnexion
const logout = () => {
  localStorage.removeItem('token');
  isUserLoggedIn.value = false;
  dropdownVisible.value = false;
  router.push('/');
};
</script>

<style scoped>
.underline {
  text-decoration: underline;
}
.menu-item {
  cursor: pointer;
}
.dropdown-menu {
  z-index: 50;
}
</style>
