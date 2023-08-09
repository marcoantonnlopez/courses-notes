<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import { RouterView } from 'vue-router';

import { routeLinks } from './router/link-routes';

</script>

<template>
 <div class="wrapper">
    <h1> App.vue </h1>

    <header>
      <!--Navbar-->
      <NavBar 
      title="Breaking Bad"
      :links="routeLinks"
      />
    </header>

    <main>
      <RouterView />
    </main>routeLinks
  
 </div>
</template>

<style scoped>

.wrapper{
  display: flex;
  flex-direction: column;
}

</style>
  