<template>
    <NavigationBar />
    <div class="documentation-page">
        <h1>Documentation page</h1>
        <HelloWorld msg="C'est la Documentation page" />
    </div>

    <Footer />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import Footer from "../components/Footer.vue"

export default {
  components: {
      Footer, 
      NavigationBar,
    }
};
</script>
