<template>
  <div>
    <button @click="conteudo = 'home-component'">Home</button>
    <button @click="conteudo = 'publicar-vaga-component'">Publicar Vaga</button>
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>
import HomeComponent from "@/components/views/HomeComponent.vue";
import PublicarVagaComponent from "@/components/views/PublicarVagaComponent.vue";

export default {
  name: "ConteudoComponent",
  components: {
    HomeComponent,
    PublicarVagaComponent,
  },
  data: () => ({
    conteudo: "home-component",
  }),
};
</script>

<style scoped></style>
