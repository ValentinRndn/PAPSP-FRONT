<template>
  <div class="dashboard flex bg-back-grey font-poppins">
    <div class="components">
      <!-- Intégration de la barre latérale -->
      <HorizontalBar />
      <AdminBar />
    </div>
    <div class="content w-full">
      <div class="dashboard-container">
        <div class="update-keys mt-16">
          <div class="button-container flex gap-5">
            <button @click="openModal" class="add-button bg-purple-fonce text-white py-4 px-6 rounded-md shadow-xl font-poppins font-bold text-center hover:scale-105 duration-200">AJOUTER UN NOUVEL ARTICLE</button>
            <button class="archives-button bg-purple text-white py-4 px-10 rounded-md shadow-xl font-poppins font-bold text-center hover:scale-105 duration-200">ARCHIVES</button>
          </div>

          <div class="posts-keys flex flex-col gap-5 w-full bg-white p-4 mt-10 rounded-md shadow-xl font-poppins justify-center md:items-center md:w-full md:h-4/6">
            <h3 class="font-bold border-b border-b-solid border-light-grey pb-5 pt-2 text-center">Gérer mes articles</h3>
           
            <div v-for="article in articles" :key="article._id" class="post-field flex w-full justify-between border-b border-b-solid border-light-grey pb-5 md:flex-col md:items-center">
              <p>{{ article._titre }}</p>
              <div class="edit-post flex gap-4 font-poppins">
                <p class="text-light-grey underline">Archiver</p>
                <p class="text-light-grey underline">Modifier</p>
                <p class="text-light-grey underline cursor-pointer" @click="deleteArticle(article._id)">Supprimer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal for creating a new article -->
      <ModalCreateBlog :visible="isModalVisible" @close="closeModal">
        <h2 class="text-xl font-bold mb-4">Créer un nouvel article</h2>
        <form @submit.prevent="createArticle">
          <div class="mb-4">
            <label for="titre" class="block text-sm font-medium text-gray-700">Titre</label>
            <input v-model="newArticle.titre" type="text" id="titre" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
            <input v-model="newArticle.date" type="date" id="date" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea v-model="newArticle.description" id="description" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required></textarea>
          </div>
          <div class="mb-4">
            <label for="auteur" class="block text-sm font-medium text-gray-700">Auteur</label>
            <input v-model="newArticle.auteur" type="text" id="auteur" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="epingle" class="block text-sm font-medium text-gray-700">Épinglé</label>
            <input v-model="newArticle.epingle" type="checkbox" id="epingle">
          </div>
          <div class="mb-4">
            <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
            <input @change="onFileChange" type="file" id="image" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
          </div>
          <button type="submit" class="bg-purple text-white py-2 px-4 rounded-md">Créer</button>
        </form>
      </ModalCreateBlog>
    </div>
  </div>
</template>

<script>
import AdminBar from "../../components/backOffice/AdminBar.vue";
import HorizontalBar from "../../components/backOffice/HorizontalBar.vue";
import ModalCreateBlog from "../../components/backOffice/blog/ModalCreate.vue";
import { showAllBlogs, createBlog, deleteBlog, updateBlog } from "../../services/BlogsService.js";

export default {
  components: {
    AdminBar,
    HorizontalBar,  
    ModalCreateBlog,
    showAllBlogs,
  },
  data() {
    return {
      isModalVisible: false,
      newArticle: {
        titre: '',
        date: '',
        description: '',
        epingle: false,
        auteur: '',
      },
      image: null,
      articles: [],
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
    this.image = event.target.files[0];
  },
  async createArticle() {
    try {
      const formData = new FormData();
      formData.append('titre', this.newArticle.titre);
      formData.append('date', this.newArticle.date);
      formData.append('description', this.newArticle.description);
      formData.append('epingle', this.newArticle.epingle);
      formData.append('auteur', this.newArticle.auteur);
      if (this.image) {
        formData.append('image', this.image);
      }


      const response = await createBlog(formData);
      console.log('Article created successfully', response);
      this.closeModal(); // Optionnel : fermer la modal après la création
    } catch (error) {
      console.error('Error creating article', error);
    }
    window.location.reload()
  },
  async deleteArticle(id) {
      try {
        await deleteBlog(id);
        window.location.reload();
      } catch (error) {
        console.error('Error deleting article', error);
      }
    },

},
async mounted() {
    try {
      this.articles = await showAllBlogs();
    } catch (error) {
      console.error('Failed to fetch articles:', error);
    }
  }


};
</script>

<style>
.dashboard-container {
  flex: 1 1 0;
  padding: 2rem;
}

@media (max-width: 768px) {
  .dashboard-container {
    padding-left: 6rem;
  }
}
</style>
