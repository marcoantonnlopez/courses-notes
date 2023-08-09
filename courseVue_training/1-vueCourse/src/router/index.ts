// para instalar router en vue pon en la terminal "npm install vue-router"

import { createRouter, createWebHistory } from "vue-router";

// import HomePageVue from '@/shared/pages/HomePage.vue'
import HomePage from '../shared/pages/HomePage.vue'
import AboutPage from '../shared/pages/AboutPage.vue'
import { characterRoute } from '../characters/router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), //esto es para las rutas ../../.., si quieremos que se tenga un # en medio entonces usamos createWebHashHistory  ../#/...
    routes: [
        // Public
        { path: '/', name: 'home', component: HomePage },
        { path: '/about', name: 'about', component: AboutPage },

        // Characters
        // ? Forma 1 de poner las subrutas de characters (por alguna razon no me funcionó xd)
        // {
        //     ...characterRoute,
        //     path: '/characters'
        // }

        // ? Forma 2 de poner las subrutas de characters
        characterRoute,
        // ! esto lo comentamos porque es lo que hacía que al entrar a las subrutas se fuera por default a home
        // {
        //     path: '/characters',
        //     name: 'characters',
        //     component: () => import('../characters/layout/CharacterLayout.vue')
        // },

        // Default
        { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) } //cualquier otra ruta que no sea las declaradas arriba, que lleve al home
    ]
});

// ? Forma 3 de poner las subrutaas de characters
// path: '/characters',
//     router.addRoute(characterRoute);

export default router;