import { createRouter, createWebHistory} from 'vue-router';

//importaciones de las rutas
import HomePage from '@/shared/pages/HomePage.vue';
import AboutPage from '@/shared/pages/AboutPage.vue';
import { charactesRoute } from '../characters/router/index';


const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL ),
    routes: [
        //Public
        { path: '/', name: 'home', component: HomePage },
        { path: '/about', name: 'about', component: AboutPage },

        //Characters
        charactesRoute,
        // {
        //     path: '/characters',
        //     name: 'characters',
        //     component: () => import('@/characters/layout/CharacterLayout.vue')
        // },

        //Default
      
        { path: "/:pathMatch(.*)*", redirect: { name: 'home' } }
    ]
});

//Algo tambien util es poder agregar el "charactesRoute" de otra manera:
//router.addRoute( charactesRoute );

export default router;