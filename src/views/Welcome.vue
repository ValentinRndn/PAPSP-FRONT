<template>
  <div
    class="bg-landing relative w-full h-screen bg-center z-10 mb-24 rounded-bl-[25%] bg-cover bg-no-repeat md:h-[50vh] md:mb-0 overflow-hidden"
  >
    <aside class="flex items-center justify-center gap-5 mb-8 sm:hidden">
      <img
        src="../assets/logo_typo_blanc.png"
        alt="logo"
        class="size-1/4 mt-8"
      />

      <ul
        class="navbar flex gap-10 text-xl mt-10 font-cgothic font-bold text-white"
      >
        <li class="menu underline">
          <router-link
            to="/">ACCUEIL</router-link
          >
        </li>
        <li class="menu">
          <router-link
            to="/map">CARTOGRAPHIE</router-link>
        </li>
        <li class="menu">
          <router-link
            to="/guide">GUIDE</router-link
          >
        </li>
        <li class="menu">
          <router-link
            to="/contact"
            >CONTACT</router-link>
        </li>
        <li class="menu">
          <router-link
            to="/blog"
            >BLOG</router-link>
        </li>
        <li class="menu">
          <router-link
            to="/APropos"
            >EN SAVOIR +</router-link>
        </li>
      </ul>
    </aside>

    <div class="header-content h-screen">
      <div
        class="text-header text-white text-xl font-bold flex flex-col items-center justify-center h-[50vh] md:w-full md:text-sm"
      >
        <div class="citation-header w-[28vw] text-center md:w-1/2">
          <h1 class="citation bg-purple p-6 w-full -ml-[7.5vw]">
            INSERER UNE CITATION
          </h1>
        </div>
        <div class="sentance-header w-[28vw] text-center md:w-1/2">
          <h1 class="citation bg-purple-fonce p-6 w-full ml-[7.5vw]">
            CHOISIR ENSEMBLE MERCREDI
          </h1>
        </div>
      </div>

      <!-- Logo réseaux -->
      <div
        class="logo-reseaux flex justify-center items-center gap-4 absolute bottom-0 left-0 right-0 mb-8 md:gap-2"
      >
        <a href="url_du_reseau_social_1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-white hover:scale-110 duration-200 md:w-[40px]"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.350v3.209h2.753v8.202h3.312z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a href="url_du_reseau_social_2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-white hover:scale-110 duration-200 md:w-[40px]"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.50 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
            />
          </svg>
        </a>
        <a href="url_du_reseau_social_3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-white hover:scale-110 duration-200 md:w-[40px]"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.953 9.953 0 0 1 2.001 12c0-5.523 4.477-10 10-10M8.593 7.3l-.2.008a.961.961 0 0 0-.372.1a1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.97 2.742c.214.213.424.427.65.626a9.448 9.448 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231a4.83 4.83 0 0 0 .383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288c.083-.086.155-.187.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.497.497 0 0 0-.176-.041a.482.482 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13a1.43 1.43 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6.025 6.025 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.297 6.297 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373c.118-.19.155-.385.093-.536c-.28-.684-.57-1.365-.868-2.041c-.059-.134-.234-.23-.393-.249c-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
            />
          </svg>
        </a>
        <a href="url_du_reseau_social_4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-white hover:scale-110 duration-200 md:w-[40px]"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
            />
          </svg>
        </a>
        <a href="url_du_reseau_social_4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-white hover:scale-110 duration-200 md:w-[40px]"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
            />
          </svg>
        </a>
      </div>

      <div class="epsm-image">
        <img
          src="../assets/welcome/EPSM.png"
          alt="epsm"
          class="w-[150px] object-cover absolute bottom-0 right-20 md:w-[100px] md:right-5"
        />
      </div>
    </div>
  </div>

  <!-- Missions et photo stop  -->
  <div
    class="container-presentation flex flex-wrap justify-center items-center w-full gap-8 md:text-center"
  >
    <div class="presentation max-w-[600px]">
      <h1 class="text-2xl text-black mx-10 mt-10 mb-4 font-bold font-cgothic">
        LE PROGRAMME PAPSP A POUR MISSION :
      </h1>
      <ul class="text-black mx-10 text-xl font-cgothic">
        <li class="mb-4">
          - <span>Informer, orienter et accompagner</span> les Personnes en
          Situation de Prostitution (PSP) vers les dispositifs de
          <span
            >droits communs dans les champs de la santé, du social et du
            médico-social</span
          >
        </li>
        <li class="mb-4">
          - Promouvoir la démarche de <span>réduction des risques</span> et
          <span>des dommages</span>
        </li>
        <li class="mb-4">
          - Favoriser la promotion,
          <span>l’éducation à la santé et l’accès aux dépistages</span> (VIH,
          IST, hépatites, cancers)
        </li>
        <li class="mb-4">
          - <span>Sensibiliser les professionnels</span> dans les champs de la
          santé, du social, médico-social au public des Personnes en Situation
          de Prostitution.
        </li>
      </ul>
    </div>

    <div class="">
      <img
        src="../assets/stop.jpg"
        alt="stop"
        class="rounded-tr-[50%] w-[500px] h-[500px] object-cover md:mx-5"
      />
    </div>
  </div>

  <!-- Container numéros  -->
  <div
    class="flex items-center justify-center font-c-gothic text-white font-bold text-5xl mt-20 relative md:text-xl"
  >
    <div class="flex flex-col items-center bg-purple rounded-2xl p-10 relative">
      <h1 class="mb-2">LES NUMÉROS À CONTACTER</h1>
      <div class="numero flex gap-36 mb-10 mt-5 md:gap-10 md:text-4xl">
        <p class="flex-grow text-center">3919</p>
        <div
          class="contact-mineur flex items-center justify-center gap-4 md:flex-col md:gap-0"
        >
          <p class="flex-grow text-center">119</p>
          <p class="flex-grow text-center text-lg md:text-sm">
            Pour les mineurs
          </p>
        </div>
      </div>
      <img
        src="../assets/welcome/polygon.png"
        alt="forme1"
        class="absolute object-cover right-0 -mr-5 mt-40 w-[50px] md:w-[30px]"
      />
      <img
        src="../assets/welcome/polygon.png"
        alt="forme1"
        class="absolute object-cover left-0 top-0 -ml-5 -mt-5 w-[70px] md:w-[50px]"
      />
      <img
        src="../assets/welcome/polygon.png"
        alt="forme1"
        class="absolute object-cover left-0 top-0 -ml-8 mt-14 w-[40px] md:w-[20px]"
      />
    </div>
  </div>

  <!-- Bouton - Contact -->
  <div class="flex items-center justify-center -mt-8 font-helvetica">
    <div
      class="flex items-center bg-purple-fonce shadow-xl rounded-2xl gap-4 py-2 px-6 z-20 hover:scale-110 duration-200"
    >
      <img
        class="w-[50px] bg-purple-fonce md:hidden"
        src="../assets/courriel-de-contact.png"
      />
      <button class="text-white h-full font-bold text-xl md:text-lg md:p-4">
        NOUS CONTACTER
      </button>
    </div>
  </div>

  <!-- Chiffres clés -->
  <div class="bg-alveoles h-[900px] z-0 bg-cover relative md:h-[1900px]">
    <div
      class="relative top-32 w-full flex gap-12 justify-center items-center md:flex-col md:gap-6 md:text-xl md:top-16"
    >
      <div
        v-for="number in numbers"
        :key="number.id"
        class="information flex flex-col justify-center items-center"
      >
        <p class="chiffre text-6xl font-cgothic">{{ number.personnes }}</p>
        <div class="information flex flex-col justify-center items-center">
          <p class="text font-jost-sans text-purple-fonce">
            Personnes rencontrées
          </p>
        </div>
      </div>
      <div class="separator">
        <p class="text text-6xl text-yellow md:hidden">|</p>
      </div>
      <div
        v-for="number in numbers"
        :key="number.id"
        class="information flex flex-col justify-center items-center"
      >
        <p class="chiffre text-6xl font-cgothic">{{ number.maraudes }}</p>
        <div class="information flex flex-col justify-center items-center">
          <p class="text font-jost-sans text-purple-fonce">
            Maraudes effectuées
          </p>
        </div>
      </div>
      <div class="separator">
        <p class="text text-6xl text-yellow md:hidden">|</p>
      </div>
      <div
        v-for="number in numbers"
        :key="number.id"
        class="information flex flex-col justify-center items-center"
      >
        <p class="chiffre text-6xl font-cgothic">{{ number.preservatifs }}</p>
        <div class="information flex flex-col justify-center items-center">
          <p class="text font-jost-sans text-purple-fonce">
            Préservatifs distribués
          </p>
        </div>
      </div>
    </div>
    <!-- Articles & News -->
    <div class="relative top-56 w-full flex flex-col justify-center items-center md:top-25">
      <p class="text-5xl text-purple-fonce font-bold font-cgothic mb-14">Articles & News</p>

    <div class="header-content flex flex-wrap gap-12 justify-center items-center mx-auto ">

      <div
        v-for="article in epingleArticles.filter(
          (article) => !article._archive
        )"
        :key="article._id"
        class="card w-[300px] h-[375px] object-cover bg-white rounded-[25px] overflow-hidden p-4 shadow-xl border border-solid border-slate-300 relative"
      >
        <img
          :src="`api/${article._image}`"
          alt="article image"
          class="rounded-t-[25px] h-[180px] w-full object-cover"
        />
        <p class="text-3xl font-bold font-c-gothic text-post-grey">
          {{ article._titre }}
        </p>
        <p class="text text-grey font-jost-sans absolute bottom-4">
          {{ formatDate(article._date) }}
        </p>
        <router-link
          :to="{ name: 'BlogDetail', params: { id: article._id } }"
          class="arrow text-xl text-grey absolute bottom-3 right-4 font-bold bg-light-beige p-2 px-3 rounded-full"
        >
          >
        </router-link>
      </div>
    </div>
  </div>
  </div>


  <!-- Logo partenaires -->
  <div class="logo-container">
    <div class="logo-content">
      <img
        src="../assets/logo_france_terre_asile.jpg"
        alt="logo-partenaires"
      />
      <img
        src="../assets/logo_calvados.png"
        alt="logo-partenaires"
      />
      <img
        src="../assets/ars_logo.png"
        alt="logo-partenaires"
      />
      <img
        src="../assets/logo_mondeville.png"
        alt="logo-partenaires"
      />
      <img
        src="../assets/logo_itineraire.png"
        alt="logo-partenaires"
      />
      <img
        src="../assets/welcome/SPEPSC.png"
        alt="logo-partenaires"
      />
      <img
        src="../assets/logo_france_terre_asile.jpg"
        alt="logo-partenaires"
      />
      <img
        src="../assets/logo_calvados.png"
        alt="logo-partenaires"
      />
      <img
        src="../assets/ars_logo.png"
        alt="logo-partenaires"
      />
      <img
        src="../assets/logo_mondeville.png"
        alt="logo-partenaires"
      />
      <img
        src="../assets/logo_itineraire.png"
        alt="logo-partenaires"
      />
      <img
        src="../assets/welcome/SPEPSC.png"
        alt="logo-partenaires"
      />
    </div>
  </div>

  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import NavigationBarMobile from "../components/NavigationBarMobile.vue";
import { showAllBlogs, showLastBlog } from "../services/BlogsService";
import { showNumbers } from "../services/StatistiquesService.js";

export default {
  components: {
    Footer,
    NavigationBarMobile,
  },
  data() {
    return {
      numbers: [],
      articles: [],
      currentPage: "",
    };
  },
  methods: {
    async showNumbers() {
      try {
        const numbers = await showNumbers();
        this.numbers = numbers;
        this.error = null;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des statistiques :",
          error
        );
        this.error =
          "Une erreur s'est produite lors de la récupération des statistiques";
        this.numbers = null;
      }
    },
    async showAllBlogs() {
      try {
        const articles = await showAllBlogs();
        this.articles = articles;
        this.error = null;
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
        this.error =
          "Une erreur s'est produite lors de la récupération des articles";
        this.articles = [];
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      return formattedDate;
    },
    truncatedDescription(description) {
      if (description.length > 300) {
        return description.substring(0, 300) + "...";
      }
      return description;
    },
  },
  mounted() {
    this.showNumbers();
    this.showAllBlogs();
  },
  computed: {
    epingleArticles() {
      return this.articles.filter((article) => article._epingle);
    },
  },
};
</script>

<style>
.logo-container {
  height: 250px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-content {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  animation: scroll 80s linear infinite;
}

.logo-content img {
  height: 120px; 
  width: auto; 
  margin: 0 25px; 
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

</style>
