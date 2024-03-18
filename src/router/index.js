import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Map from '../views/Map.vue'
import Documentation from '../views/Documentation.vue'
import Contact from '../views/Contact.vue'
import Flyer from '../views/Flyer.vue'
import Admin from '../views/back/Admin.vue'
import TableauBord from '../views/back/TableauBord.vue'

import Login from '../views/back/Login.vue'


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
        },
        {
            path: '/documentation',
            component: Documentation
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/flyer',
            component: Flyer
        }
        ,
        // {
        //     path: '/admin',
        //     component: Admin
        // },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/admin',
            component: TableauBord
        },

    ]
})

export default router