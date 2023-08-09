import { RouteRecordRaw } from "vue-router";
import CharacterLayout from "../../characters/layout/CharacterLayout.vue";
import CharacterId from "../../characters/pages/CharacterId.vue";
import CharacterList from "../../characters/pages/CharacterList.vue";
import CharacterSearch from "../../characters/pages/CharacterSearch.vue";

export const characterRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list', //esto es redireccionar a la lista cuando entras a characters
    component: CharacterLayout,
    children: [
        {
            path: 'by/id',
            name: 'character-id',
            props: { title: 'Por Id', },
            component: CharacterId
        },
        {
            path: 'list',
            name: 'character-list',
            props: { title: 'Lista', },
            component: CharacterList
        },
        {
            path: 'search',
            name: 'character-search',
            props: { title: 'Búsqueda', },
            component: CharacterSearch
        }
    ]

}