<script setup lang="ts" >
//cuando está en otro archivo no lleva la palabra setup
import { RouterView } from "vue-router";
import Navbar from "./shared/components/Navbar.vue";
import { routerLinks } from "./router/link-routes";
</script>

<template>
  <div class="wrapper">
    <header>
      <Navbar 
      title="MarcoVuePage"
      :links="routerLinks" />
    </header>

    <main>
      <RouterView />
      <h1>Home</h1>
    </main>

    <h1>App.vue</h1>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
