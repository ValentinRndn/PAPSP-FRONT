<template>

  <navigationBar />
    <div class="header-banner bg-banner-contact w-full h-[350px] bg-cover relative">
      <div class="absolute bottom-0 left-0 right-0 text-center">
        <div class="bg-white inline-block text-purple-fonce text-5xl py-6 px-24 rounded-t-2xl font-bold font-cgothic">CONTACT</div>
      </div>
    </div>


<!-- Formulaire de contact -->
<div class="contact-container flex flex-wrap justify-center items-center gap-10 mt-20 font-jost">
    <div class="info-contact font-jost-sans flex flex-col bg-purple-fonce p-8 rounded-xl text-white gap-4">
        <div class="mail-container flex justify-center items-center gap-2 ">
            <img src="../assets/mail_icon.png" alt="mail-icon" class="size-10">
            <p class="mail">info@youdomain.com</p>
        </div>
        <div class="phone-container flex justify-center items-center gap-2">
            <img src="../assets/phone_icon.png" alt="mail-icon" class="size-10">
            <p class="phone">+33 65 77 45 65</p>
        </div>
    </div>
<div class="contact-form bg-white flex flex-col justify-center items-center gap-6 mt-6 ">
  <form class="flex flex-col gap-6">
    <div class="first-row flex md:flex-row md:gap-8 w-full gap-8">
      <input type="text" placeholder="Nom" class="border-b border-purple-fonce text-md w-full md:w-auto pb-4">
      <input type="email" placeholder="Email" class="border-b border-purple-fonce text-md w-full md:w-auto pb-4">
    </div>
    <div class="second-row flex md:flex-row md:gap-8 w-full gap-8">
    <input type="text" placeholder="Objet" class="border-b border-purple-fonce text-md w-full md:w-auto pb-4">
      <input type="telephone" placeholder="Téléphone" class="border-b border-purple-fonce text-md w-full md:w-auto pb-4">
    </div>
    <div class="textarea w-full">
      <textarea placeholder="Votre message" class="border-b border-purple-fonce text-md w-full"></textarea>
    </div>
    <div class="submit flex justify-end w-full">
      <button class="bg-purple-fonce text-white font-jost-sans font-semibold text-md py-3 rounded-md px-6 transition-transform duration-300 hover:scale-105">Envoyer</button>
    </div>
  </form>   
</div>
</div>


<!-- Réseaux sociaux -->
<div class="bg-alveoles h-[700px] z-0 bg-cover relative mx-4">
    <div class="text-socials relative mt-24">
        <h1 class="socials-medias text-center text-5xl font-bold text-contact-grey font-raleway">Réseaux sociaux</h1>
        <p class="text-center text-light-grey font-raleway">Vous pouvez également nous contacter sur chacun de nos réseaux sociaux. Nous vous répondrons dans les plus brefs délais..</p>
    </div>
    <div class="socials relative flex justify-center items-center mt-10 z-20 w-full gap-6">
        <a href="https://www.facebook.com" target="_blank" class="social bg-purple-fonce w-1/4 flex justify-center items-center py-5 rounded-md transition-transform duration-300 hover:scale-105">
            <img src="../assets/contact/socials/facebook.png" alt="facebook" class="w-[50px] h-[50px]">
        </a>
        <a href="https://www.instagram.com" target="_blank" class="social bg-purple-fonce w-1/4 flex justify-center items-center py-5 rounded-md transition-transform duration-300 hover:scale-105">
            <img src="../assets/contact/socials/insta.png" alt="instagram" class="w-[50px] h-[50px]">
        </a>
        <a href="https://www.linkedin.com" target="_blank" class="social bg-purple-fonce  w-1/4 flex justify-center items-center py-5 rounded-md transition-transform duration-300 hover:scale-105">
            <img src="../assets/contact/socials/linkedinn.png" alt="linkedin" class="w-[50px] h-[50px]">
        </a>
        <a href="https://www.tiktok.com" target="_blank" class="social bg-purple-fonce  w-1/4 flex justify-center items-center py-5 rounded-md transition-transform duration-300 hover:scale-105">
            <img src="../assets/contact/socials/tiktokk.png" alt="tiktok" class="w-[50px] h-[50px]">
        </a>
    </div>



    <div class="map-container relative z-20 h-[300px] w-1/2 mx-auto mt-20 rounded-3xl overflow-hidden">
            <div id="map" class="h-full"></div>
        </div>
</div>

<Footer />

</template>


<script>

import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import NavigationBar from "../components/NavigationBar.vue";
import Footer from "../components/Footer.vue"


export default {
    // var Jawg_Dark = L.tileLayer('https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {

  components: {
      Footer, 
      NavigationBar,
    },
    mounted() {
        var map = L.map('map').setView([49.183333, -0.35], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([49.183333, -0.35]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


    }
};
</script>