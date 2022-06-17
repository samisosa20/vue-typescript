
import {createRouter, createWebHistory} from "vue-router"

import Home from '@/screens/views/Home'
import About from '@/screens/views/About'
import Map from '@/screens/views/Map'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/about', name: 'about', component: About},
        {path: '/home', name: 'home2', component: Home},
        {path: '/map', name: 'map', component: Map, meta: {layout: 'LayoutMap'}},
    ]
})

export default router