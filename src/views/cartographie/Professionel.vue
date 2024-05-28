<template>
  <NavigationBar />

  <div class="page-container flex h-[700px] items-center">
    <div class="categories-container bg-purple-fonce w-[1/3] h-full px-6 flex flex-col justify-center">
      <h1 class="text-white text-2xl font-bold mb-6 font-cgothic">PAPSP VOUS ORIENTE :</h1>
      <div class="checkboxes flex flex-col gap-3 text-white text-xl">

        <div class="checkboxes flex flex-col gap-4 font-poppins relative">

          <div v-if="showPopup" class="popup">
            <div class="popup-content text-black">
              <p>
                La cartographie du programme
                de prévention & d’accompagnement des personnes en situation de prostitution vous permet de trouver un établissement
                adapté à vos besoins dans toute la région Normande
              </p>
              <img @click="hidePopup" class="absolute top-5 right-5 w-[20px] cursor-pointer" src="../../assets/map/close-popup.png" alt="hide_arrow">
            </div>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="medecine-generale" name="scales" @change="updateSelectedCategories" />
            <label for="scales">Médecine générale</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="depistage" name="scales" @change="updateSelectedCategories" />
            <label for="scales">Me faire dépister</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="sante-sexuelle" name="scales" @change="updateSelectedCategories" />
            <label for="scales">Santé sexuelle</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="soutien" name="scales" @change="updateSelectedCategories" />
            <label for="scales">Soutien</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="accompagnement-psychologique" name="scales" @change="updateSelectedCategories" />
            <label for="scales">Accompagnement psychologique</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="sortie-prostitution" name="scales" @change="updateSelectedCategories" />
            <label for="scales">Accueil de jour - Parcours sortie de prostitution</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="preservatif" name="scales" @change="updateSelectedCategories" />
            <label for="scales">Distribution préservtaifs - Accompagnement - Soutien</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="plainte" name="scales" @change="updateSelectedCategories" />
            <label for="scales">Dépôt de plainte</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="droit-sante" name="scales" @change="updateSelectedCategories" />
            <label for="scales">Accès aux droits de santé</label>
          </div>


        </div>
      </div>
    </div>
    <div id="map" class="h-full  w-full"></div>
  </div>

  <Footer />
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import NavigationBar from "../../components/NavigationBar.vue";
import Footer from "../../components/Footer.vue";
import { getAllStructures } from "../../services/StructuresService";
import { iconColors, createIcon } from "../../services/IconMap";

export default {
  data() {
    return {
      map: null,
      structures: [],
      showPopup: false,
      selectedCategories: [],
      markers: [],
    };
  },
  methods: {
    initMap() {
      this.map = L.map("map").setView([49.183333, -0.35], 13);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.map);
    },
    async showStructures() {
      try {
        const structures = await getAllStructures();
        console.log('Structures fetched:', structures);
        this.structures = structures;
        this.addMarkers();
      } catch (error) {
        console.error('Error fetching structures:', error);
      }
    },
    updateSelectedCategories() {
      this.selectedCategories = [];
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          this.selectedCategories.push(checkbox.id);
        }
      });
      // Retirer les marqueurs des catégories décochées
      this.removeMarkers();
      // Ajouter les marqueurs des catégories sélectionnées
      this.addMarkers();
    },
    removeMarkers() {
      this.markers.forEach(marker => {
        this.map.removeLayer(marker);
      });
      this.markers = [];
    },
    addMarkers() {
      this.structures.forEach(structure => {
        if (structure._coos_gps && this.selectedCategories.includes(structure._categorie)) {
          const [lat, lon] = structure._coos_gps.split(',').map(coord => parseFloat(coord));
          if (!isNaN(lat) && !isNaN(lon)) {
            const category = structure._categorie;
            const color = iconColors[category];
            const marker = L.marker([lat, lon], { icon: createIcon(color) }).addTo(this.map);
            marker.bindPopup(`<b>${structure._antenne}</b><br>${structure._adresse}<br>${structure._telephone}`);
            this.markers.push(marker);
          } else {
            console.warn('Invalid coordinates for structure:', structure);
          }
        }
      });
    },
    hidePopup() {
      this.showPopup = false;
    }
  },
  mounted() {
    this.initMap();
    this.showStructures();
    this.showPopup = true;
    console.log(this.selectedCategories);
  },
  components: {
    Footer,
    NavigationBar,
  },
};
</script>

<style>
/* Styles pour la popup */
.popup {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Fond semi-transparent */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.popup button {
  margin-top: 10px;
}

input[type="checkbox"] {
  transform: scale(1.5);
}

#medecine-generale {
  accent-color: grey;
}

#depistage {
  accent-color: red;
}

#sante-sexuelle {
  accent-color: orange;
}

#soutien {
  accent-color: green;
}

#accompagnement-psychologique {
  accent-color: aqua;
}

#sortie-prostitution{
  accent-color: blue;
}

#preservatif {
  accent-color: purple;
}

#plainte {
  accent-color: fuchsia;
}

#droit-sante {
  accent-color: orchid;
}

/* Styles pour les icônes personnalisées */
.custom-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-icon div {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
</style>