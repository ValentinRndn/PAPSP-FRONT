<template>

  <div class="container mx-auto">
    <div class="relative sm:hidden">
      <img :src="`/api/${article._image}`" alt="Article Image" class="w-full h-[500px] object-cover">
      <div class="absolute bottom-1/2 left-0 right-0 text-center text-white text-5xl font-bold font-cgothic">
        <div>{{ article._titre }}</div>
        <div class="info-post flex text-center justify-center items-center mt-5 gap-5">
          <h2 class="text-3xl">Par {{ article._auteur }}</h2>
          <h2 class="text-3xl">- {{ formatDate(article._date) }}</h2>
        </div>
      </div>
      <a href="../../blog">
        <img class="absolute top-5 left-5" src="../../assets/blog/back_arrow.svg" alt="back_arrow">
      </a>
    </div>

    <p v-html="article._description"></p>
  </div>

  <Footer />
</template>


  
<script>
import NavigationBar from "../../components/NavigationBar.vue";
import Footer from "../../components/Footer.vue";

export default {
  components: {
    NavigationBar,
    Footer,
  },
  data() {
    return {
      article: {} 
    }
  },
  methods: {
    formatDate(dateString) {
      // Créer une instance de Date à partir de la chaîne de date
      const date = new Date(dateString);
      // Formater la date selon le format souhaité (par exemple, "dd/mm/yyyy hh:mm")
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      return formattedDate;
    }
  },
  created() {
    const id = this.$route.params.id;
    fetch(`http://localhost:3000/blog/getBlogById/${id}`)
      .then(response => response.json())
      .then(data => {
        this.article = data;
      });
  }
}
</script>
