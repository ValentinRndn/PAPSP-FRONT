<template>
<div>
    <GuideContent :categories="['service-prostitution', 'service-prostitution-mineur']" />
  </div>

</template>

<script>
import GuideContent from "../../components/Guide/GuideContent.vue"
import NavigationBar from "../../components/NavigationBar.vue";
export default {
    components: {
        GuideContent,
        NavigationBar,
    }
    
    };

</script>

<style>

</style>