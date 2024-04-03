<template>
<div class="bg-landing w-full h-screen bg-center z-10 mb-24 rounded-bl-[25%]">
    <aside class="flex items-center justify-center gap-5 mb-8">


      <ul
        class="navbar flex gap-10 text-xl mt-10 font-cgothic font-bold text-white"
      >
        <li class="menu">
          <router-link
            to="/"
            :class="{ 'text-purple underline ': currentPage === '/' }"
            >ACCUEIL</router-link
          >
        </li>
        <li class="menu">
          <router-link
            to="/map"
            :class="{ 'text-purple underline ': currentPage === '/map' }"
            >CARTOGRAPHIE</router-link
          >
        </li>
        <li class="menu">
          <router-link
            to="/documentation"
            :class="{
              'text-purple underline ': currentPage === '/documentation',
            }"
            >DOCUMENTATION</router-link
          >
        </li>
        <li class="menu">
          <router-link
            to="/contact"
            :class="{ 'text-purple underline ': currentPage === '/contact' }"
            >CONTACT</router-link
          >
        </li>
        <li class="menu">
          <router-link
            to="/flyer"
            :class="{ 'text-purple underline ': currentPage === '/flyer' }"
            >EN SAVOIR +</router-link
          >
        </li>
      </ul>
    </aside>

  </div>


  <!-- Missions et photo stop  -->
  <div class="container-presentation flex flex-wrap justify-center items-center w-full gap-8 ">
    <div class="presentation max-w-[1000px]">
      <h1 class="text-4xl text-black mx-10 mt-10 mb-4">
        LE PROGRAMME PAPSP A POUR MISSION :
      </h1>
      <ul class="text-black mx-10 text-xl">
        <li class="mb-4">
          - Informer, orienter et accompagner les Personnes en Situation de
          Prostitution (PSP) vers les dispositifs de droits communs dans les
          champs de la santé, du social et du médico-social
        </li>
        <li class="mb-4">
          - Promouvoir la démarche de réduction des risques et des dommages
        </li>
        <li class="mb-4">
          - Favoriser la promotion, l’éducation à la santé et l’accès aux
          dépistages (VIH, IST, hépatites, cancers)
        </li>
        <li class="mb-4">
          - Sensibiliser les professionnels dans les champs de la santé, du
          social, médico-social au public des Personnes en Situation de
          Prostitution.
        </li>
      </ul>
    </div>

    <div class="">
      <img src="../assets/stop.jpg" alt="stop" class="rounded-tr-[50%] w-[600px] h-[600px] object-cover" />

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
      <p class="chiffre text-6xl">10</p>
      <p class="text">Personnes contactées</p>
    </div>
    <div class="separator ">
      <p class="text">|</p>
    </div>
    <div class="information flex flex-col justify-center items-center">
      <p class="chiffre text-6xl">10</p>
      <p class="text">Personnes rencontrées</p>
    </div>
    <div class="separator">
      <p class="text ">|</p>
    </div>
    <div class="information flex flex-col justify-center items-center">
      <p class="chiffre text-6xl">10</p>
      <p class="text">Maraudes effectuées</p>
    </div>
    <div class="separator">
      <p class="text">|</p>
    </div>
    <div class="information flex flex-col justify-center items-center">
      <p class="chiffre text-6xl">10</p>
      <p class="text">Préservatifs distribués</p>
    </div>
  </div>



  <!-- Articles & News -->
<div class="relative top-56 w-full flex flex-col  gap-12 justify-center items-center">
  <p class="text-5xl text-purple font-bold">Articles & News</p>
  <div class="cards">
    <div class="card w-[300px] h-[400px] object-cover rounded-[25px] overflow-hidden bg-purple p-4">
      <img src="../assets/stop.jpg" alt="stop" class="rounded-t-[25px]"/>
      <p class="text-xl -mt-10 ml-4 bg-white ">Catégorie</p>
      <p class="text-2xl font-bold mt-4">Titre de l'article</p>
      <p class="text text-grey">26 Décembre 2022</p>
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
</template>

<script>
export default {
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

<style lang="tailwindcss" scoped></style>
