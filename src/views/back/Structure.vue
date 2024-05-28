<template>
  <div class="dashboard flex bg-back-grey font-poppins">
    <div class="components">
      <HorizontalBar />
      <AdminBar />
    </div>
    <div class="content w-full">
      <div class="dashboard-container">
        <div class="update-keys mt-16">
          <div class="button-container flex gap-5">
            <button @click="openModal" class="add-button bg-purple-fonce text-white py-4 px-6 rounded-md shadow-xl font-poppins font-bold text-center hover:scale-105 duration-200">AJOUTER UNE NOUVELLE STRUCTURE</button>
          </div>

          <div class="posts-keys flex flex-col gap-5 w-full bg-white p-4 mt-10 rounded-md shadow-xl font-poppins justify-center md:items-center md:w-full md:h-4/6">
            <h3 class="font-bold border-b border-b-solid border-light-grey pb-5 pt-2 text-center">Gérer mes structures</h3>

            <div v-for="structure in structures" :key="structure.id" class="post-field flex w-full justify-between border-b border-b-solid border-light-grey pb-5 md:flex-col md:items-center">
              <p>{{ structure.antenne }}</p>
              <div class="edit-post flex gap-4 font-poppins">
                <p class="text-light-grey underline cursor-pointer" @click="editStructure(structure.id)">Modifier</p>
                <p class="text-light-grey underline cursor-pointer" @click="deleteStructure(structure.id)">Supprimer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalCreate :visible="isModalVisible" @close="closeModal">
        <h2 class="text-xl font-bold mb-4">Créer une nouvelle structure</h2>
        <form @submit.prevent="createStructure" enctype="multipart/form-data" class="scrollable-form">
          <div class="mb-4">
            <label for="antenne" class="block text-sm font-medium text-gray-700">Antenne</label>
            <input v-model="newStructure.antenne" type="text" id="antenne" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="adresse" class="block text-sm font-medium text-gray-700">Adresse</label>
            <input v-model="newStructure.adresse" type="text" id="adresse" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="coos_gps" class="block text-sm font-medium text-gray-700">Coordonnées GPS</label>
            <input v-model="newStructure.coos_gps" type="text" id="coos_gps" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="departement" class="block text-sm font-medium text-gray-700">Département</label>
            <input v-model="newStructure.departement" type="text" id="departement" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="telephone" class="block text-sm font-medium text-gray-700">Téléphone</label>
            <input v-model="newStructure.telephone" type="text" id="telephone" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="mail" class="block text-sm font-medium text-gray-700">Mail</label>
            <input v-model="newStructure.mail" type="email" id="mail" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="horaires_lundi" class="block text-sm font-medium text-gray-700">Horaires Lundi</label>
            <input v-model="newStructure.horaires_lundi" type="text" id="horaires_lundi" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="horaires_mardi" class="block text-sm font-medium text-gray-700">Horaires Mardi</label>
            <input v-model="newStructure.horaires_mardi" type="text" id="horaires_mardi" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="horaires_mercredi" class="block text-sm font-medium text-gray-700">Horaires Mercredi</label>
            <input v-model="newStructure.horaires_mercredi" type="text" id="horaires_mercredi" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="horaires_jeudi" class="block text-sm font-medium text-gray-700">Horaires Jeudi</label>
            <input v-model="newStructure.horaires_jeudi" type="text" id="horaires_jeudi" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="horaires_vendredi" class="block text-sm font-medium text-gray-700">Horaires Vendredi</label>
            <input v-model="newStructure.horaires_vendredi" type="text" id="horaires_vendredi" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="horaires_samedi" class="block text-sm font-medium text-gray-700">Horaires Samedi</label>
            <input v-model="newStructure.horaires_samedi" type="text" id="horaires_samedi" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="horaires_dimanche" class="block text-sm font-medium text-gray-700">Horaires Dimanche</label>
            <input v-model="newStructure.horaires_dimanche" type="text" id="horaires_dimanche" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="besoin" class="block text-sm font-medium text-gray-700">Besoin</label>
            <input v-model="newStructure.besoin" type="text" id="besoin" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          </div>
          <div class="mb-4">
            <label for="categorie" class="block text-sm font-medium text-gray-700">Catégorie</label>
            <input v-model="newStructure.categorie" type="text" id="categorie" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
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
import { getAllStructures } from "../../services/StructuresService.js";
import ModalCreate from "../../components/backOffice/blog/ModalCreate.vue";

export default {
  components: {
    AdminBar,
    HorizontalBar,
    ModalCreate,
    getAllStructures,
  },
  data() {
    return {
      isModalVisible: false,
      newStructure: {
        antenne: '',
        adresse: '',
        coos_gps: '',
        departement: '',
        telephone: '',
        mail: '',
        horaires_lundi: '',
        horaires_mardi: '',
        horaires_mercredi: '',
        horaires_jeudi: '',
        horaires_vendredi: '',
        horaires_samedi: '',
        horaires_dimanche: '',
        besoin: '',
        categorie: ''
      },
      structures: [],
    };
  },
methods: {
  openModal() {
    this.isModalVisible = true;
  },
  closeModal() {
    this.isModalVisible = false;
  },
  async createStructure() {
    try {
      const formData = new FormData();
      for (let key in this.newStructure) {
        formData.append(key, this.newStructure[key]);
      }
      // Ajoutez ici les appels API pour créer une nouvelle structure
      // const response = await createStructure(formData);
      console.log('Structure created successfully');
      this.closeModal();
      this.fetchStructures();
    } catch (error) {
      console.error('Error creating structure', error);
    }
  },
  async deleteStructure(id) {
    try {
      // Ajoutez ici les appels API pour supprimer une structure
      // await deleteStructure(id);
      console.log('Structure deleted successfully');
      this.fetchStructures();
    } catch (error) {
      console.error('Error deleting structure', error);
    }
  },
  async fetchStructures() {
    try {
      const response = await getAllStructures();
      this.structures = response.map(structure => ({
        id: structure._id,
        antenne: structure._antenne,
        adresse: structure._adresse,
        coos_gps: structure._coos_gps,
        departement: structure._departement,
        telephone: structure._telephone,
        mail: structure._mail,
        horaires_lundi: structure._horaires_lundi,
        horaires_mardi: structure._horaires_mardi,
        horaires_mercredi: structure._horaires_mercredi,
        horaires_jeudi: structure._horaires_jeudi,
        horaires_vendredi: structure._horaires_vendredi,
        horaires_samedi: structure._horaires_samedi,
        horaires_dimanche: structure._horaires_dimanche,
        besoin: structure._besoin,
        categorie: structure._categorie,
      }));
    } catch (error) {
      console.error("Error fetching structures:", error);
    }
  }
},

created() {
  this.fetchStructures();
},
};
</script>

<style>
.dashboard-container {
  flex: 1 1 0;
  padding: 2rem;
}

.scrollable-form {
  max-height: 80vh; /* Limitez la hauteur à 80% de la hauteur de la vue */
  overflow-y: auto; /* Activez le défilement vertical */
  padding-right: 1rem; /* Ajoutez du padding pour éviter que le contenu touche les bords */
}

@media(max-width: 768px) {
  .dashboard-container {
    padding-left: 6rem;
  }
}
</style>
