<template>
  <footer class="bg-grey  text-white border-t relative font-cgothic mx-auto flex flex-col items-center ">


      <!-- Bandeau blanc avec les logos -->
      <div class="bg-white py-10 w-full flex justify-center items-center gap-24 shadow-md md:flex-col">
        <img src="../assets/welcome/logo_agrasc.jpg" alt="Logo AGRASC" class="h-28 object-cover" />
        <img src="../assets/prefecture-de-region-normandie_logo.png" alt="Logo Préfecture de Normandie" class="h-28  object-cover" />
      </div>



      <div class="footer-bottom-container flex justify-evenly w-full my-12 md:flex-col md:justify-center md:items-center md:text-center">
      <div class="left-footer space-y-2 mb-4">
  <p class="">
    Pilotage : Accueil Service & PAPSP de Caen
  </p>

  <p class="">
    Création : <a href="https://valentin-renaudin.com" class="hover:underline">Valentin RENAUDIN</a>
  </p>

  <p class="">
    Maintenance : <a href="https://valentin-renaudin.com" class="hover:underline">Valentin RENAUDIN</a>
  </p>
</div>

<div class="right-footer h-full space-y-2 flex flex-col">
  <router-link to="/legalNotices" class="hover:underline">Mentions légales</router-link>
    <a href="#" @click.prevent="openCookieSettings" class="hover:underline ">Préférences Cookies</a>
</div>

</div>
<p class="font-semibold absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:left-0 sm:-translate-x-0 sm:w-full sm:text-center">
  © 2024 AGRASC – Tous droits réservés
</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    openCookieSettings() {
      this.$emit('openCookieSettings');
    },
  },
};
</script>

<style scoped>
/* Styles personnalisés */


</style>
