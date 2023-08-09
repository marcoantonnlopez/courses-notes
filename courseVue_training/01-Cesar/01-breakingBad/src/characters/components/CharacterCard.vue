<script setup lang="ts">
import { toRef } from 'vue';
import type{ Character } from '../interfaces/character';

const props = defineProps<{ character: Character}>();

const character = toRef(props, 'character');

</script>

<template>
    <div class="character-card">
        
        <h2>{{ character.author }}</h2>
        <h3>{{ character.quote }}</h3>
    </div>
</template>


<style scoped>

.character-card {
    align-items: center;
    border: 1px solid rgb(83, 83, 83);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    text-align: center;
    width: 250px;
}

</style>