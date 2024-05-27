<template>
    <div>
      <div class="button-container flex gap-5 mx-10">
        <button @click="loadCategory(categories[0])" class="button-prostitution border border-solid border-light-grey py-2 px-6 text-lg font-cgothic">{{ categories[0] }}</button>
        <button @click="loadCategory(categories[1])" class="button-prostitution border border-solid border-light-grey py-2 px-6 text-lg font-cgothic">{{ categories[1] }}</button>
      </div>
  
      <div class="documents-container mt-14 mx-10 flex gap-5 flex-wrap">
        <div v-for="doc in documents" :key="doc.id" class="doc-container w-[300px] flex flex-col items-center justify-center text-center gap-3">
          <!-- <a :href="doc.lien" target="_blank" rel="noopener noreferrer"> -->
            <img :src="`../api/${doc.image}`" class="w-full" :alt="doc.titre">
          <!-- </a> -->
          <a :href="doc.lien" target="_blank" rel="noopener noreferrer">
            <h3 class="w-full font-semibold">{{ doc.titre }}</h3>
          </a>
          <p class="w-full">{{ doc.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getFileByCategory } from '../../services/GuideService.js';
  
  export default {
    name: 'GuideContent',
    props: {
      categories: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        documents: []
      };
    },
    methods: {
      async loadCategory(category) {
        try {
          const response = await getFileByCategory(category);
          this.documents = response.map(doc => ({
            id: doc.id,
            titre: doc.titre,
            description: doc.description,
            lien: doc.lien,
            image: doc.image,
            categorie: doc.categorie
          }));
        } catch (error) {
          console.error('Error fetching documents:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  /* Ajoutez votre style ici */
  </style>
  