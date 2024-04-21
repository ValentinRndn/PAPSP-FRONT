<template>
    <div class="dashboard flex bg-back-grey">
  
      <div class="components">
  
        <!-- Intégration de la barre latérale -->
        <HorizontalBar />
        <AdminBar />
  
      </div>
  
  
      <!-- Contenu du tableau de bord -->
      <div class="dashboard-container">
        <div class="last-update mt-10">
          <h1 class="text-3xl text-purple font-bold">Dernière mise à jour</h1>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  // Importation du composant SideBar
  import HorizontalBar from "../../components/backOffice/HorizontalBar.vue";
  
  export default {
    components: {
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
  