<template>
  <div class="dashboard flex bg-back-grey">
    <div class="components">
      <!-- Intégration de la barre latérale -->
      <HorizontalBar />
      <AdminBar />
    </div>
    <!-- Contenu du tableau de bord -->
    <div class="dashboard-container mx:auto ">
      <div class="update-keys flex flex-col gap-5 w-1/3 bg-white p-4 mt-16 rounded-md shadow-xl font-poppins justify-center md:items-center md:w-full md:h-4/6">
        <h3 class="font-bold border-b border-b-solid border-light-grey pb-5 pt-2">Mise à jour données</h3>

        <div class="update-field flex w-full border-b border-b-solid border-light-grey pb-5 md:flex-col md:items-center">
          <p>Personnes contactées</p>
          <input v-model="personnes" class="border border-solid border-light-grey ml-auto shadow-lg w-[100px] text-center rounded-md md:mr-auto" type="number" name="updateNumber" id="first" maxlength="10">
        </div>

        <div class="update-field flex w-full border-b border-b-solid border-light-grey pb-5 md:flex-col md:items-center">
          <p>Personnes rencontrées</p>
          <input v-model="maraudes" class="border border-solid border-light-grey ml-auto shadow-lg w-[100px] text-center rounded-md md:mr-auto" type="number" name="updateNumber" id="second" maxlength="10">
        </div>

        <div class="update-field flex w-full border-b border-b-solid border-light-grey pb-5 md:flex-col md:items-center">
          <p>Maraudes effectuées</p>
          <input v-model="preservatifs" class="border border-solid border-light-grey ml-auto shadow-lg w-[100px] text-center rounded-md md:mr-auto" type="number" name="updateNumber" id="third" maxlength="10">
        </div>

        
        <!-- Autres champs d'entrée -->

        <button @click="saveStats" class="update-button bg-purple-fonce text-white p-2 rounded-md shadow-xl ml-auto font-poppins font-bold text-center md:mr-auto hover:scale-105 duration-200">SAUVEGARDER</button>
      </div>
    </div>
  </div>
</template>

<script>
import { stringifyQuery } from 'vue-router';
// Importation du composant SideBar
import AdminBar from "../../components/backOffice/AdminBar.vue";
import HorizontalBar from "../../components/backOffice/HorizontalBar.vue";
import { saveStatistiques } from "../../services/StatistiquesService.js";
import { showNumbers } from "../../services/StatistiquesService.js";

export default {
  components: {
    AdminBar,
    HorizontalBar
  },
  data() {
    return {
      numbers: [],
      personnes: null, // Modifier les noms des propriétés
      maraudes: null,
      preservatifs: null,
    };
  },
  methods: {
   async saveStats() {
      // Utilisez les valeurs des données pour enregistrer les statistiques
      const Statistique = {
        personnes: this.personnes,
        maraudes: this.maraudes,
        preservatifs: this.preservatifs,
      };

      // Appelez la fonction de service pour enregistrer les statistiques
      saveStatistiques(Statistique)
        .then(response => {
          console.log("Statistiques enregistrées avec succès :", response);
        })
        .catch(error => {
          console.error("Erreur lors de l'enregistrement des statistiques :", error);
        });
    },
    async showNumbers() {
  try {
    const statisticsArray = await showNumbers(); 
    const statistics = statisticsArray[0];  
    console.log('Statistiques récupérées:', statistics);

    if (statistics) {
      this.personnes = statistics.personnes || null;
      this.maraudes = statistics.maraudes || null;
      this.preservatifs = statistics.preservatifs || null;
    } else {
      console.error("Les statistiques ne peuvent pas être récupérées.");
    }

    this.error = null;
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques :', error);
    this.error = "Une erreur s'est produite lors de la récupération des statistiques";
  }
}


  },
  mounted() {
    this.showNumbers();
  }, 
  }
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
