<template>
  <div class="dashboard flex bg-back-grey font-poppins">
    <div class="components">
      <!-- Intégration de la barre latérale -->
      <HorizontalBar />
      <AdminBar />
    </div>
    <div class="content w-full">
      <!-- <LastUpdate v-if="lastUpdate !== null" :lastUpdateDate="lastUpdate"></LastUpdate> -->
      <!-- Contenu du tableau de bord -->
      <div class="dashboard-container">
        <div class="update-keys mt-16">
          <div class="button-container-">
            <button @click="openModal" class="add-button bg-purple-fonce text-white py-4 px-6 rounded-md shadow-xl font-poppins font-bold text-center hover:scale-105 duration-200">
              AJOUTER UN NOUVEL UTILISATEUR
            </button>
          </div>

          <div class="posts-keys flex flex-col gap-5 w-1/3 bg-white p-4 mt-10 rounded-md shadow-xl font-poppins justify-center md:items-center md:w-full md:h-4/6">
            <h3 class="font-bold border-b border-b-solid border-light-grey pb-5 pt-2 text-center">Gestion des utilisateurs</h3>

            <div class="post-field flex w-full justify-between items-center border-b border-b-solid border-light-grey pb-5 md:flex-col">
              <div class="user flex gap-2 justify-center items-center">
                <!-- <img src="../../assets/back/users/user.png" class="w-[25px]" alt="user-icon"> -->
                <p>Agathe Pichon</p>
              </div>
              <div class="edit-post flex gap-4 font-poppins">
                <p class="text-light-grey underline">Modifier</p>
                <p class="text-light-grey underline">Supprimer</p>
              </div>
            </div>

            <div class="post-field flex w-full justify-between items-center border-b border-b-solid border-light-grey pb-5 md:flex-col">
              <div class="user flex gap-2 justify-center items-center">
                <!-- <img src="../../assets/back/users/user.png" class="w-[25px]" alt="user-icon"> -->
                <p>Clarisse Lechasles</p>
              </div>
              <div class="edit-post flex gap-4 font-poppins">
                <p class="text-light-grey underline">Modifier</p>
                <p class="text-light-grey underline">Supprimer</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Modal for creating a new user -->
      <ModalCreate :visible="isModalVisible" @close="closeModal">
        <h2 class="text-xl font-bold mb-4">Créer un nouvel utilisateur</h2>
        <form @submit.prevent="createUser">
          <div class="mb-4">
            <label for="pseudonyme" class="block text-sm font-medium text-gray-700">Pseudonyme</label>
            <input v-model="users.pseudonyme" type="text" id="pseudonyme" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="mdp" class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input v-model="users.mdp" type="password" id="mdp" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <button type="submit" class="bg-purple text-white py-2 px-4 rounded-md">Créer</button>
        </form>
      </ModalCreate>

    </div>
  </div>
</template>

<script>
import AdminBar from "../../components/backOffice/AdminBar.vue";
import HorizontalBar from "../../components/backOffice/HorizontalBar.vue";
import { getAllUsers } from "../../services/UsersService.js";
import ModalCreate from "../../components/backOffice/blog/ModalCreate.vue";

export default {
  components: {
    AdminBar,
    HorizontalBar,
    ModalCreate
  },
  data() {
    return {
      isModalVisible: false,
      users: {
        pseudonyme: '',
        mdp: ''
      },
      utilisateurs: []
    }
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    async showUsers() {
      this.utilisateurs = await getAllUsers();
      console.log(this.utilisateurs);
    },
    async createUser() {
      try {
        const formData = new FormData();
        formData.append('pseudonyme', this.users.pseudonyme);
        formData.append('mdp', this.users.mdp);

        const response = await createBlog(formData);
        console.log('Utilisateur créé avec succès', response);
        this.closeModal(); // Fermer la modal après la création
      } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur', error);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.showUsers();
  }
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
