
import {createRouter, createWebHistory} from "vue-router"

import Home from '@/screens/views/Home'
import About from '@/screens/views/About'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/about', name: 'about', component: About},
        {path: '/home', name: 'home2', component: Home},
    ]
})

export default router