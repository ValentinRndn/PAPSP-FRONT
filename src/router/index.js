import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Map from '../views/Map.vue'
import Documentation from '../views/Documentation.vue'
import Contact from '../views/Contact.vue'
import APropos from '../views/APropos.vue'
import Dashboard from '../views/back/Dashboard.vue'
import Users from '../views/back/Users.vue'
import DocumentationBack from '../views/back/Documentation.vue'
import Landing from '../views/back/Landing.vue'
import BackBlog from '../views/back/Blog.vue'
import Blog from '../views/Blog.vue'
import Particulier from '../views/cartographie/Particulier.vue'
import Professionel from '../views/cartographie/Professionel.vue'


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
            path: '/blog',
            component: Blog
        },
        {
            path: '/APropos',
            component: APropos
        }
        ,
        {
            path: '/login',
            component: Login
        },
        {
            path: '/backOffice/dashboard',
            component: Dashboard
        },
        {
            path: '/backOffice/blog',
            component: BackBlog
        },
        {
            path: '/backOffice/Landing',
            component: Landing
        },
        {
            path: '/backOffice/Users',
            component: Users
        },
        {
            path: '/backOffice/Documentation',
            component: DocumentationBack
        },
        {
            path: '/cartographie/Particulier',
            component: Particulier
        },
        {
            path: '/cartographie/Professionel',
            component: Professionel
        },
        

    ]
})

export default router