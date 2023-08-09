<script setup lang="ts">
import type { RouterLink } from '../../router/link-routes'
    
    // const props = defineProps({
    //     title: {
    //         type: String,
    //         required: true
    //     }
    // }); //esto es otra forma de hacer los props de abajo, esto se traduciría a js
            
    interface Props {
        title?: string;
        links: RouterLink[];
        showIcon?: boolean;
    }
    const props = withDefaults(defineProps<Props>(), {
        showIcon: true,
        links: () => [],
    }); //esto es lo interesante de usar typescript, te ahorras escribir lo de arriba en js. El poner title? es un condicional (si hay title)

    console.log(props.links);
</script>

<template>
    <nav>
        <img v-if="props.showIcon" src="../../assets/vue.svg" alt="Vue logo" height="25" width="25" />
        <span v-if="props.title">{{ props.title || 'no title'}}</span> 
        <!-- es si hay title lo escribe, si no pone 'no title', se puede hacer eso gracias al condicional de arriba 'title?' -->

        <RouterLink
        v-for="link of props.links"
        :key="link.path"
        :to="link.path"
        >
            {{ link.title }} 
        </RouterLink>
        
        <!-- * si no tuvieramos los links, ponerlos a mano sería así -->
        <!-- <RouterLink to="/"> Inicio </RouterLink> 
        <RouterLink to="/about"> Sobre </RouterLink>  -->
        <!-- el to="" es para decirle a dónde quieres ir  -->
    </nav>
  
</template>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    text-align: center;
    align-items: flex-start;
}

img {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
    margin-right: 5px;
}
</style>