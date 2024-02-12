import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import Welcome from './views/Welcome.vue'
import Map from './views/Map.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path: '/',
            component: Welcome
        }, 
        {
            path: '/map',
            component: Map
        }
    ]
})
createApp(App).use(router).mount('#app')
