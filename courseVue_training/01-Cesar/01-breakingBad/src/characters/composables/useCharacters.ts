import { onMounted, ref } from 'vue';
import axios from 'axios';

import { Character } from '../interfaces/character';
import breakingBadApi from '../../api/breakingBadApi';


//Composable Function
export const useCharacters = () => {
    const characters = ref<Character[]>([]);
    const hasError = ref<boolean>(false);
    const isLoading = ref<boolean>(true);
    const errorMessage = ref<string>();

    onMounted(async () => {
        await loadCharacters();
    });

    const loadCharacters = async () => {

        if (characters.value.length > 0) return;

        isLoading.value = true;

        try {
            const { data } = await breakingBadApi.get<Character[]>('/quotes/62');
            characters.value = data;
            isLoading.value = false;

        } catch (error) {
            hasError.value = true;
            isLoading.value = false;

            if (axios.isAxiosError(error)) {
                return errorMessage.value = error.message;
            }
            errorMessage.value = JSON.stringify(error);
        }

        // if ( characters.value.length === 0){ //esta comparacion ayuda a evitar que se carge de nuevo la información al salir y entrar a la pagina nuevamente
        //     //Esta es una forma de como poder obtener los datos de la api y luego asignarlos a una variable reactiva
        //     breakingBadApi.get<Character[]>('/quotes/62')
        //     .then( resp => {
        //          // console.log({ data: resp.data[0].quote });
        //         characters.value = resp.data;
        //         isLoading.value = false;
        //     });
        // }


    }

    return {
        characters,
        isLoading,
        hasError,
        errorMessage,
    }
};