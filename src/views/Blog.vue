<template>
  <div>
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

    <div class="header-content flex gap-12 justify-center items-center bg-white mx-auto mt-6">
    <div v-for="article in epingleArticles.filter(article => !article._archive)" :key="article._id" class="card w-[300px] h-[375px] object-cover rounded-[25px] overflow-hidden p-4 shadow-xl border border-solid border-slate-300 relative">
      <img :src="`api/${article._image}`" alt="article image" class="rounded-t-[25px] h-[180px] w-full object-cover" />
      <p class="text-3xl font-bold font-c-gothic text-post-grey">{{ article._titre }}</p>
      <p class="text text-grey font-jost-sans absolute bottom-4">{{ formatDate(article._date) }}</p>
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
      <div v-if="lastArticle" class="programme flex justify-center items-center max-w-[1000px] gap-10 md:flex-col mx-auto bg-white p-4 shadow-xl rounded-3xl">
        <div class="image-programme w-1/2">
          <img :src="`api/${lastArticle._image}`" alt="article image" class="rounded-t-[25px] h-[300px] w-full object-cover" />
        </div>
        <div class="content-programme w-1/2 flex flex-col gap-6">
          <h3 class="text-3xl font-bold font-c-gothic text-post-grey">{{ lastArticle._titre }}</h3>
          <p class="text-md font-jost-sans text-program-grey" v-html="truncatedDescription(lastArticle._description)"></p>
          <div class="bottom-content flex items-center justify-between">
            <p class="text-grey font-jost-sans">{{ formatDate(lastArticle._date) }}</p>
            <router-link :to="{ name: 'BlogDetail', params: { id: lastArticle._id } }" class="arrow text-xl text-grey inline-block font-bold bg-light-beige p-2 px-3 rounded-full">></router-link>
          </div>
        </div>
      </div>


    <!-- LES ARTICLES & NEWS POSTS -->
    <div class="text flex justify-start items-center pt-12 mt-12 max-w-[1000px] mx-auto">
      <h1 class="flex text-3xl text-purple-fonce font-bold font-cgothic">
        LES ARTICLES & NEWS
      </h1>
      
    </div>
    <div class="cards flex gap-12 justify-center items-center mt-6">
    <div v-for="article in articles.filter(article => !article._archive)" :key="article._id" class="card w-[300px] h-[375px] object-cover rounded-[25px] overflow-hidden p-4 shadow-xl border border-solid border-slate-300 relative bg-white">
      <img :src="`api/${article._image}`" alt="article image" class="rounded-t-[25px] h-[180px] w-full object-cover" />
      <p class="text-3xl font-bold font-c-gothic text-post-grey">{{ article._titre }}</p>
      <p class="text text-grey font-jost-sans absolute bottom-4">{{ formatDate(article._date) }}</p>
      <router-link :to="{ name: 'BlogDetail', params: { id: article._id } }" class="arrow text-xl text-grey absolute bottom-3 right-4 font-bold bg-light-beige p-2 px-3 rounded-full">
        >
      </router-link>
    </div>
  </div>

  </div>
  
</div>
  <Footer />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import Footer from "../components/Footer.vue";
import { showAllBlogs, showLastBlog } from "../services/BlogsService";

export default {
  components: {
    NavigationBar,
    Footer,
  },
  data() {
    return {
      articles: [],
      lastArticle: null,
    };
  },
  methods: {
    formatDate(dateString) {
      // Créer une instance de Date à partir de la chaîne de date
      const date = new Date(dateString);
      // Formater la date selon le format souhaité (par exemple, "dd/mm/yyyy hh:mm")
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      return formattedDate;
    },
    truncatedDescription(description) {
      if (description.length > 300) {
        return description.substring(0, 300) + '...';
      }
      return description;
    },
  },
  async mounted() {
    try {
      this.articles = await showAllBlogs();
      this.lastArticle = await showLastBlog();
    } catch (error) {
      console.error("Failed to fetch articles or last article:", error);
    }
  },
  computed: {
    epingleArticles() {
      return this.articles.filter(article => article._epingle);
    },
    notArchivedArticles() {
      return this.articles.filter(article => !article._archive);
    },
  },
};
</script>

<style>

</style>
