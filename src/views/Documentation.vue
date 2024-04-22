<template>
  <NavigationBar />
<div class="header-banner bg-banner-blog w-full h-[350px] bg-cover relative">
  <div class="absolute bottom-0 left-0 right-0 text-center">
    <div class="bg-white inline-block text-purple-fonce text-5xl py-6 px-24 rounded-t-2xl font-bold">ARTICLES & NEWS</div>
  </div>
</div>

<!-- Epinglés -->
<div class="header-content flex flex-col justify-center items-center bg-white  mx-auto ">
  <div class="text pt-12 flex justify-start">
    <h1 class="flex text-2xl text-purple-fonce font-bold mb-10">
      ÉPINGLÉS
    </h1>
  </div>
<div class="cards flex gap-12 grow">
    <div class="card w-[300px] h-[375px] object-cover rounded-[25px] overflow-hidden p-4 shadow-xl border border-solid border-slate-300 relative">
    <img src="../assets/stop.jpg" alt="stop" class="rounded-t-[25px]"/>
    <p class="text-md -mt-12 ml-4 category-bg inline-block rounded-t-md rounded-br-md p-1">Catégorie</p>
    <p class="text-2xl font-bold -mt-4">Let's get solution for building construction work</p>
    <p class="text text-grey absolute bottom-4">26 Décembre 2022</p>
    <h1 class="arrow text-xl text-grey absolute bottom-3 right-4 font-bold bg-light-beige p-2 px-3 rounded-full">></h1>
    </div>


    <div class="card w-[300px] h-[375px] object-cover rounded-[25px] overflow-hidden p-4 shadow-xl border border-solid border-slate-300 relative">
    <img src="../assets/stop.jpg" alt="stop" class="rounded-t-[25px]"/>
    <p class="text-md -mt-12 ml-4 category-bg inline-block rounded-t-md rounded-br-md p-1">Catégorie</p>
    <p class="text-2xl font-bold -mt-4">Let's get solution for building construction work</p>
    <p class="text text-grey absolute bottom-4">26 Décembre 2022</p>
    <h1 class="arrow text-xl text-grey absolute bottom-3 right-4 font-bold bg-light-beige p-2 px-3 rounded-full">></h1>
    </div>

    <div class="card w-[300px] h-[375px] object-cover rounded-[25px] overflow-hidden p-4 shadow-xl border border-solid border-slate-300 relative">
    <img src="../assets/stop.jpg" alt="stop" class="rounded-t-[25px]"/>
    <p class="text-md -mt-12 ml-4 category-bg inline-block rounded-t-md rounded-br-md p-1">Catégorie</p>
    <p class="text-2xl font-bold -mt-4">Let's get solution for building construction work</p>
    <p class="text text-grey absolute bottom-4">26 Décembre 2022</p>
    <h1 class="arrow text-xl text-grey absolute bottom-3 right-4 font-bold bg-light-beige p-2 px-3 rounded-full">></h1>
    </div>
  </div>
</div>

<!-- Dernier POST -->
<div class="bg-alveoles h-[1000px] z-0 bg-cover relative mx-4">

</div>
    <Footer />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import Footer from "../components/Footer.vue"

export default {
  components: {
      Footer, 
      NavigationBar,
    }
};
</script>


<style>

.category-bg {
  position: relative;
  background-color: white;
  z-index: 1;
  vertical-align: top; /* Alignement vertical en haut */
}


</style>