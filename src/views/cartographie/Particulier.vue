<template>
    <NavigationBar />
    <div class="contact-page">
        <h1 class="text-5xl text-purple font-bold text-center mb-4">Particulier page</h1>
        <HelloWorld msg="C'est la Contact page" />
    </div>


    <div id="map" class="h-[600px] w-1/2 mx-auto"></div>

    <Footer />
</template>


<script>


import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import NavigationBar from "../../components/NavigationBar.vue";
import Footer from "../../components/Footer.vue"

export default {
    mounted() {
        var map = L.map('map').setView([49.183333, -0.35], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([49.183333, -0.35]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


    },
    components: {
      Footer, 
      NavigationBar,
    }
};
</script>




<style scoped>

</style>