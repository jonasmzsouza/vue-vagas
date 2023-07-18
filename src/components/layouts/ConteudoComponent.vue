<template>
  <div>
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
  props: {
    conteudo: {
      type: String,
      required: true,
    },
  },
  components: {
    HomeComponent,
    PublicarVagaComponent,
  },
};
</script>

<style scoped></style>
