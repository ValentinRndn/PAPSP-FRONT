<template>
  
  <!-- Image de gauche - numéros à contacter -->
  <div class="banner flex font-cgothic h-[500px]">
    <div class="bg-phone w-1/5 bg-cover bg-center z-10  ">
      <div class="icons-container flex flex-col justify-center items-center mt-10 ">
      <img src="../assets/phone-icon.png" alt="phone-icon" class="size-20 z-30" />
      <img src="../assets/polygon-blanc.png" alt="polygon" class="size-20 -mt-14" />
      <h1 class="text-white text-2xl font-bold mt-2 text-center">LES NUMÉROS <br> À CONTACTER</h1>
      </div>
    </div>

  <!-- Encadrer violet avec les missions de l'asso -->
    <div class="mid-banner bg-purple h-50 w-3/5 z-10">
      <h1 class="text-2xl text-white mx-10 mt-10 mb-4">LE PROGRAMME PAPSP A POUR MISSION :</h1>
      <ul class="text-white mx-10  ">
        <li class="mb-4">
          - Informer, orienter et accompagner les Personnes en Situation de
          Prostitution (PSP) vers les dispositifs de droits communs dans les
          champs de la santé, du social et du médico-social
        </li>
        <li class="mb-4">- Promouvoir la démarche de réduction des risques et des dommages</li>
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

  <!-- Image de droite - renseignements -->
      <div class="bg-stop w-1/5 bg-cover bg-center z-10">
        <div class="icons-container flex flex-col items-center mt-10 h-full gap-5">
          <h1 class="text-white text-2xl font-bold mt-2 text-center">JE VEUX <br> ME RENSEIGNER</h1>
          <img src="../assets/localisateur-icon.png" alt="localisateur-icon" class="size-20 z-30" />
          <img src="../assets/polygon-blanc.png" alt="polygon" class="size-20 -mt-20" />

          <p class="text-white underline text-center"><a href="">Je cherche un établissement spécifique</a></p>

          <img src="../assets/doc-icon.png" alt="localisateur-icon" class="size-20 z-30" />
          <img src="../assets/polygon-blanc.png" alt="polygon" class="size-20 -mt-20" />

         <p class="text-white underline text-center"><a href="">Je veux consulter la documentation</a></p>
       </div>
      </div>
  </div>

  <!-- Bouton - Contacter quelq'un -->
 <div class="flex  items-center justify-center -mt-8 font-helvetica  ">
   <div class="flex items-center border border-b-slate-200 bg-white shadow-xl rounded-2xl gap-4 py-2 px-6 z-20">
    <img class="w-[50px] bg-white" src="../assets/courriel-de-contact.png">
    <button class="text-purple h-full font-bold text-xl">JE SOUHAITE CONTACTER QUELQU'UN</button>
  </div>
 </div>

  <!-- Banner alvéoles - Chiffres -->
 <div class="container-alveole z-0 font-helvetica">
  <div class="bg-alveoles h-[400px] -mt-20 z-0 bg-cover flex justify-center items-center">
    <div class="chiffres flex items-center gap-32">
      <div class="chiffre-content ">
        <h1 class="chiffre text-9xl text-purple z-20 font-bold">126</h1>
        <p class="description w-full text-center">Lorem ipsum</p>
      </div>
      <div class="chiffre-content ">
        <h1 class="chiffre text-9xl text-purple z-20 font-bold">126</h1>
        <p class="description w-full text-center">Lorem ipsum</p>
      </div>
      <div class="chiffre-content ">
        <h1 class="chiffre text-9xl text-purple z-20 font-bold">126</h1>
        <p class="description w-full text-center">Lorem ipsum</p>
      </div>
    </div>
  </div>
</div>

  <!-- Logo partenaires -->
<div class="logo-partenaires flex mx-2 mt-8 gap-24 justify-center items-center shadow-md">
  <img src="../assets/logo_france_terre_asile.jpg" alt="logo-partenaires" class="w-[180px] bg-cover z-10 h-[50%] " />
  <img src="../assets/logo_calvados.png" alt="logo-partenaires" class="w-[180px] bg-cover z-10 h-[50%]" />
  <img src="../assets/ars_logo.png" alt="logo-partenaires" class="w-[180px] bg-cover z-10 h-[50%]" />
  <img src="../assets/logo_mondeville.png" alt="logo-partenaires" class="w-[180px] bg-cover z-10 h-[50%]" />
  <img src="../assets/logo_itineraire.png" alt="logo-partenaires" class="w-[180px] bg-cover z-10 h-[50%]" />
</div>


  
</template>
