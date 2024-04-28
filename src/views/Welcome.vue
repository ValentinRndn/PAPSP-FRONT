<template>
<div class="bg-landing w-full h-screen bg-center z-10 mb-24 rounded-bl-[25%] bg-cover">
  <aside class="flex items-center justify-center gap-5 mb-8 sm:hidden">
    <img src="../assets/logo_typo_blanc.png" alt="logo" class="size-1/4 mt-8 " />

    <ul class="navbar flex gap-10 text-xl mt-10 font-cgothic font-bold text-white">
      <li class="menu">
        <router-link to="/" :class="{ 'text-purple underline ': currentPage === '/' }">ACCUEIL</router-link>
      </li>      
      <li class="menu">
        <router-link to="/map" :class="{'text-purple underline ':currentPage === '/map' }">CARTOGRAPHIE</router-link>
      </li>
      <li class="menu">
        <router-link to="/documentation" :class="{ 'text-purple underline ': currentPage === '/documentation' }">DOCUMENTATION</router-link>
      </li>
      <li class="menu">
        <router-link to="/contact" :class="{ 'text-purple underline ': currentPage === '/contact' }">CONTACT</router-link>
      </li>
      <li class="menu">
        <router-link to="/blog" :class="{ 'text-purple underline ': currentPage === '/contact' }">BLOG</router-link>
      </li>
      <li class="menu">
        <router-link to="/APropos" :class="{ 'text-purple underline ':currentPage === '/APropos' }">EN SAVOIR +</router-link>
      </li>
    </ul>
  </aside>
    
    <div class="header-content h-screen">
      <div class="text-header text-white text-xl font-bold flex flex-col items-center justify-center h-[50vh]">
        <div class="citation-header w-[28vw] text-center">
        <h1 class="citation bg-purple  p-6 w-full -ml-[7.5vw]">INSERER UNE CITATION</h1>
        </div>
        <div class="sentance-header w-[28vw] text-center">
        <h1 class="citation  bg-purple-fonce p-6 w-full  ml-[7.5vw]">CHOISIR ENSEMBLE MERCREDI</h1>
      </div>
      </div>
    </div>

  </div>


  <!-- Missions et photo stop  -->
  <div class="container-presentation flex flex-wrap justify-center items-center w-full gap-8 ">
    <div class="presentation max-w-[600px]">
      <h1 class="text-2xl text-black mx-10 mt-10 mb-4 font-bold  font-cgothic">
        LE PROGRAMME PAPSP A POUR MISSION :
      </h1>
      <ul class="text-black mx-10 text-xl font-cgothic">
        <li class="mb-4">
          - <span>Informer, orienter et accompagner</span> les Personnes en Situation de
          Prostitution (PSP) vers les dispositifs de <span>droits communs dans les
          champs de la santé, du social et du médico-social</span>
        </li>
        <li class="mb-4">
          - Promouvoir la démarche de <span>réduction des risques</span> et <span>des dommages</span>
        </li>
        <li class="mb-4">
          - Favoriser la promotion, <span>l’éducation à la santé et l’accès aux
          dépistages</span> (VIH, IST, hépatites, cancers)
        </li>
        <li class="mb-4">
          - <span>Sensibiliser les professionnels</span> dans les champs de la santé, du
          social, médico-social au public des Personnes en Situation de
          Prostitution.
        </li>
      </ul>
    </div>

    <div class="">
      <img src="../assets/stop.jpg" alt="stop" class="rounded-tr-[50%] w-[500px] h-[500px] object-cover" />

    </div>
  </div>

  <!-- Container numéros  -->
  <div class="flex items-center justify-center font-c-gothic text-white font-bold text-5xl mt-20">
    <div class="flex flex-col items-center bg-purple rounded-2xl p-8">
        <h1 class="mb-2">LES NUMÉROS À CONTACTER</h1>
        <div class="numero flex gap-36 mb-10">
            <p class="flex-grow text-center">?</p>
            <p class="flex-grow text-center">?</p>
            <p class="flex-grow text-center">?</p>
        </div>
    </div>
</div>

  <!-- Bouton - Contact -->
  <div class="flex  items-center justify-center -mt-8 font-helvetica  ">
   <div class="flex items-center bg-purple-fonce shadow-xl rounded-2xl gap-4 py-2 px-6 z-20">
    <img class="w-[50px] bg-purple-fonce " src="../assets/courriel-de-contact.png">
    <button class="text-white h-full font-bold text-xl">NOUS CONTACTER</button>
  </div>
 </div>


   <!-- Chiffres clés -->
 <div class="bg-alveoles h-[1000px] z-0 bg-cover relative">
  <div class="relative top-32 w-full flex gap-12 justify-center items-center">
    <div class="information flex flex-col justify-center items-center">
      <p class="chiffre text-6xl font-cgothic">10</p>
      <p class="text font-jost-sans">Personnes contactées</p>
    </div>
    <div class="separator font-cgothic ">
      <p class="text ">|</p>
    </div>
    <div class="information flex flex-col justify-center items-center">
      <p class="chiffre text-6xl font-cgothic">10</p>
      <p class="text font-jost-sans">Personnes rencontrées</p>
    </div>
    <div class="separator">
      <p class="text ">|</p>
    </div>
    <div class="information flex flex-col justify-center items-center">
      <p class="chiffre text-6xl font-cgothic">10</p>
      <p class="text font-jost-sans">Maraudes effectuées</p>
    </div>
    <div class="separator">
      <p class="text">|</p>
    </div>
    <div class="information flex flex-col justify-center items-center">
      <p class="chiffre text-6xl font-cgothic">10</p>
      <p class="text font-jost-sans">Préservatifs distribués</p>
    </div>
  </div>



  <!-- Articles & News -->
<div class="relative top-56 w-full flex flex-col  gap-12 justify-center items-center">
  <p class="text-5xl text-purple font-bold font-cgothic">Articles & News</p>
  <div class="cards flex gap-12 grow justify-center mt-6 ">
    <div class="card w-[300px] h-[375px] object-cover rounded-[25px] overflow-hidden p-4 shadow-xl border border-solid border-slate-300 relative bg-purple">
    <img src="../assets/stop.jpg" alt="stop" class="rounded-t-[25px]"/>
    <p class="text-2xl font-bold  font-dm-serif text-white">Let's get solution for building construction work</p>
    <p class="text text-white font-jost-sans absolute bottom-4">26 Décembre 2022</p>
    <h1 class="arrow text-xl text-grey absolute bottom-3 right-4 font-bold bg-light-beige p-2 px-3 rounded-full">></h1>
    </div>

        <div class="card w-[300px] h-[375px] object-cover rounded-[25px] overflow-hidden p-4 shadow-xl border border-solid border-slate-300 relative bg-purple-fonce">
    <img src="../assets/stop.jpg" alt="stop" class="rounded-t-[25px]"/>
    <p class="text-2xl font-bold  font-dm-serif text-white">Let's get solution for building construction work</p>
    <p class="text text-white font-jost-sans absolute bottom-4">26 Décembre 2022</p>
    <h1 class="arrow text-xl text-grey absolute bottom-3 right-4 font-bold bg-light-beige p-2 px-3 rounded-full">></h1>
    </div>

        <div class="card w-[300px] h-[375px] object-cover rounded-[25px] overflow-hidden p-4 shadow-xl border border-solid border-slate-300 relative bg-purple">
    <img src="../assets/stop.jpg" alt="stop" class="rounded-t-[25px]"/>
    <p class="text-2xl font-bold  font-dm-serif text-white">Let's get solution for building construction work</p>
    <p class="text text-white font-jost-sans absolute bottom-4">26 Décembre 2022</p>
    <h1 class="arrow text-xl text-grey absolute bottom-3 right-4 font-bold bg-light-beige p-2 px-3 rounded-full">></h1>
    </div>
  </div>
</div>
</div>
  <!-- Logo partenaires -->
  <div
    class="logo-partenaires flex mx-2 mt-8 gap-24 justify-center items-center shadow-md"
  >
    <img
      src="../assets/logo_france_terre_asile.jpg"
      alt="logo-partenaires"
      class="w-[180px] bg-cover z-10 h-[50%]"
    />
    <img
      src="../assets/logo_calvados.png"
      alt="logo-partenaires"
      class="w-[180px] bg-cover z-10 h-[50%]"
    />
    <img
      src="../assets/ars_logo.png"
      alt="logo-partenaires"
      class="w-[180px] bg-cover z-10 h-[50%]"
    />
    <img
      src="../assets/logo_mondeville.png"
      alt="logo-partenaires"
      class="w-[180px] bg-cover z-10 h-[50%]"
    />
    <img
      src="../assets/logo_itineraire.png"
      alt="logo-partenaires"
      class="w-[180px] bg-cover z-10 h-[50%]"
    />
  </div>

  <Footer />

</template>

<script>
import Footer from "../components/Footer.vue"


export default {
  components: {
      Footer, 
    },
  data() {
    return {
      currentPage: "", // Initialisez currentPage avec le chemin de la page actuelle
    };
  },
  watch: {
    $route(to) {
      this.currentPage = to.path; // Met à jour currentPage avec le chemin de la route actuelle
    },
  },
};
</script>

<style>
span {
  font-weight: bold;
}

</style>
