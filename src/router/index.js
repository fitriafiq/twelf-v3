import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import RSVP from '../views/RSVP.vue'
import Admin from '../views/Admin.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: ''
        }
    },
    {
        path: '/rsvp',
        name: 'rsvp',
        component: RSVP
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0,
            behavior: 'smooth',
        }
    },

})

export default router