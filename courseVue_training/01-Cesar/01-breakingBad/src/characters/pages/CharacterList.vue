<script setup lang="ts">

import CardList from "@/characters/components/CarList.vue";
import { useQuery } from '@tanstack/vue-query';
import breakingBadApi from '@/api/breakingBadApi';
import type{ Character } from '@/characters/interfaces/character';


const props = defineProps<{ title:string, visible:boolean }>();

const getCharacters = async(): Promise<Character[]> => {
    const { data } = await breakingBadApi.get<Character[]>('/quotes/62');
    return data
}

const { isLoading, data: characters} = useQuery(
    ['characters'],
    getCharacters
);




//! 1 - Normal Suspense
//esta es una forma de Suspense
//const {data: Characters} = await breakingBadApi.get<Character[]>('/quotes/62');
//const Characters = ref<Character[]>( data );

//! 2- Composable Functions
//const { isLoading, characters, hasError, errorMessage} = useCharacters();


//! 3 - TanStack Query
// const getCharactersSlow = async():Promise<Character[]> => {

// return new Promise( (resolve) => {
//     setTimeout( async() => {
//         const { data } = await breakingBadApi.get<Character[]>('/quotes/62');
//         resolve(data);
//     },1)
// })

// }

// const { isLoading, isError, data:characters, error } = useQuery(
// ['characters'],
// getCharactersSlow,
// // {
// //     cacheTime: 1000,
// //     refetchOnReconnect: 'always',
// //     //refetchInterval: 1000
// // }

// );

</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    
   <template v-else>
        <h2> {{ props.title }}</h2>

        <CardList :character="characters || []"/>
   </template>
</template>

<style scoped>

</style>