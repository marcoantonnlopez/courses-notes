<script setup lang="ts">

import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue';
import { charactesRoute } from '../router';
import { RouterLink } from '@/router/link-routes';

const routeLinks: RouterLink[] = charactesRoute.children!
    .filter( route => (route.props as { visible:boolean }).visible )
    .map( route => {
    return{
        name: route.name as string,
        path: route.path,
        title: (route.props as { title: string, visible: boolean })?.title,
    }
})

</script>

<template>
    <div>
        <h1>Personajes</h1>
        <!-- Navbar -->
        <NavBar 
            :show-icon="false"
            :links="routeLinks"
        />

        <!-- RouterView + Suspense -->
        <!-- <Suspense>
            <router-view />
        </Suspense> -->
        <router-view />
        

    </div>
</template>

<style scoped>

</style>