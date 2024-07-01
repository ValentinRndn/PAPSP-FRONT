import { createApp } from 'vue'
import './assets/style.css'
import VueMatomo from 'vue-matomo'
import App from './App.vue'

import router from './router'

createApp(App)
  .use(VueMatomo, {
    // Configurez votre instance Matomo en renseignant
    host: 'https://papspnetlifyapp.matomo.cloud/',
    siteId: 1,
  })
  .mount('#app')

window._paq.push(['trackPageView']); // Pour suivre les visites sur vos pages
