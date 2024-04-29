<template>
  <aside>
    <div class="icon-burger flex w-full items-center justify-evenly">
        <img src="../assets/logo_typo.png" alt="logo" class="object-cover w-[300px]">
        <img src="../assets/icon-burger.png" @click="toggleMenu()" alt="burger" class="object-cover w-[35px] h-[35px]">

    </div>
    <ul class="navbar flex flex-col gap-10 text-xl mt-10 font-cgothic font-bol justify-center items-center bg-purple text-white opacity-0">
      <li class="menu">
        <router-link to="/" :class="{ 'text-purple underline ': currentPage === '/' }">ACCUEIL</router-link>
      </li>      
      <li class="menu">
        <router-link to="/map" :class="{'text-purple underline ':currentPage === '/map' }">CARTOGRAPHIE</router-link>
      </li>
      <li class="menu">
        <router-link to="/documentation" :class="{ 'text-purple underline ': currentPage === '/documentation' }">DOCUMENTATION</router-link>
      </li>
      <li class="menu">
        <router-link to="/contact" :class="{ 'text-purple underline ': currentPage === '/contact' }">CONTACT</router-link>
      </li>
      <li class="menu">
        <router-link to="/blog" :class="{ 'text-purple underline ': currentPage === '/contact' }">BLOG</router-link>
      </li>
      <li class="menu">
        <router-link to="/APropos" :class="{ 'text-purple underline ':currentPage === '/APropos' }">EN SAVOIR +</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
    name: 'NavigationBarMobile',

    methods: {
        toggleMenu() {
            const menu = document.querySelector('.navbar');
            menu.classList.toggle('opacity-0');
        }
    }
}

</script>

<style>

</style>