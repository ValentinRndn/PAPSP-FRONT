<!-- BlogDetail.vue -->
<template>
  <NavigationBar />

    <div class="container mx-auto">
        <div :class="`header-banner bg-${article._image} w-full h-[500px] bg-cover relative sm:hidden`">

  <div class="absolute bottom-1/2 left-0 right-0 text-center text-white text-5xl font-bold font-cgothic">
    <div class=" ">{{ article._titre}}</div>
    <div class="info-post flex text-center justify-center items-center mt-5 gap-5">
      <h2 class="text-3xl">Par {{ article._auteur }}</h2>
      <h2 class="text-3xl">{{ article._date }}</h2>
    </div>
  </div>
  <a href="../../blog">
  <img class="absolute top-5 left-5"  src="../../assets/blog/back_arrow.svg" alt="back_arrow">
</a>
</div>

      <p class="">{{ article._description }}</p>
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
  