<template>
    <div class="dashboard flex bg-back-grey">
  
      <div class="components">
  
        <!-- Intégration de la barre latérale -->
        <HorizontalBar />
        <AdminBar />
  
      </div>
  
  
      <!-- Contenu du tableau de bord -->
      <div class="dashboard-container mx:auto ">
        <!-- <div class="last-update mt-10"> -->
          <!-- <h1 class="text-3xl text-purple font-bold">Dernière mise à jour</h1>
           -->
          <div class="update-keys flex flex-col gap-5 w-1/3 bg-white p-4 mt-16 rounded-md shadow-xl font-poppins justify-center md:items-center md:w-full md:h-4/6">
          <h3 class="font-bold border-b border-b-solid border-light-grey pb-5 pt-2">Mise à jour données</h3>

          <div class="update-field flex w-full border-b border-b-solid border-light-grey pb-5 md:flex-col md:items-center ">
              <p>Personnes contactées</p>
              <input class="border border-solid border-light-grey ml-auto shadow-lg w-[100px] text-center rounded-md md:mr-auto" type="number" name="updateNumber" id="inputFirst" maxlength="10">
          </div>


           <div class="update-field flex gap-5 w-full border-b border-b-solid border-light-grey pb-5 md:flex-col md:items-center">
            <p>Personnes rencontrées</p>
            <input class="border border-solid border-light-grey ml-auto w-[100px] text-center rounded-md md:mr-auto" type="number" name="updateNumber" id="inputSecond" maxlength="10">
           </div>

           <div class="update-field flex gap-5 w-full border-b border-b-solid border-light-grey pb-5 md:flex-col md:items-center">
            <p>Maraudes effecutées</p>
            <input class="border border-solid border-light-grey ml-auto w-[100px] text-center rounded-md md:mr-auto" type="number" name="updateNumber" id="inputThird" maxlength="10">
           </div>

           <div class="update-field flex gap-5 w-full pb-5 border-b border-b-solid border-light-grey md:flex-col md:items-center">
            <p>Préservatifs distribués</p>
            <input class="border border-solid border-light-grey ml-auto w-[100px] text-center rounded-md md:mr-auto" type="number" name="updateNumber" id="inputFourth" maxlength="10">
           </div>

            <button class="update-button bg-purple-fonce text-white p-2 rounded-md shadow-xl ml-auto font-poppins font-bold text-center md:mr-auto">SAUVEGARDER</button>
          </div>
          </div>
      </div>
    <!-- </div> -->
  </template>
  
  <script>
  // Importation du composant SideBar
  import AdminBar from "../../components/backOffice/AdminBar.vue";
  import HorizontalBar from "../../components/backOffice/HorizontalBar.vue";
  
  export default {
    components: {
      AdminBar, 
      HorizontalBar
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
  