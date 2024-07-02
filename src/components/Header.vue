<template>
      <v-app-bar absolute class="bg-black">
        <v-container class="d-flex justify-center justify-lg-start ga-15 text-teal-accent-4 font-weight-medium">
          <div>
            <router-link to="/" class="router-link">Home</router-link>    
          </div>
          <div>
            <router-link to="/about" class="router-link">Sobre</router-link>    
          </div>
          <div>
            <router-link to="/projects" class="router-link">Projetos</router-link>
          </div>
          <div>
            <router-link to="/contact" class="router-link">Contato</router-link>
          </div>
        </v-container>
      </v-app-bar>
</template>

<script setup lang="ts">
  //
</script>

<style>
.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
