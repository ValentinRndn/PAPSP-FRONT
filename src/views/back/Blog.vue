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
              <div class="flex items-center">
                <span v-if="article._epingle" class="text-purple mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m15.113 3.21l.094.083l5.5 5.5a1 1 0 0 1-1.175 1.59l-3.172 3.171l-1.424 3.797a1 1 0 0 1-.158.277l-.07.08l-1.5 1.5a1 1 0 0 1-1.32.082l-.095-.083L9 16.415l-3.793 3.792a1 1 0 0 1-1.497-1.32l.083-.094L7.585 15l-2.792-2.793a1 1 0 0 1-.083-1.32l.083-.094l1.5-1.5a1 1 0 0 1 .258-.187l.098-.042l3.796-1.425l3.171-3.17a1 1 0 0 1 1.497-1.26z"/></svg>
                </span>
                <p>{{ article._titre }}</p>
              </div>
              <div class="edit-post flex gap-4 font-poppins">
                <p class="text-light-grey underline">Archiver</p>
                <p class="text-light-grey underline cursor-pointer" @click="openEditModal(article)">Modifier</p>
                <p class="text-light-grey underline cursor-pointer" @click="deleteArticle(article._id)">Supprimer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal for creating or editing an article -->
      <ModalCreate :visible="isModalVisible" @close="closeModal">
        <h2 class="text-xl font-bold mb-4">{{ isEditing ? 'Modifier l\'article' : 'Créer un nouvel article' }}</h2>
        <form @submit.prevent="isEditing ? updateArticle() : createArticle()">
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
            <Editor api-key='neuzqkwdvgbjt7scku3sa3pl9etohbwieqnb9dcu57sm7cnm' v-model="newArticle.description" :init="editorConfig"></Editor>
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
          <button type="submit" class="bg-purple text-white py-2 px-4 rounded-md">{{ isEditing ? 'Modifier' : 'Créer' }}</button>
        </form>
      </ModalCreate>
    </div>
  </div>
</template>

<script>
import AdminBar from "../../components/backOffice/AdminBar.vue";
import HorizontalBar from "../../components/backOffice/HorizontalBar.vue";
import ModalCreate from "../../components/backOffice/blog/ModalCreate.vue";
import { showAllBlogs, createBlog, deleteBlog, updateBlog } from "../../services/BlogsService.js";
import Editor from '@tinymce/tinymce-vue';

export default {
  components: {
    AdminBar,
    HorizontalBar,  
    ModalCreate,
    Editor,
  },
  data() {
    return {
      editorContent: '',
      editorConfig: {
        apiKey: 'neuzqkwdvgbjt7scku3sa3pl9etohbwieqnb9dcu57sm7cnm', 
        setup: (editor) => {
          editor.on('Change', (e) => {
            this.newArticle.description = editor.getContent();
          });
        }
      },
      isModalVisible: false,
      isEditing: false,
      currentArticleId: null,
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
      this.isEditing = false;
      this.resetArticleForm();
      document.addEventListener('keydown', this.handleKeydown);
    },
    openEditModal(article) {
    this.isModalVisible = true;
    this.isEditing = true;
    this.currentArticleId = article._id;
    this.newArticle = {
      titre: article._titre,
      date: article._date,
      description: article._description,
      epingle: article._epingle, // Assurez-vous que cette propriété est correctement définie
      auteur: article._auteur,
    };
    document.addEventListener('keydown', this.handleKeydown);
  },

    closeModal() {
      this.isModalVisible = false;
      document.removeEventListener('keydown', this.handleKeydown);
    },
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.closeModal();
      } else if (event.key === 'Enter' && this.isModalVisible) {
        this.isEditing ? this.updateArticle() : this.createArticle();
      }
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
        this.refreshArticles(); // Mettre à jour la liste des articles sans recharger la page
      } catch (error) {
        console.error('Error creating article', error);
      }
    },
    async updateArticle() {
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

    const response = await updateBlog(this.currentArticleId, formData);
    console.log(this.currentArticleId);
    console.log('Article updated successfully', response);
    this.closeModal();
    this.refreshArticles();
  } catch (error) {
    console.error('Error updating article', error);
  }
},

    async deleteArticle(id) {
      try {
        await deleteBlog(id);
        this.refreshArticles(); // Mettre à jour la liste des articles sans recharger la page
      } catch (error) {
        console.error('Error deleting article', error);
      }
    },
    resetArticleForm() {
      this.newArticle = {
        titre: '',
        date: '',
        description: '',
        epingle: false,
        auteur: '',
      };
      this.image = null;
    },
    async refreshArticles() {
      try {
        this.articles = await showAllBlogs();
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      }
    },
  },
  async mounted() {
    this.refreshArticles(); // Charger les articles au montage du composant
  },
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

