<template class="">
  <aside class="flex items-center justify-center gap-5 mb-8 sm:hidden">
    <img src="../assets/logo_typo.png" alt="logo" class="size-1/4 mt-8 " />

    <ul class="navbar flex gap-10 text-xl mt-10 font-cgothic font-bold text-grey">
      <li class="menu">
        <router-link to="/" :class="{ 'text-purple underline ': currentPage === '/' }">ACCUEIL</router-link>
      </li>      
      <li class="menu">
        <router-link to="/map" :class="{'text-purple underline ':currentPage === '/map' }">CARTOGRAPHIE</router-link>
      </li>
      <li class="menu">
        <router-link to="/guide" :class="{ 'text-purple underline ': currentPage === '/documentation' }">GUIDE</router-link>
      </li>
      <li class="menu">
        <router-link to="/contact" :class="{ 'text-purple underline ': currentPage === '/contact' }">CONTACT</router-link>
      </li>
      <li class="menu">
        <router-link to="/blog" :class="{ 'text-purple underline ': currentPage === '/blog' }">BLOG</router-link>
      </li>
      <li class="menu">
        <router-link to="/APropos" :class="{ 'text-purple underline ':currentPage === '/APropos' }">EN SAVOIR +</router-link>
      </li>
    </ul>
  </aside>
</template>



<script>
export default {
  name: 'NavigationBar',
  props: ['currentRoute'] // Déclarez la prop currentRoute

  // Le reste de votre code
};
</script>

<style lang="tailwindcss" scoped></style>
