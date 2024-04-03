<template>
  <div class="dashboard flex bg-back-grey">

    <div class="components">

      <!-- Intégration de la barre latérale -->
      <HorizontalBar />
      <AdminBar />

    </div>


    <!-- Contenu du tableau de bord -->
    <div class="dashboard-container">
      <h1>coucou</h1>
      <p class="mt-10">Vous êtes connecté à votre tableau de bord</p>
    </div>
  </div>
</template>

<script>
// Importation du composant SideBar
import AdminBar from "../../components/backOffice/AdminBar.vue";
import HorizontalBar from "../../components/backOffice/HorizontalBar.vue";

export default {
  components: {
    AdminBar, 
    HorizontalBar
  },
};
</script>

<style>
.dashboard-container {
    flex: 1 1 0;
    padding: 2rem;
}

@media(max-width: 768px) {
    .dashboard-container {
        padding-left: 6rem;
    }
}
</style>
