<template>
    <aside>
      <div class="icon-burger flex w-full items-center justify-evenly z-30">
        <img v-if="!menuOpen" src="../assets/logo_typo.png" alt="logo" class="object-cover w-[300px]">
        <img v-else src="../assets/logo_typo_blanc.png" alt="close icon" @click="toggleMenu" class="object-cover w-[300px]">
    
        <h1 @click="toggleMenu" id="icon" class="text-3xl font-bold cursor-pointer">X</h1>
      </div>
      <ul class="navbar w-full flex flex-col gap-10 text-xl font-cgothic font-semibold justify-center items-center bg-purple fixed text-white py-5 opacity-0 transition-opacity duration-300">
        <li class="menu">
          <router-link to="/" :class="{ 'text-purple underline': currentPage === '/' }">ACCUEIL</router-link>
        </li>      
        <li class="menu">
          <router-link to="/map" :class="{ 'text-purple underline': currentPage === '/map' }">CARTOGRAPHIE</router-link>
        </li>
        <li class="menu">
          <router-link to="/documentation" :class="{ 'text-purple underline': currentPage === '/documentation' }">DOCUMENTATION</router-link>
        </li>
        <li class="menu">
          <router-link to="/contact" :class="{ 'text-purple underline': currentPage === '/contact' }">CONTACT</router-link>
        </li>
        <li class="menu">
          <router-link to="/blog" :class="{ 'text-purple underline': currentPage === '/blog' }">BLOG</router-link>
        </li>
        <li class="menu">
          <router-link to="/APropos" :class="{ 'text-purple underline': currentPage === '/APropos' }">EN SAVOIR +</router-link>
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'NavigationBarMobile',
    data() {
    return {
      menuOpen: false
    };
    },
    methods: {
      toggleMenu() {
        const menu = document.querySelector('.navbar');
        const iconDiv = document.querySelector('.icon-burger');
        menu.classList.toggle('opacity-0');
        menu.classList.toggle('z-20');
        iconDiv.classList.toggle('bg-purple');
        iconDiv.classList.toggle('transition-opcacity');
        iconDiv.classList.toggle('duration-300');
        iconDiv.classList.toggle('text-white');
        this.menuOpen = !this.menuOpen;


      }
    }
  }
  </script>
  
  <style>
  /* Ajoutez ici vos styles personnalisés si nécessaire */
  </style>
  