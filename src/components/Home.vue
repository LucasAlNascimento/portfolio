
<template>
  <v-container>
    <Header />
  </v-container>

  <v-container class="d-flex flex-column flex-md-row ga-16">
    <v-container class="d-flex flex-column w-50 ga-9">
      <h1 class="text-teal-accent-3 text-uppercase text-h3 font-weight-black">A Batalha pelo Mundo Front-End</h1>
      <p class="text-white text-justify font-weight-medium">
        Lucas, o aspirante a herói do mundo Front-End, embarcou em uma jornada desafiadora em busca do conhecimento
        supremo nos frameworks Angular, React e Vue.js - <span class="text-teal-accent-4 font-weight-medium"> os três
          pilares contidos no reino do desenvolvimento web</span>.<br />
        <br />
        Navegando por tutoriais, documentações extensas e projetos práticos, Lucas enfrentou desafios complexos, como
        integrar componentes reativos e gerenciar estados de forma eficiente. Cada framework representava um teste
        diferente, mas com sua <span class="text-teal-accent-4 font-weight-medium">determinação inabalável</span>,
        absorveu as nuances de cada um.<br />
        <br />
        Ao superar os obstáculos e compreender as particularidades dos frameworks, Lucas <span
          class="text-teal-accent-4 font-weight-medium">fortaleceu suas habilidades</span>, preparando-se para se tornar
        um verdadeiro guardião do Front-End em uma nova era de inovações e estabilidade.
      </p>
    </v-container>
    <v-container class="d-flex flex-column mt-n7" style="width: 510px;">
      <img src="/src/assets/lucashero.png" alt="Ilustração Lucas Herói" />
    </v-container>
  </v-container>

  <v-container class="d-flex flex-row justify-center items-center ga-16">
    <v-container class="d-flex flex-column w-75 my-auto ga-9 ml-4">
      <h2 class="text-teal-accent-3 text-uppercase text-h5 font-weight-black">Habilidades do Herói</h2>
      <p class="text-white text-justify font-weight-medium">
        Um herói desenvolvedor front-end deve possuir <span class="text-teal-accent-4 font-weight-medium">habilidades eficazes</span> como:<br/>
      </p>
      <ul class="text-white text-justify font-weight-medium">
        <li>Inovação e Criatividade (CRE) - Creativity</li>
        <li>Habilidades Técnicas (SKI) - Skills</li>
        <li>Criação de Designs Atrativos (DES) - Design Thinking</li>
        <li>Comunicação e Colaboração (COM) - Communication</li>
        <li>Adaptabilidade às Mudanças (ADA) - Adaptability</li>
        <li>Aprendizado Contínuo (LEA) - Learning</li>
      </ul>
    </v-container>
    <v-container class="w-50 d-flex flex-wrap justify-center items-center ga-11 py-6 ga-xl-14 mr-14 rounded-xl mt-xl-auto" style="background-color: #2b2b2b59;" ref="scrollTarget">
      <v-col cols="6" sm="8" md="8" lg="5" xl="3" v-for="(item, index) in items" :key="index">
      <div class="semi-circle" :style="{ '--percentage': item.percentage, '--fill': item.fill }">
        {{ item.label }}
      </div>
    </v-col>

    </v-container>
  </v-container>

  <v-container class="d-flex flex-row justify-center items-center ga-16">
    <div class="d-flex flex-column w-75 my-auto ga-9 ml-4">
      <h2 class="text-teal-accent-3 text-uppercase text-h5 font-weight-black">Ferramentas Dominadas</h2>
      <p class="text-white text-justify font-weight-medium">
        Lucas possui conhecimento em ferramentas que são extensões de seu próprio ser, permitindo-lhe manipular e moldar a interface do usuário como <span class="text-teal-accent-4 font-weight-medium">um artista molda uma tela em branco</span>. As principais ferramentas são:<br/>
      </p>
      <ul class="text-white text-justify font-weight-medium">
        <li>Angular - Fluxo de Dados Ilimitado</li>
        <li>React - Energia de Estado</li>
        <li>Vue.js - Modularidade Inigualável</li>
        <li>HTML - Acessibilidade Universal</li>
        <li>Tailwind CSS - Responsividade Poderosa</li>
        <li>Typescript - Segurança de Tipos</li>
      </ul>
    </div>
    <div class="w-50 d-flex justify-center items-center ga-11 py-6 mr-14 rounded-xl mt-xl-auto" style="background-color: #2b2b2b59" ref="scrollTarget">
      <div class="d-flex flex-wrap justify-center items-center my-auto mx-auto ga-12">
        <v-img :width="80" :max-width="80" :contain="true" src="/src/assets/angular.png" alt="Logo Angular"/>
        <v-img :width="80" :max-width="80" :contain="true" src="/src/assets/react.png" alt="Logo Angular"/>
        <v-img :width="80" :max-width="80" :contain="true" src="/src/assets/vue.png" alt="Logo Angular"/>
        <v-img :width="80" :max-width="80" :contain="true" src="/src/assets/html.png" alt="Logo Angular"/>
        <v-img :width="80" :max-width="80" :contain="true" src="/src/assets/typescript.png" alt="Logo Angular"/>
        <v-img :width="80" :max-width="80" :contain="true" src="/src/assets/tailwind.png" alt="Logo Angular"/>
      </div>
      
    </div>
  </v-container>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';

const scrollTarget = ref<HTMLElement | null>(null);

onMounted(() => {
  scrollToBottom();
});

function scrollToBottom() {
  if (scrollTarget.value) {
    scrollTarget.value.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}

const items = ref([
  { label: 'Creativity', percentage: 95, fill: '#00ff15' },
  { label: 'Skills', percentage: 89, fill: '#00d9ff' },
  { label: 'Design', percentage: 94, fill: '#00ff15' },
  { label: 'Communication', percentage: 92, fill: '#00d9ff' },
  { label: 'Adaptability', percentage: 97, fill: '#00ff15' },
  { label: 'Learning', percentage: 99, fill: '#00d9ff' }
]);

</script>

<style scoped>
.semi-circle {
  width: 150px;
  height: 75px;
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 300px 300px 0 0;
  overflow: hidden;
  color: var(--fill);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;

  &:before,
  &:after {
    content: '';
    width: 150px;
    height: 75px;
    border: 17px solid var(--fill);
    border-top: none;
    position: absolute;
    transform-origin: 50% 0% 0;
    border-radius: 0 0 300px 300px;
    box-sizing: border-box;
    left: 0;
    top: 100%;
  }

  &:before {
    border-color: rgba(0, 0, 0, 0.315);
    transform: rotate(180deg);
  }

  &:after {
    z-index: 3;
    animation: 4s fillGraphAnimation ease-in;
    transform: rotate(calc(1deg * (var(--percentage) * 1.8)));
  }

  &:hover {
    &:after {
      opacity: .8;    
    }
  }
}

@keyframes fillAnimation{
  0%{transform : rotate(-45deg);}
  50%{transform: rotate(135deg);}
}

@keyframes fillGraphAnimation{
  0%{transform: rotate(0deg);}
  50%{transform: rotate(180deg);}
}


</style>
