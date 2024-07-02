<template>
    <v-container>
        <Header />
    </v-container>
    <v-container class="d-flex flex-column ga-11">

        
        <div class="w-100 h-100 d-flex flex-wrap rounded-xl items-center justify-start py-5 px-5 ga-16"
            style="background-color: #2b2b2b59">
            <div class="w-100 d-flex flex-row">
                <a href="https://lucasalnascimento.github.io/pokedex/" target="_blank">
                    <v-img :width="500" :max-width="500" src="/src/assets/pokedex.png" alt="Projeto Pokédex" class="rounded-xl img" />
                </a>
                <div class="w-50 d-flex flex-column justify-center items-center mx-auto ga-8">
                    <h2 class="text-pink-lighten-3 text-h6 font-weight-black">Pokédex</h2>
                    <p class="text-white text-h6 text- font-weight-light">Projeto Front-End de uma enciclopédia de Pokémons
                        utilizando as seguintes features:<br /></p>
                    <div class="d-flex flex-row items-center ga-10">
                        <v-img :width="45" :max-width="45" src="/src/assets/angular.png" alt="Logo Angular" />
                        <v-img :width="45" :max-width="45" src="/src/assets/typescript.png" alt="Logo Typescript" />
                        <v-img :width="50" :max-width="50" src="/src/assets/sass.png" alt="Logo Sass" />
                    </div>
                </div>
            </div>

            
            <div class="w-100 d-flex flex-row">
                <a href="https://luxmotors.vercel.app/" target="_blank">
                    <v-img :width="500" :max-width="500" src="/src/assets/luxmotors.png" alt="Projeto Luxmotors" class="rounded-xl img" />
                </a>
                <div class="w-50 d-flex flex-column justify-center items-center mx-auto ga-8">
                    <h2 class="text-grey-lighten-1 text-h6 font-weight-black">Luxmotors</h2>
                    <p class="text-white text-h6 text- font-weight-light">Projeto Front-End de uma empresa que faz locação de carros de luxo utilizando as seguintes features:<br /></p>
                    <div class="d-flex flex-row items-center ga-10">
                        <v-img :width="45" :max-width="45" src="/src/assets/react.png" alt="Logo React" />
                        <v-img :width="45" :max-width="45" src="/src/assets/typescript.png" alt="Logo Typescript" />
                        <v-img :width="50" :max-width="50" src="/src/assets/tailwind.png" alt="Logo Tailwind" />
                        <v-img :width="90" :max-width="90" src="/src/assets/redux.png" alt="Logo Redux" />
                    </div>
                </div>
            </div>

            
            <div class="w-100 d-flex flex-row">
                <a>
                    <v-img :width="500" :max-width="500" src="/src/assets/portfolio.png" alt="Projeto Portfolio" class="rounded-xl img" />
                </a>
                <div class="w-50 d-flex flex-column justify-center items-center mx-auto ga-8">
                    <h2 class="text-teal-accent-3 text-h6 font-weight-black">Portfólio</h2>
                    <p class="text-white text-h6 text- font-weight-light">Meu portfólio de aplicações criado utilizando as seguintes features:<br /></p>
                    <div class="d-flex flex-row items-center ga-10">
                        <v-img :width="45" :max-width="45" src="/src/assets/vue.png" alt="Logo Vue.js" />
                        <v-img :width="45" :max-width="45" src="/src/assets/typescript.png" alt="Logo Typescript" />
                        <v-img :width="150" :max-width="140" src="/src/assets/vuetify.png" alt="Logo Vuetify" />
                    </div>
                </div>
            </div>


        </div>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
.img{
    cursor: pointer;
    transition: opacity 0.7s ease;
}
.img:hover{
        opacity: 0.7;
    }


</style>