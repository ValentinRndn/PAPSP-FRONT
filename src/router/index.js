import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Map from '../views/Map.vue'

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

export default router