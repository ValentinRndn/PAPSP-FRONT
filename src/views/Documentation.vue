<template>
  <NavigationBar />
<div class="header-banner bg-banner-blog w-full h-[350px] bg-cover relative">
  <div class="absolute bottom-0 left-0 right-0 text-center">
    <div class="bg-white inline-block text-purple-fonce text-5xl py-6 px-24 rounded-t-2xl font-bold font-cgothic">DOCUMENTATION</div>
  </div>
</div>
    <Footer />
</template>

<script>
export default {
  components: {
    Footer,
    NavigationBar,
  },
}
import NavigationBar from "../components/NavigationBar.vue";
import Footer from "../components/Footer.vue"
</script>


<style>

</style>