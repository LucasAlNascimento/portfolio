<template>
    <v-container>
        <Header />
    </v-container>

    <v-container class="d-flex flex-column flex-md-row">
        <v-row>
            <v-col cols="12" sm="12" md="7" lg="6" xl="6" class="d-flex flex-column ga-10">
                <h1 class="text-teal-accent-3 text-uppercase text-h3 font-weight-black">Sobre Mim</h1>
                <p class="text-white text-justify font-weight-medium">
                    Me chamo Lucas, tenho 24 anos e possuo bacharelado em 
                    <span class="text-teal-accent-3">Ciência da Computação</span> 
                    pela Universidade Paulista (UNIP).
                </p>
                <p class="text-white text-justify font-weight-medium"> 
                    Desde criança tenho afinidade e facilidade com tecnologia, especialmente com o
                    <span class="text-teal-accent-3">desenvolvimento front-end</span>.
                    Na graduação, participei da construção da aplicação web para uma empresa que vendia tecidos sustentáveis. Utilizei
                    <span class="text-teal-accent-3">HTML</span>,
                    <span class="text-teal-accent-3">CSS</span>,
                    <span class="text-teal-accent-3">JavaScript</span> e
                    através deste projeto, iniciei minha paixão pela programação. Atualmente estou em busca da minha consolidação e evolução como desenvolvedor front-end. Possuo experiência em bibliotecas e frameworks JavaScript como 
                    <span class="text-teal-accent-3">React</span>,
                    <span class="text-teal-accent-3">Angular</span> e
                    <span class="text-teal-accent-3">Vue.js</span>,
                    além de outras ferramentas como:
                </p>
                <ul class="text-white ml-4 font-weight-medium">
                    <li>Styled-Components | Sass | Bootstrap | Tailwind CSS | Vuetify</li>
                    <li>Redux | ContextAPI</li>
                    <li>Axios | React Query</li>
                    <li>Jest | React Testing Library</li>
                    <li>TypeScript</li>
                    <li>PHP</li>
                    <li>MySQL | SQL Server</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Git</li>
                    <li>Pipelines CI/CD</li>
                </ul>
            </v-col>
            <v-col cols="12" sm="12" md="5" lg="6" xl="6" class="d-flex align-center justify-center align-md-start justify-md-end justify-xl-center">
                <img src="/src/assets/lucas.jpg" alt="Foto Lucas" title="Foto Lucas" class="w-50 rounded-circle w-md-75 w-xl-50" />
            </v-col>
        </v-row>

    </v-container>
</template>
  
<script setup lang="ts">

</script>
