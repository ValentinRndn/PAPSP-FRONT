<template>
  <aside class="flex items-center justify-center gap-5 mb-8">
    <img src="../assets/logo_typo.png" alt="logo" class="size-1/4 mt-8 " />

    <ul class="navbar flex gap-10 text-xl mt-10 font-cgothic font-bold text-grey">
      <li :class="{ 'text-purple underline': currentPage === '/' }">
        <router-link to="/">ACCUEIL</router-link>
      </li>
      <li :class="{ 'text-purple underline': currentPage === '/map' }">
        <router-link to="/map">CARTOGRAPHIE</router-link>
      </li>
      <li :class="{ 'text-purple underline': currentPage === '/documentation' }">
        <router-link to="/documentation">DOCUMENTATION</router-link>
      </li>
      <li :class="{ 'text-purple underline': currentPage === '/contact' }">
        <router-link to="/contact">CONTACT</router-link>
      </li>
      <li :class="{ 'text-purple underline': currentPage === '/flyer' }">
        <router-link to="/flyer">EN SAVOIR +</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      currentPage: '' // Initialisez currentPage avec le chemin de la page actuelle
    };
  },
  watch: {
    $route(to) {
      this.currentPage = to.path; // Met à jour currentPage avec le chemin de la route actuelle
    }
  }
};
</script>

<style lang="tailwindcss" scoped></style>
