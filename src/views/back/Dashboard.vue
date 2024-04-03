<template>
  <div class="dashboard ">
    <!-- Intégration de la barre latérale -->
    <HorizontalBar />
    <AdminBar />



    <!-- Contenu du tableau de bord -->
    <div class="dashboard-container">
      <h1>coucou</h1>
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
