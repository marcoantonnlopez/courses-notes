<script setup lang="ts">

import CharacterCard  from "@/characters/components/CharacterCard.vue";
import type { Character } from '../interfaces/character';

interface Props {
    character: Character[],
}

const props = defineProps<Props>();

</script>

<template> 
    
    <!-- <h1 v-if="isError"> {{ error }}</h1> -->

    <div class="card-list">
        <CharacterCard
            v-for="author of props.character" 
            :key="author.author"
            :character="author"
        >
        </CharacterCard>
    </div>
</template>


<style scoped>

.card-list {
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    margin-bottom: 20px;
}

</style>