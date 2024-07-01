<template>
  <div class="dashboard flex bg-back-grey font-poppins">
    <div class="components">
      <!-- Intégration de la barre latérale -->
      <HorizontalBar />
      <AdminBar />
    </div>
    <div class="content w-full">
      <!-- Contenu du tableau de bord -->
      <div class="dashboard-container">
        <div class="update-keys mt-16">
          <div class="button-container flex gap-5">
            <button @click="openModal" class="add-button bg-purple-fonce text-white py-4 px-6 rounded-md shadow-xl font-poppins font-bold text-center hover:scale-105 duration-200">AJOUTER UN NOUVEAU DOCUMENT</button>
          </div>

          <div class="posts-keys flex flex-col gap-5 w-full bg-white p-4 mt-10 rounded-md shadow-xl font-poppins justify-center md:items-center md:w-full md:h-4/6">
            <h3 class="font-bold border-b border-b-solid border-light-grey pb-5 pt-2 text-center">Gérer mes documents</h3>

            <div v-for="doc in documents" :key="doc.id" class="post-field flex w-full justify-between border-b border-b-solid border-light-grey pb-5 md:flex-col md:items-center">
              <p>{{ doc.titre }}</p>
              <div class="edit-post flex gap-4 font-poppins">
                <p class="text-light-grey underline">Modifier</p>
                <p class="text-light-grey underline cursor-pointer">Supprimer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

            <!-- Modal for creating a new File -->
            <ModalCreate :visible="isModalVisible" @close="closeModal ">
        <h2 class="text-xl font-bold mb-4">Créer un nouveau document</h2>
        <form @submit.prevent="createFile" enctype="multipart/form-data">
          <div class="mb-4">
            <label for="titre" class="block text-sm font-medium text-gray-700">Titre</label>
            <input v-model="newFile.titre" type="text" id="titre" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea v-model="newFile.description" id="description" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required></textarea>
          </div>
          <div class="mb-4">
            <label for="categorie" class="block text-sm font-medium text-gray-700">Catégorie</label>
            <input v-model="newFile.categorie" type="text" id="categorie" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
            <input @change="onFileChange" type="file" id="image" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
          </div>
          <div class="mb-4">
            <label for="pdf" class="block text-sm font-medium text-gray-700">PDF</label>
            <input @change="onFileChange" type="file" id="pdf" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"> 
          </div>
          <button type="submit" class="bg-purple text-white py-2 px-4 rounded-md">Créer</button>
        </form>
      </ModalCreate>

    </div>
  </div>
</template>

<script>
// Importation des composants nécessaires
import AdminBar from "../../components/backOffice/AdminBar.vue";
import HorizontalBar from "../../components/backOffice/HorizontalBar.vue";
import { getAllFiles, createFile, deleteFile } from "../../services/GuideService.js";
import ModalCreate from "../../components/backOffice/blog/ModalCreate.vue";


export default {
  components: {
    AdminBar,
    HorizontalBar,
    ModalCreate,
  },
  data() {
    return {
      isModalVisible: false,
      newFile: {
        id: '',
        titre: '',
        description: '',
        categorie: '',
      },
      image: null,
      pdf: null,

      documents: [],
    };
  },
  methods: {
  openModal() {
    this.isModalVisible = true;
  },
  closeModal() {
    this.isModalVisible = false;
  },
  onFileChange(event) {
  const inputName = event.target.id; // Récupérer l'ID de l'élément input

  if (inputName === 'image') {
    this.image = event.target.files[0];
  } else if (inputName === 'pdf') {
    this.pdf = event.target.files[0];
  }
},

  async createFile() {
    try {
      const formData = new FormData();
      formData.append('titre', this.newFile.titre);
      formData.append('description', this.newFile.description);
      formData.append('categorie', this.newFile.categorie);
      
      if (this.image) {
        formData.append('image', this.image);
      }

      if (this.pdf) {
        formData.append('pdf', this.pdf);
      }

      const response = await createFile(formData);
      console.log('File created successfully', response);
      this.closeModal(); 
    } catch (error) {
      console.error('Error creating File', error);
    }
    window.location.reload();
},
  async deleteFile(id) {
      try {
        await deleteFile(id);
        window.location.reload();
      } catch (error) {
        console.error('Error deleting File', error);
      }
    },

},
  async created() {
    try {
      const response = await getAllFiles();
      this.documents = response.map(doc => ({
        id: doc.id,
        titre: doc.titre,
        description: doc.description,
        image: doc.image,
        categorie: doc.categorie,
        pdf: doc.pdf
      }));
    } catch (error) {
      console.error("Error fetching documents:", error);
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
