import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
// import VueMatomo from 'vue-matomo'

const app = createApp(App)

app.use(router)

// app.use(VueMatomo, {
//   host: 'https://papspnetlifyapp.matomo.cloud/',
//   siteId: 1,
//   router: router, // Important: ajoutez le router ici si vous l'utilisez
// })

app.mount('#app')

// Assurez-vous que _paq est défini avant de l'utiliser
window._paq = window._paq || []
window._paq.push(['trackPageView'])
