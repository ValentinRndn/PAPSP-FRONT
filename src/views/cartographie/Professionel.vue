<template>
  <NavigationBar />

  <div class="page-container flex h-[700px] items-center">
    <div class="categories-container bg-purple-fonce w-[1/3] h-full px-6 flex flex-col justify-center">
      <h1 class="text-white text-2xl font-bold mb-6 font-cgothic">PAPSP VOUS ORIENTE :</h1>
      <div class="checkboxes flex flex-col gap-3 text-white text-xl">

        <div class="checkboxes flex flex-col gap-4 font-poppins relative">

            <div v-if="showPopup" class="popup">
              <div class="popup-content text-black">
                <p>La cartographie du programme
de prévention & d’accompagnement des personnes en situation de prostitution vous permet de trouver un établissement
adapté à vos besoins dans toute la région Normande</p>
                <!-- <button @click="hidePopup">Fermer</button> -->
                <img @click="hidePopup" class="absolute top-5 right-5 w-[20px]"  src="../../assets/map/close-popup.png" alt="hide_arrow">

              </div>
            </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="scale1" name="scales" />
            <label for="scales">Trouver des préservatifs ou du lubrifiant</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="scale2" name="scales" />
            <label for="scales">Me faire dépister</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="scale3" name="scales"  />
            <label for="scales">Accéder à un traitement d’urgence</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="scale4" name="scales"  />
            <label for="scales">Accéder à la PReP</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="scale5" name="scales"  />
            <label for="scales">Voir un médecin</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="scale6" name="scales"  />
            <label for="scales">Interrompre une grossesse</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="scale7" name="scales" />
            <label for="scales">Trouver du matériel de drogue à moindre risque</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="scale8" name="scales"  />
            <label for="scales">Trouver un soutien communautaire</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="scale9" name="scales"  />
            <label for="scales">Porter plainte</label>
          </div>

          <div class="checkbox flex gap-3 items-center">
            <input type="checkbox" id="scale10" name="scales"  />
            <label for="scales">Parler à quelqu’un après une agression</label>
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

export default {
  data() {
    return {
      map: null,
      structures: [],
      showPopup: false
    };
  },
  methods: {
    initMap() {
      this.map = L.map("map").setView([49.183333, -0.35], 13);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.map);
    },
    async showStructures() {
      try {
        const structures = await getAllStructures();
        console.log('Structures fetched:', structures); // Log pour vérifier les données
        this.structures = structures;
        this.addMarkers();
      } catch (error) {
        console.error('Error fetching structures:', error);
      }
    },
addMarkers() {
  this.structures.forEach(structure => {
    if (structure._coos_gps) {
      const [lat, lon] = structure._coos_gps.split(',').map(coord => parseFloat(coord));
      if (!isNaN(lat) && !isNaN(lon)) {
        const marker = L.marker([lat, lon]).addTo(this.map);
        marker.bindPopup(`<b>${structure._antenne}</b><br>${structure._adresse}`).openPopup();
      } else {
        console.warn('Invalid coordinates for structure:', structure);
      }
    } else {
      console.warn('No GPS coordinates for structure:', structure);
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

#scale1 {
  accent-color: grey;
}

#scale2 {
  accent-color: red;
}

#scale3 {
  accent-color: orange;
}

#scale4 {
  accent-color: green;
}

#scale5 {
  accent-color: aqua;
}

#scale6 {
  accent-color: blue;
}

#scale7 {
  accent-color: purple;
}

#scale8 {
  accent-color: fuchsia;
}

#scale9 {
  accent-color: orchid;
}

#scale10 {
  accent-color: white;
}
</style>
