import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Map from '../views/Map.vue';
import Guide from '../views/Guide.vue';
import Contact from '../views/Contact.vue';
import APropos from '../views/APropos.vue';
import Dashboard from '../views/back/Dashboard.vue';
import Users from '../views/back/Users.vue';
import DocumentationBack from '../views/back/Documentation.vue';
import Landing from '../views/back/Landing.vue';
import BackBlog from '../views/back/Blog.vue';
import Blog from '../views/Blog.vue';
import Particulier from '../views/cartographie/Particulier.vue';
import Professionel from '../views/cartographie/Professionel.vue';
import ParticularGuide from '../views/Guide/ParticularGuide.vue';
import ProfessionalGuide from '../views/Guide/ProfessionalGuide.vue';
import BlogDetail from '../components/Blog/BlogDetail.vue';
import Login from '../views/back/Login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome,
        },
        {
            path: '/map',
            name: 'Map',
            component: Map,
        },
        {
            path: '/guide',
            name: 'Guide',
            component: Guide,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog,
        },
        {
            path: '/blog/article/:id',
            name: 'BlogDetail',
            component: BlogDetail,
        },
        {
            path: '/APropos',
            name: 'APropos',
            component: APropos,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/backOffice/dashboard',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/backOffice/blog',
            name: 'BackBlog',
            component: BackBlog,
        },
        {
            path: '/backOffice/landing',
            name: 'Landing',
            component: Landing,
        },
        {
            path: '/backOffice/users',
            name: 'Users',
            component: Users,
        },
        {
            path: '/backOffice/documentation',
            name: 'DocumentationBack',
            component: DocumentationBack,
        },
        {
            path: '/cartographie/particulier',
            name: 'Particulier',
            component: Particulier,
        },
        {
            path: '/cartographie/professionel',
            name: 'Professionel',
            component: Professionel,
        },
        {
            path: '/guide/particularguide',
            name: 'ParticularGuide',
            component: ParticularGuide,
        },
        {
            path: '/guide/professionalguide',
            name: 'ProfessionalGuide',
            component: ProfessionalGuide,
        },
    ],
});

export default router;
