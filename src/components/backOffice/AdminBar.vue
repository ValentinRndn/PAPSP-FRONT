<template>
  <aside :class="{ 'is-expanded': is_expanded }" class="flex flex-col w-[calc(2rem+32px)] min-h-[100vh] overflow-hidden p-4 bg-purple-fonce ease-out duration-200">

    <div class="menu-toggle-wrap flex justify-end mb-4 relative top-0 ease-out duration-200 ">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"/><path fill="currentColor" d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/></svg>
        </span>
      </button>
    </div>

    <div class="my-0 -mx-4">
      <router-link class="button" to="/">
        <img src="../../assets/logo_back.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4">
        <span class="text">Retour au site</span>
      </router-link>

      <router-link class="button" to="/">
        <img src="../../assets/logo_dash.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4 ">
        <span class="text">Tableau de bord</span>
      </router-link>

      <router-link class="button" to="/">
        <img src="../../assets/logo_blog.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4 ">
        <span class="text">Blog</span>
      </router-link>

      <router-link class="button" to="/">
        <img src="../../assets/logo_accueil.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4 ">
        <span class="text">Accueil</span>
      </router-link>

      <router-link class="button" to="/">
        <img src="../../assets/logo_utilisateur.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4 ">
        <span class="text">Utilisateur</span>
      </router-link>

      <router-link class="button" to="/">
        <img src="../../assets/logo_doc.svg" alt="logo" class="material-icons w-[2rem] mt-4 mb-4 ">
        <span class="text">Documentation</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>

import { ref } from 'vue'

const is_expanded = ref(false)
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
}
</script>

<style scoped>
.button .text {
  opacity: 0;
  transition: 0.3s ease-out;
}

.button {
  display: flex;
  align-items: center;
  text-decoration: none;

  padding: 0 1rem;
  transition: 0.2s ease-out;
  gap: 10px

}

.button:hover {
  background-color: #7C70B0;

}
.menu .button{
  display: flex;
  align-items: center;
  text-decoration: none;

  padding: 0.5rem 1rem;
  transition: 0.2s ease-out;
}

.menu .button .material-icons {
  font-size: 2rem;
  color: #fff;
  transition: 0.2s ease-out;
}

.menu .button .text {
  color: #fff;
  transition: 0.2s ease-out;
}


.is-expanded {
  width: 250px;
}

.is-expanded .menu-toggle-wrap {
  top: 4rem;
}

.is-expanded .menu-toggle-wrap .menu-toggle {
  transform: rotate(180deg);
}

.is-expanded .button .text {
  opacity: 1;
  color: #fff;
}
.menu-toggle-wrap .menu-toggle {
  transition: 0.2s ease-out;
}

.menu-toggle-wrap .menu-toggle .material-icons {
  font-size: 2rem;
  color: #fff;
  transition: 0.2s ease-out;
}

.menu-toggle-wrap .menu-toggle:hover .material-icons {
  color: #7C70B0;
  transform: translateX(0.5rem);
}

.menu-toggle-wrap .menu-toggle .material-icons .menu-toggle {
  transform: rotate(-180deg);
}
</style>
