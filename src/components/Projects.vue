<template>
    <v-container>
        <Header />
    </v-container>
    <v-container>
        <div class="w-100 h-100 d-flex flex-column justify-center rounded-xl pt-5 pb-16 px-5 ga-14 "
            style="background-color: #2b2b2b59">
            <v-row>
                <v-col cols="12" class="w-100 d-flex flex-column flex-md-row ga-8">
                    <a href="https://lucasalnascimento.github.io/pokedex/" target="_blank"
                        class="d-flex justify-center">
                        <img src="/src/assets/pokedex.png" alt="Projeto Pokédex"
                            class="img w-100 rounded-xl justify-center" style="max-width: 500px;" />
                    </a>
                    <div class="w-100 d-flex flex-column justify-center text-center ga-10">
                        <div class="d-flex flex-column justify-center ga-5">
                            <h2 class="text-pink-lighten-3 text-h6 font-weight-black">Pokédex</h2>
                            <p class="text-white text-h6 font-weight-light">Projeto Front-End de uma enciclopédia de
                                Pokémons utilizando as seguintes features:</p>
                        </div>
                        <div class="d-flex flex-row justify-center items-center ga-10">
                            <v-img :width="45" :max-width="45" src="/src/assets/angular.png" alt="Logo Angular" />
                            <v-img :width="45" :max-width="45" src="/src/assets/typescript.png" alt="Logo Typescript" />
                            <v-img :width="50" :max-width="50" src="/src/assets/sass.png" alt="Logo Sass" />
                        </div>
                    </div>
                </v-col>
                <div class="w-100 mx-5 bg-pink-lighten-5 rounded-xl mt-13" style="height: 2px;">&nbsp</div>
            </v-row>

            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="w-100 d-flex flex-column flex-md-row ga-8">
                    <a href="https://luxmotors.vercel.app/" target="_blank"
                        class="d-flex justify-center">
                        <img src="/src/assets/luxmotors.png" alt="Projeto Pokédex"
                            class="img w-100 rounded-xl justify-center" style="max-width: 500px;" />
                    </a>
                    <div class="w-100 d-flex flex-column justify-center text-center ga-10">
                        <div class="d-flex flex-column justify-center ga-5">
                            <h2 class="text-grey-lighten-1 text-h6 font-weight-black">Luxmotors</h2>
                            <p class="text-white text-h6 font-weight-light">Projeto Front-End de uma empresa fictícia que realiza a locação de carros de luxo, apresentando os modelos e os direcionando ao seu público-alvo.</p>
                        </div>
                        <div class="d-flex flex-row justify-center items-center ga-10">
                            <v-img :width="45" :max-width="45" src="/src/assets/react.png" alt="Logo React" />
                            <v-img :width="45" :max-width="45" src="/src/assets/typescript.png" alt="Logo Typescript" />
                            <v-img :width="50" :max-width="50" src="/src/assets/tailwind.png" alt="Logo Tailwind" />
                            <v-img :width="90" :max-width="90" src="/src/assets/redux.png" alt="Logo Redux" />
                        </div>
                    </div>
                </v-col>
                <div class="w-100 mx-5 bg-pink-lighten-5 rounded-xl mt-15" style="height: 2px;">&nbsp</div>
            </v-row>

            <v-row>
                <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="w-100 d-flex flex-column flex-md-row ga-8">
                    <a href="https://lucasheroportfolio.vercel.app/" target="_blank"
                        class="d-flex justify-center">
                        <img src="/src/assets/portfolio.png" alt="Projeto Pokédex"
                            class="img w-100 rounded-xl justify-center" style="max-width: 500px;" />
                    </a>
                    <div class="w-100 d-flex flex-column justify-center text-center ga-10">
                        <div class="d-flex flex-column justify-center ga-5">
                            <h2 class="text-teal-accent-3 text-h6 font-weight-black">Portfólio</h2>
                            <p class="text-white text-h6 font-weight-light">Portfólio pessoal, com o intuito de exibir meus projetos individuais e realçar minhas realizações profissionais.</p>
                        </div>
                        <div class="d-flex flex-row justify-center items-center ga-10">
                            <v-img :width="45" :max-width="45" src="/src/assets/vue.png" alt="Logo Angular" />
                            <v-img :width="45" :max-width="45" src="/src/assets/typescript.png" alt="Logo Typescript" />
                            <v-img :width="150" :max-width="150" src="/src/assets/vuetify.png" alt="Logo Vuetify" />
                        </div>
                    </div>
                </v-col>
            </v-row>

        </div>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
.img {
    cursor: pointer;
    transition: opacity 0.7s ease;
}

.img:hover {
    opacity: 0.7;
}
</style>