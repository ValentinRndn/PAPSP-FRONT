<template>
  <aside>
    <ul class="navbar flex justify-center gap-5 text-2xl mt-10 ">
      <li :class="{ 'text-blue-500 underline': currentPage === '/' }">
        <router-link to="/">Accueil</router-link>
      </li>
      <li :class="{ 'text-blue-500 underline': currentPage === '/map' }">
        <router-link to="/map">Cartographie</router-link>
      </li>
      <li :class="{ 'text-blue-500 underline': currentPage === '/documentation' }">
        <router-link to="/documentation">Documentation</router-link>
      </li>
      <li :class="{ 'text-blue-500 underline': currentPage === '/contact' }">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li :class="{ 'text-blue-500 underline': currentPage === '/flyer' }">
        <router-link to="/flyer">Flyer du site</router-link>
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
