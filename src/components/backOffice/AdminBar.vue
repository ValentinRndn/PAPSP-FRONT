<template>
  <aside :class="{ 'is-expanded': is_expanded }" class="flex flex-col w-[calc(2rem+32px)] min-h-[100vh] overflow-hidden p-4 bg-purple-fonce ease-out duration-200 mt-12">

    <div class="navigation my-0 -mx-4 z-10">
      <router-link :class="['button border-t border-white', { 'text-purple bg-purple': currentPage === '/backOffice/dashboard' }]" to="/backOffice/dashboard">
        <img src="../../assets/logo_dash.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4">
        <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/dashboard' }">Tableau de bord</span>
      </router-link>

      <router-link :class="['button border-t border-white', { 'text-purple bg-purple': currentPage === '/backOffice/blog' }]" to="/backOffice/blog">
        <img src="../../assets/logo_blog.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4">
        <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/blog' }">Blog</span>
      </router-link>

      <router-link :class="['button border-t border-white', { 'text-purple bg-purple': currentPage === '/backOffice/landing' }]" to="/backOffice/landing">
        <img src="../../assets/logo_accueil.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4">
        <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/landing' }">Accueil</span>
      </router-link>

      <router-link :class="['button border-t border-white', { 'text-purple bg-purple': currentPage === '/backOffice/users' }]" to="/backOffice/users">
        <img src="../../assets/logo_utilisateur.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4">
        <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/users' }">Utilisateur</span>
      </router-link>

      <router-link :class="['button border-y border-white', { 'text-purple bg-purple': currentPage === '/backOffice/documentation' }]" to="/backOffice/documentation">
        <img src="../../assets/logo_doc.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4">
        <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/documentation' }">Documentation</span>
      </router-link>

      <router-link :class="['button border-y border-white', { 'text-purple bg-purple': currentPage === '/backOffice/structure' }]" to="/backOffice/structure">
        <img src="../../assets/structure_logo.png" alt="logo" class="material-icons w-[2rem] mt-4 mb-4">
        <span class="text" :class="{ 'text-purple': currentPage === '/backOffice/structure' }">Structure</span>
      </router-link>
    </div>

    <div class="menu-toggle-wrap flex justify-end items-end relative top-0 ease-out duration-200 mt-4 mb-4">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"/><path fill="currentColor" d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/></svg>
        </span>
      </button>
    </div>

  </aside>
</template>



<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const is_expanded = ref(false);
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};

const currentPage = ref(''); // Initialisez currentPage avec une référence

const route = useRoute(); // Obtenez la route actuelle avec useRoute

watch(
  () => route.path, // Surveillez la propriété path de l'objet route
  (newPath) => {
    currentPage.value = newPath; // Met à jour currentPage avec le chemin de la route actuelle
  }
);

// Mettez à jour currentPage lorsque le composant est monté
currentPage.value = route.path;
</script>


<style scoped>
.button .text {
  opacity: 0;
  transition: opacity 0.3s ease-out;
  overflow: hidden; 
  white-space: nowrap; 
}

.button {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  transition: background-color 0.2s ease-out, width 0.2s ease-out;
  gap: 10px;
}

.button:hover {
  background-color: #7c70b0;
}

.menu .button {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s ease-out;
}

.menu .button .material-icons {
  font-size: 2rem;
  color: #fff;
  transition: color 0.2s ease-out;
}

.menu .button .text {
  color: #fff;
  transition: color 0.2s ease-out;
}

.is-expanded {
  width: 250px;
}

.navigation .is_expanded {
  top: -4rem;
}

.is-expanded .menu-toggle-wrap .menu-toggle {
  transform: rotate(180deg);
}

.is-expanded .button .text {
  opacity: 1;
  color: #fff;
}

.menu-toggle-wrap .menu-toggle {
  transition: transform 0.2s ease-out;
}

.menu-toggle-wrap .menu-toggle .material-icons {
  font-size: 2rem;
  color: #fff;
  transition: color 0.2s ease-out;
}

.menu-toggle-wrap .menu-toggle:hover .material-icons {
  color: #7c70b0;
  transform: translateX(0.5rem);
}

.menu-toggle-wrap .menu-toggle .material-icons .menu-toggle {
  transform: rotate(-180deg);
}

</style>




<!-- Exportation du composant -->
<script>

export default {
  name: 'AdminBar',
}

</script>