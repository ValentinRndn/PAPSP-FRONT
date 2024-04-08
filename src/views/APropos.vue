<template>
<div class="header-banner bg-banner-propos w-full h-[350px] bg-cover relative">
  <div class="absolute bottom-0 left-0 right-0 text-center">
    <div class="bg-purple inline-block text-white text-5xl py-6 px-24 rounded-t-2xl">À PROPOS</div>
  </div>
</div>


  <div class="header-content bg-purple">
    <div class="text pt-12">
      <h1 class="text-5xl text-purple-fonce text-center font-bold">
        QUI SOMME NOUS ?
      </h1>
      <h3 class="text-white text-center mt-5">
        Présentation des membres du programme PAPSP
      </h3>
    </div>
    <div class="members flex justify-center items-center mt-6 pb-6 gap-6">
      <div class="membre">
        <img
          src="../assets/membre.jpg"
          alt="photo"
          class="w-[300px] h-[400px] object-cover rounded-md"
        />
      </div>
      <div class="membre">
        <img
          src="../assets/membre.jpg"
          alt="photo"
          class="w-[300px] h-[400px] object-cover rounded-md"
        />
      </div>
      <div class="membre">
        <img
          src="../assets/membre.jpg"
          alt="photo"
          class="w-[300px] h-[400px] object-cover rounded-md"
        />
      </div>
      <div class="membre">
        <img
          src="../assets/membre.jpg"
          alt="photo"
          class="w-[300px] h-[400px] object-cover rounded-md"
        />
      </div>
    </div>
  </div>

  <!-- Missions et photo stop  -->
  <div class="container-presentation flex flex-wrap justify-center items-center w-full gap-8 mt-10 z-10">
    <div class="presentation max-w-[1000px] text-black mx-10 text-xl">
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


  <!-- Bouton - Devenir bénévoles -->
  <div class="flex  items-center justify-center mt-12 font-helvetica mb-20 z-10 ">
   <div class="flex items-center bg-purple-fonce shadow-xl rounded-md py-6 px-9">
    <button class="text-white h-full font-bold text-2xl">JE VEUX DEVENIR BÉNÉVOLE</button>
  </div>
 </div>


 <!-- Programmes du PAPS-->
 <div class="programmes overflow-hidden">
<div class="programme-intro flex flex-col justify-center items-center z-10">
    <h1 class="font-bold text-purple-fonce text-center text-3xl z-10">QUE FAIT LE PROGRAMME PAPSP ?</h1>
    <p class="flex text-center text-xl mt-5 z-10"> Découvrez quelles sont les actions mises en place par le programme PAPSP pour venir en aide aux personnes en situation de prostitution ?</p>
</div>

<div class="flex  flex-col items-center programme-background bg-alveoles-rotated h-[1600px] z-0 bg-cover relative mx-20 md:h-[2800px]">

    <!--Programme 01-->
    <div class="programme flex justify-center items-center max-w-[700px] mt-20 gap-10  md:flex-col">
        <div class="image-programme w-1/2">

            <img src="../assets/landing.jpg" alt="programme" class="w-full h-[300px] object-cover rounded-bl-[75%] xl rounded-tr-[25%] "/>
        </div>
        <div class="content-programme w-1/2">
            <div class="top-image-programme flex w-full h-[3.5rem] mb-10 justify-between">
                <img src="../assets/icon.png" alt="icon-details">
                <h1 class="text-6xl font-bold text-purple-fonce">01</h1>
            </div>
            <h1 class=" text-purple-fonce text-2xl font-bold mb-3">Concept & Details</h1>
            <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio corporis illum consectetur accusantium aliquid quam voluptates quod blanditiis consequuntur.</p>
        </div>
    </div>

    <!--Programme 02-->
    <div class="programme flex justify-center items-center max-w-[700px] mt-20 gap-10  md:flex-col flex-row-reverse">
        <div class="image-programme w-1/2">

            <img src="../assets/landing.jpg" alt="programme" class="w-full h-[300px] object-cover rounded-bl-[75%] xl rounded-tr-[25%] "/>
        </div>
        <div class="content-programme w-1/2">
            <div class="top-image-programme flex w-full h-[3.5rem] mb-10 justify-between">
                <img src="../assets/icon.png" alt="icon-details">
                <h1 class="text-6xl font-bold text-purple-fonce">02</h1>
            </div>
            <h1 class=" text-purple-fonce text-2xl font-bold mb-3">Concept & Details</h1>
            <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio corporis illum consectetur accusantium aliquid quam voluptates quod blanditiis consequuntur.</p>
        </div>
    </div>

        <!--Programme 03-->
        <div class="programme flex justify-center items-center max-w-[700px] mt-20 gap-10 md:flex-col">
        <div class="image-programme w-1/2">

            <img src="../assets/landing.jpg" alt="programme" class="w-full h-[300px] object-cover rounded-bl-[75%] xl rounded-tr-[25%] "/>
        </div>
        <div class="content-programme w-1/2">
            <div class="top-image-programme flex w-full h-[3.5rem] mb-10 justify-between">
                <img src="../assets/icon.png" alt="icon-details">
                <h1 class="text-6xl font-bold text-purple-fonce">03</h1>
            </div>
            <h1 class=" text-purple-fonce text-2xl font-bold mb-3">Concept & Details</h1>
            <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio corporis illum consectetur accusantium aliquid quam voluptates quod blanditiis consequuntur.</p>
        </div>
    </div>

        <!--Programme 04-->
    <div class="programme flex justify-center items-center max-w-[700px] mt-20 gap-10 md:flex-col flex-row-reverse">
        <div class="image-programme w-1/2">

            <img src="../assets/landing.jpg" alt="programme" class="w-full h-[300px] object-cover rounded-bl-[75%] xl rounded-tr-[25%] "/>
        </div>
        <div class="content-programme w-1/2">
            <div class="top-image-programme flex w-full h-[3.5rem] mb-10 justify-between">
                <img src="../assets/icon.png" alt="icon-details">
                <h1 class="text-6xl font-bold text-purple-fonce">04</h1>
            </div>
            <h1 class=" text-purple-fonce text-2xl font-bold mb-3">Concept & Details</h1>
            <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati distinctio corporis illum consectetur accusantium aliquid quam voluptates quod blanditiis consequuntur.</p>
        </div>
    </div>

</div>
</div>
</template>



<style scoped>
span {
    font-weight: bold;
}

</style>
