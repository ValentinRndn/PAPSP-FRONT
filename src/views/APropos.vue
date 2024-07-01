<template>

  <NavigationBar />
<div class="header-banner bg-banner-propos w-full h-[350px] bg-cover relative  sm:hidden">
  <div class="absolute bottom-0 left-0 right-0 text-center">
    <div class="bg-purple-fonce inline-block text-white text-5xl py-6 px-24 rounded-t-2xl font-bold font-cgothic">À PROPOS</div>
  </div>
</div>

<div class="header-banner bg-banner-propos-mobile w-full h-[350px] bg-cover relative hidden sm:block">
      <div class="absolute bottom-0 left-0 right-0 text-center">
        <div class="bg-purple-fonce inline-block text-white text-5xl py-6 px-24 rounded-t-2xl font-bold font-cgothic sm:px-8 sm:text-4xl">À PROPOS</div>
      </div>
      </div>


<div class="header-content bg-purple-fonce">
  <div class="text pt-12">
    <h1 class="text-4xl text-white text-center font-bold font-cgothic">
      QUI SOMME NOUS ?
    </h1>
    <h3 class="text-white text-center mt-5 mb-1 text-poppins text-2sm">
      Présentation des membres du programme PAPSP
    </h3>
  </div>

  <!-- Membres du programme PAPSP (bouclés sur la BD)-->
  <div class="all-cards flex justify-center items-center gap-4 pb-20 sm:hidden">
    <div v-for="(member, index) in members" :key="index" class="member">
      <div class="members flex justify-center items-center mt-6 pb-6 gap-6 ">
    <div class="membre">
      <div class="carte w-full md:max-w-xs h-80 md:h-auto perspective-1000">
        <div class="face face-front">
          <img
            src="../assets/membre.jpg"
            alt="photo"
            class="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="face face-back bg-white text-gray-800 flex flex-col items-center rounded-md text-poppins text-center">
          <!-- Contenu à afficher au "dos" de la carte -->
          <h3 class="text-4xl font-semibold mt-6">{{ member._prenom }}</h3>
          <h3 class="text-4xl font-semibold">{{ member._nom }}</h3>
          <p class="text-3xl mt-8">{{ member._role }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

  <!-- Missions et photo stop  -->
  <div class="container-presentation flex flex-wrap justify-center items-center w-full gap-8 mt-10 z-10">
    <div class="presentation max-w-[600px] text-black mx-10 text-xl">
      <p class="first-par font-bold mb-6">
        Le programme PAPSP, <span class="text-purple-fonce">porté par des bénévoles engagés</span>, s'engage dans
        plusieurs missions cruciales. 
      </p>
      <p>
        Tout d'abord, il vise à <span>informer, orienter et accompagner</span> les Personnes
        en Situation de Prostitution (PSP) vers <span>les services classiques de
        santé, de social et de médico-social</span>. En parallèle, il promeut
        activement une approche de <span>réduction des risques et des dommages</span>,
        favorisant ainsi la protection et le bien-être des individus concernés.
        De plus, PAPSP s'attache à <span>encourager la sensibilisation</span> à la santé,
        l'éducation et l'accès aux dépistages essentiels tels que ceux du VIH,
        des IST, des hépatites et des cancers. Enfin, le programme s'efforce de
        <span>sensibiliser les professionnels</span> œuvrant dans les domaines de la santé,
        du social et du médico-social à la réalité des Personnes en Situation de
        Prostitution, contribuant ainsi à une meilleure prise en charge et à une
        plus grande <span>compréhension de leurs besoins spécifiques.</span>
      </p>
    </div>

    <div class="">
      <img
        src="../assets/stop.jpg"
        alt="stop"
        class="rounded-tr-[50%] w-[600px] h-[600px] object-cover"
      />
    </div>
  </div>


<!-- Bouton - Devenir bénévole -->
<div class="flex items-center justify-center mt-12 font-cgothic mb-20 z-10">
  <div class="flex items-center bg-purple-fonce shadow-xl rounded-md py-6 px-9 hover:scale-105 duration-300">
    <a href="/contact" class="text-white h-full font-bold text-2xl">JE VEUX DEVENIR BÉNÉVOLE</a>
  </div>
</div>




<div class="flex  flex-col items-center programme-background bg-alveoles-rotated h-[1800px] z-0 bg-cover relative mx-20 md:h-[2800px]">
    <!-- Programmes du PAPS-->
    <div class="programmes overflow-hidden flex flex-col items-center justify-center">
    <div class="programme-intro flex flex-col justify-center items-center z-10">
        <h1 class="font-bold text-cgothic text-purple-fonce text-center text-3xl mt-20 z-10">QUE FAIT LE PROGRAMME PAPSP ?</h1>
        <p class="flex text-center text-xl mt-5 z-10 text-poppins"> Découvrez quelles sont les actions mises en place par le programme PAPSP pour venir en aide aux personnes en situation de prostitution ?</p>
    </div>
    <!--Programme 01-->
    <div class="programme flex justify-center items-center max-w-[700px] mt-20 gap-10  md:flex-col">
        <div class="image-programme w-1/2">

            <img src="../assets/propos/programme_1.png" alt="programme" class="w-full h-[300px] object-cover rounded-bl-[75%] xl rounded-tr-[25%] "/>
        </div>
        <div class="content-programme w-1/2">
            <div class="top-image-programme flex w-full h-[3.5rem] mb-10 justify-between">
                <img src="../assets/icon-detail.png" alt="icon-details">
                <h1 class="text-6xl font-bold text-purple-fonce">01</h1>
            </div>
            <h1 class=" text-purple-fonce font-dm-serif text-3xl font-bold mb-3">En amont</h1>
                       <p class="text-md text-program-grey text-jost">Commandes des denrées alimentaires et préparation des pochons de matériels de réduction des risques.</p>
        </div> 
    </div>

    <!--Programme 02-->
    <div class="programme flex justify-center items-center max-w-[700px] mt-20 gap-10  md:flex-col flex-row-reverse">
        <div class="image-programme w-1/2">

            <img src="../assets/propos/programme_2.png" alt="programme" class="w-full h-[300px] object-cover rounded-bl-[75%] xl rounded-tr-[25%] "/>
        </div>
        <div class="content-programme w-1/2">
            <div class="top-image-programme flex w-full h-[3.5rem] mb-10 justify-between">
                <img src="../assets/icon-detail.png" alt="icon-details">
                <h1 class="text-6xl font-bold text-purple-fonce">02</h1>
            </div>
                        <h1 class=" text-purple-fonce font-dm-serif text-3xl font-bold mb-3">Le jour de la maraude</h1>

                       <p class="text-md text-program-grey text-jost">Préparation des boissons chaudes : café, eau chaude et installation dans le camion du PAPSP avec les bénévoles. Environ 5h de maraude afin d'échanger avec toutes les personnes rencontrées sur leurs besoins..</p>

        </div>
    </div>

        <!--Programme 03-->
        <div class="programme flex justify-center items-center max-w-[700px] mt-20 gap-10 md:flex-col">
        <div class="image-programme w-1/2">

            <img src="../assets/propos/programme_3.png" alt="programme" class="w-full h-[300px] object-cover rounded-bl-[75%] xl rounded-tr-[25%] "/>
        </div>
        <div class="content-programme w-1/2">
            <div class="top-image-programme flex w-full h-[3.5rem] mb-10 justify-between">
                <img src="../assets/icon-detail.png" alt="icon-details">
                <h1 class="text-6xl font-bold text-purple-fonce">03</h1>
            </div>
                        <h1 class=" text-purple-fonce font-dm-serif text-3xl font-bold mb-3">Accompagnement adapté</h1>

                       <p class="text-md text-program-grey text-jost">Recueillir les besoins des personnes rencontrées pendant les maraudes. Rendre possible la prise de rendez-vous avec les partenaires. Proposer des entretiens individuels, accompagner les personnes dans leurs démarches d'accès aux soins et à leurs droits</p>

        </div>
    </div>

        <!--Programme 04-->
    <div class="programme flex justify-center items-center max-w-[700px] mt-20 gap-10 md:flex-col flex-row-reverse">
        <div class="image-programme w-1/2">

            <img src="../assets/propos/programme_4.png" alt="programme" class="w-full h-[300px] object-cover rounded-bl-[75%] xl rounded-tr-[25%] "/>
        </div>
        <div class="content-programme w-1/2">
            <div class="top-image-programme flex w-full h-[3.5rem] mb-10 justify-between">
                <img src="../assets/icon-detail.png" alt="icon-details">
                <h1 class="text-6xl font-bold text-purple-fonce">04</h1>
            </div>
                        <h1 class=" text-purple-fonce font-dm-serif text-3xl font-bold mb-3">Sensibiliser les professionnels et les partenaires</h1>

            <p class="text-md text-program-grey text-jost">Sessions de sensibilisation & animation du réseau partenarial régional. Disponibilité et écoute.</p>
        </div>
    </div>

</div>
</div>

<Footer />
</template>


<script>
import NavigationBar from "../components/NavigationBar.vue";
import Footer from "../components/Footer.vue"
import axios from 'axios';

export default {
  data() {
  return {
    members: [] // Initialisation de la variable 'members' comme un tableau vide
  }
  },
  components: {
      Footer, 
      NavigationBar,
    },
    methods: {
  showMembers() {
    axios.get('http://localhost:3000/member/getAllMembers')
      .then(response => {
        console.log(response.data);
        this.members = response.data; // Assurez-vous que la variable 'members' est initialisée dans data
      })
      .catch(error => {
        console.error('Erreur lors de la requête des membres:', error);
        this.error = "Une erreur s'est produite lors de la récupération des membres";
      });
  }
},
  mounted() {
    this.showMembers(); // Appelez showMembers lors du montage du composant
  }
};
</script>


<style scoped>
span {
    font-weight: bold;
}

/* Styles pour l'effet de retournement */
.carte {
  width: 300px;
  height: 400px;
  perspective: 1000px;
}

.face {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.5s;
}

.face-front {
  transform: rotateY(0deg);
}

.face-back {
  transform: rotateY(180deg);
}

.carte:hover .face-front {
  transform: rotateY(-180deg);
}

.carte:hover .face-back {
  transform: rotateY(0deg);
}



</style>
