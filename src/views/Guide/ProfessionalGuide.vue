<template>
    <GuideContent :categories="['professionnel-prostitution', 'professionnel-prostitution-mineur']" />
    <Footer />
    </template>
    
    <script>
    import GuideContent from "../../components/Guide/GuideContent.vue"
    import NavigationBar from "../../components/NavigationBar.vue";
    import Footer from "../../components/Footer.vue"
    export default {
        components: {
            GuideContent,
            NavigationBar,
            Footer,
        }
        
        };
    
    </script>
    
    <style>
    
    </style>