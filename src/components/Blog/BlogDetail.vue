<!-- BlogDetail.vue -->
<template>
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold">{{ article._titre }}</h1>
      <p class="mt-4">{{ article._description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    components: {
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
  