
<template>
    <v-container>
        <Header />
    </v-container>

    <v-container class="d-flex flex-column flex-md-row ga-16">
        <v-container class="d-flex flex-column ga-9">
            <h1 class="text-teal-accent-3 text-uppercase text-h3 font-weight-black">Um pouco Sobre Mim</h1>
            <p class="text-white text-justify font-weight-medium">
                Me chamo Lucas, tenho 24 anos e sou graduado em <span class="text-teal-accent-4 font-weight-medium"> Ciência
                    da Computação</span> pela Universidade Paulista (UNIP).<br />
                <br />
                Minha <span class="text-teal-accent-4 font-weight-medium">paixão por tecnologia vem desde criança</span>.
                Gostava de abrir computadores, entender como funcionavam seus componentes e como funcionavam as aplicações e
                arquivos contidos no Windows. Chegou um momento da minha vida que tive que escolher qual curso iria fazer na
                faculdade e então optei pela <span class="text-teal-accent-4 font-weight-medium"> Ciência da
                    Computação</span>, um curso onde abrangia de forma completa tudo o que eu precisava entender sobre
                computação. <br />
                <br />
                Dentro da UNIP nós alunos tinhamos trabalhos semestrais que eram nomeados de APS, e meu primeiro trabalho em
                grupo era criar o site completo de uma empresa fictícia onde o foco era obrigatoriamente em algo
                ambientalmente benéfico para o mundo. Criamos então a <span
                    class="text-teal-accent-4 font-weight-medium">AMET</span>, empresa que trabalhava com venda de tecidos
                totalmente sustentáveis. Nosso site foi feito em <span class="text-teal-accent-4 font-weight-medium">HTML,
                    CSS e Javascript</span> e foi um projeto muito bacana e que levaremos para toda vida. A partir desse
                dia, eu criei uma <span class="text-teal-accent-4 font-weight-medium">paixão muito grande pelo
                    desenvolvimento front-end</span> e fui aprimorando minhas habilidades conforme o tempo. <br />
                <br />
                Hoje estou numa constante evolução nos estudos e <span class="text-teal-accent-4 font-weight-medium">focado
                    na procura do meu primeiro emprego na área de
                    desenvolvimento</span>. Atualmente tenho habilidades em frameworks Javascript como <span
                    class="text-teal-accent-4 font-weight-medium">Angular</span>, <span
                    class="text-teal-accent-4 font-weight-medium">React</span> e
                <span class="text-teal-accent-4 font-weight-medium">Vue.js</span>, além de
                outras ferramentas como <span class="text-teal-accent-4 font-weight-medium">Git (versionamento)</span>,
                <span class="text-teal-accent-4 font-weight-medium">Jest (testes unitários)</span>, <span
                    class="text-teal-accent-4 font-weight-medium">Redux (gerenciamento de estado)</span>, <span
                    class="text-teal-accent-4 font-weight-medium">Sass (pré-processador CSS)</span>, <span
                    class="text-teal-accent-4 font-weight-medium">Tailwind CSS (framework CSS)</span>, <span
                    class="text-teal-accent-4 font-weight-medium">Typescript (superconjunto sintático estrito de
                    JavaScript)</span> e <span class="text-teal-accent-4 font-weight-medium">Vuetify (framework CSS)</span>.
            </p>
        </v-container>
        <v-container class="d-flex flex-column justify-center items-center mt-n10" style="width: 520px;">
            <img src="/src/assets/lucas.png" alt="Foto Lucas" />
            <div class="w-75 d-flex justify-center items-center ga-11 py-7 px-3 mx-auto my-n7 rounded-xl mt-xl-auto"
                style="background-color: #2b2b2b59" ref="scrollTarget">
                <div class="d-flex flex-wrap justify-center items-center ga-12">
                    <v-img :width="50" :max-width="50" :contain="true" src="/src/assets/angular.png" alt="Logo Angular" />
                    <v-img :width="50" :max-width="50" :contain="true" src="/src/assets/react.png" alt="Logo Angular" />
                    <v-img :width="50" :max-width="50" :contain="true" src="/src/assets/vue.png" alt="Logo Angular" />
                    <v-img :width="50" :max-width="50" :contain="true" src="/src/assets/html.png" alt="Logo Angular" />
                    <v-img :width="50" :max-width="50" :contain="true" src="/src/assets/typescript.png"
                        alt="Logo Angular" />
                    <v-img :width="50" :max-width="50" :contain="true" src="/src/assets/tailwind.png" alt="Logo Angular" />
                </div>
            </div>
        </v-container>
    </v-container>

    <v-container class="d-flex flex-row justify-center items-center ga-16">

    </v-container>
</template>
  
<script setup lang="ts">

</script>