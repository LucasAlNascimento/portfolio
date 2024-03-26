
<template>
    <v-container>
        <Header />
    </v-container>

    <v-container class="d-flex flex-column flex-md-row ga-16">
        <v-container class="d-flex flex-column ga-15">
            <h1 class="text-center text-teal-accent-4 text-uppercase text-h4 font-weight-black">Contato</h1>
            <div class="d-flex justify-center items-center ga-11 py-7 px-7 mx-auto rounded-xl mt-xl-auto"
                style="background-color: #2b2b2b59" ref="scrollTarget">
                <div class="d-flex flex-wrap justify-center items-center ga-12">
                    <a href="https://wa.me/5511949553960" target="_blank">
                        <v-img :width="50" :max-width="50" :contain="true" src="/src/assets/whatsapp.png"
                            alt="Logo Whatsapp" />
                    </a>
                    <a href="https://www.linkedin.com/in/lucasalnascimento/" target="_blank">
                        <v-img :width="50" :max-width="50" :contain="true" src="/src/assets/linkedin.png"
                            alt="Logo LinkedIn" />
                    </a>
                    <a href="https://github.com/LucasAlNascimento" target="_blank">
                        <v-img :width="50" :max-width="50" :contain="true" src="/src/assets/github.png" alt="Logo Github" />
                    </a>
                    <a href="https://www.instagram.com/lucasalves_34/" target="_blank">
                        <v-img :width="50" :max-width="50" :contain="true" src="/src/assets/instagram.png"
                            alt="Logo Instagram" />
                    </a>

                </div>
            </div>
        </v-container>


    </v-container>


    <v-container class="d-flex flex-row justify-center items-center ga-16">

    </v-container>
</template>
  
<script setup lang="ts">

</script>