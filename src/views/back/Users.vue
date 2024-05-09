<template>


  <div class="dashboard flex  bg-back-grey font-poppins">
    <div class="components">
      <!-- Intégration de la barre latérale -->
      <HorizontalBar />
      <AdminBar />
    </div>
    <div class="content w-full">
      <!-- <LastUpdate v-if="lastUpdate !== null" :lastUpdateDate="lastUpdate"></LastUpdate> -->
    <!-- Contenu du tableau de bord -->
    <div class="dashboard-container ">
      <div class="update-keys mt-16  ">
        <div class="button-container-">
        <button class="add-button bg-purple-fonce text-white py-4 px-6 rounded-md shadow-xl  font-poppins font-bold text-center  hover:scale-105 duration-200">AJOUTER UN NOUVEL UTILISATEUR</button>
      </div>

        <div class="posts-keys flex flex-col gap-5  w-1/3 bg-white p-4 mt-10 rounded-md shadow-xl font-poppins justify-center md:items-center md:w-full md:h-4/6">
        <h3 class="font-bold border-b border-b-solid border-light-grey pb-5 pt-2 text-center">Gestion des utilisateurs</h3>

        <div class="post-field flex w-full justify-between items-center border-b border-b-solid border-light-grey pb-5 md:flex-col">
          <div class="user flex gap-2 justify-center items-center">
          <img src="../../assets/back/users/user.png" class="w-[25px]" alt="user-icon">
          <p>Agathe Pichon</p>
        </div>
          <div class="edit-post flex  gap-4 font-poppins">
            <p class="text-light-grey underline">Modifier</p>
            <p class="text-light-grey underline">Supprimer</p>
          </div>
        </div>

        <div class="post-field flex w-full justify-between items-center border-b border-b-solid border-light-grey pb-5 md:flex-col">
          <div class="user flex gap-2 justify-center items-center">
          <img src="../../assets/back/users/user.png" class="w-[25px]" alt="user-icon">
          <p>Clarisse Lechasles</p>
        </div>
          <div class="edit-post flex  gap-4 font-poppins">
            <p class="text-light-grey underline">Modifier</p>
            <p class="text-light-grey underline">Supprimer</p>
          </div>
        </div>


      </div>
      </div>
    </div>
  </div>
  </div>
</template>
  
  <script>
  // Importation du composant SideBar
  import AdminBar from "../../components/backOffice/AdminBar.vue";
  import HorizontalBar from "../../components/backOffice/HorizontalBar.vue";
  import { getAllUsers }  from "../../services/UsersService.js";
  
  export default {
    components: {
      AdminBar, 
      HorizontalBar
    },
  data() {
    return {
      users: [],
    }
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
  