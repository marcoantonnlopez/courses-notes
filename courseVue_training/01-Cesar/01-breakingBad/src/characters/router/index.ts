import { RouteRecordRaw } from "vue-router";
import { CharacterID, CharacterList, CharacterSearch } from "@/characters/pages"
import CharacterLayout from "@/characters/layout/CharacterLayout.vue";

export const charactesRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list',
    component: CharacterLayout,
    children: [
        { 
            path: 'by/id', 
            name: 'character-id', 
            props: { title: 'Por Id', visible: false, },
            component: CharacterID,
        },
        { 
            path: 'list', 
            name: 'character-list',
            props: { title: 'Lista completa', visible: true, },
            component: CharacterList, 
        },
        { 
            path: 'search', 
            name: 'character-search',
            props: { title: 'Busqueda', visible: true, }, 
            component: CharacterSearch, 
        },
    ]
}