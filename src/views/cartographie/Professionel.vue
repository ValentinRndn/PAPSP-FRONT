<template>
    <div class="contact-page">
        <h1 class="text-5xl text-purple font-bold text-center mb-4">Professionel page</h1>
        <HelloWorld msg="C'est la Contact page" />
    </div>


    <div id="map" class="h-[600px] w-1/2 mx-auto"></div>
</template>


<script>

import L from 'leaflet';

export default {
    mounted() {
        var map = L.map('map').setView([49.183333, -0.35], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 15,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
};
</script>




<style scoped>

</style>