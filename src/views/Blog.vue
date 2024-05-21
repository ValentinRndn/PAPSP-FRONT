<template>
  <div>
    <NavigationBar />
    <div class="header-banner bg-banner-blog w-full h-[350px] bg-cover relative">
      <div class="absolute bottom-0 left-0 right-0 text-center">
        <div class="bg-white inline-block text-purple-fonce text-5xl py-6 px-24 rounded-t-2xl font-bold font-cgothic">ARTICLES & NEWS</div>
      </div>
    </div>

    <!-- Epinglés -->
    <div class="text flex justify-start items-center pt-12 mt-12 max-w-[1000px] mx-auto">
      <h1 class="flex text-3xl text-purple-fonce font-bold font-cgothic">
        ÉPINGLÉS
      </h1>
    </div>

    <div class="header-content flex flex-col justify-center items-center bg-white mx-auto mt-6">
      <div v-for="article in articles" :key="article._id" class="card w-[300px] h-[375px] object-cover rounded-[25px] overflow-hidden p-4 shadow-xl border border-solid border-slate-300 relative">
        <img src="../assets/stop.jpg" alt="stop" class="rounded-t-[25px]"/>
        <p class="text-3xl font-bold font-dm-serif text-post-grey">{{ article._titre }}</p>
        <p class="text text-grey font-jost-sans absolute bottom-4">{{ article._date }}</p>
        <router-link :to="{ name: 'BlogDetail', params: { id: article._id } }" class="arrow text-xl text-grey absolute bottom-3 right-4 font-bold bg-light-beige p-2 px-3 rounded-full">
          >
        </router-link>
      </div>
    </div>

    <!-- Dernier POST -->
    <div class="text flex justify-start items-center pt-12 mt-12 max-w-[1000px] mx-auto">
      <h1 class="flex text-3xl text-purple-fonce font-bold font-cgothic">
        DERNIER POST
      </h1>
    </div>

    <div class="bg-alveoles h-[1000px] z-0 bg-cover relative mx-4 mt-6">
      <!-- Dernier POST contenu ici -->
    </div>

    <!-- LES ARTICLES & NEWS POSTS -->
    <div class="text flex justify-start items-center pt-12 mt-12 max-w-[1000px] mx-auto">
      <h1 class="flex text-3xl text-purple-fonce font-bold font-cgothic">
        LES ARTICLES & NEWS
      </h1>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import Footer from "../components/Footer.vue";
import { showAllBlogs } from "../services/BlogsService";

export default {
  components: {
    NavigationBar,
    Footer,
  },
  data() {
    return {
      articles: [],
    };
  },
  async mounted() {
    this.articles = await showAllBlogs();
  },
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
