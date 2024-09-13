
<template>
    <v-container>
        <Header />
    </v-container>

    <v-container class="d-flex flex-column flex-md-row">
        <v-row class="d-flex flex-column flex-lg-row justify-space-between ga-6">
            <v-col cols="12" sm="12" md="12" lg="7" xl="6" class="d-flex flex-column ga-10 justify-center">
                <h1 class="text-teal-accent-3 text-uppercase text-h3 font-weight-black">Sobre Mim</h1>
                <p class="text-white text-justify font-weight-medium">
                    Me chamo Lucas, tenho 24 anos e possuo bacharelado em 
                    <span class="text-teal-accent-3">Ciência da Computação</span> 
                    pela Universidade Paulista (UNIP).
                </p>
                <p class="text-white text-justify font-weight-medium"> 
                    Desde criança tenho afinidade e facilidade com tecnologia, especialmente com o
                    <span class="text-teal-accent-3">desenvolvimento front-end</span>.
                    Na graduação, participei do projeto de uma empresa fictícia que vendia tecidos sustentáveis, usando HTML, CSS e Javascript. Atualmente estou em busca do meu primeiro emprego na área do desenvolvimento front-end. Possuo experiência em frameworks JavaScript como 
                    <span class="text-teal-accent-3">React, Angular e Vue.js</span>,
                    além de outras ferramentas como:
                </p>
                <ul class="text-white ml-4 font-weight-medium">
                    <li>ReactJS | NextJS</li>
                    <li>Angular</li>
                    <li>Vue.js</li>
                    <li>Styled-Components | Sass | Bootstrap | Tailwind CSS | Vuetify</li>
                    <li>Redux | ContextAPI | Zustand</li>
                    <li>Axios | React Query</li>
                    <li>Jest | React Testing Library</li>
                    <li>HTML5 | CSS3</li>
                    <li>JavaScript | TypeScript</li>
                    <li>PHP</li>
                    <li>MySQL | SQL Server</li>
                    <li>C# | .NET</li>
                    <li>Apache Kafka</li>
                    <li>Docker</li>
                    <li>Jenkins</li>
                    <li>Azure</li>
                    <li>Git</li>
                    <li>Vite</li>
                    <li>Vercel</li>
                </ul>
            </v-col>
        </v-row>

        <v-row>
            <v-container class="d-flex w-100 flex-column mt-n5" style="width: 520px;">
                <img src="/src/assets/lucas.png" alt="Foto Lucas" />
            </v-container>
        </v-row>
    </v-container>
</template>
  
<script setup lang="ts">

</script>
