<template>
  <v-app>
    <v-main class="background-app">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  //
</script>

<style>
.background-app {
  background-image: url('src/backgroundimage.png');
  background-size: cover;
  background-position: center;
  height: auto;
}
</style>