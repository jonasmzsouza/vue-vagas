<template>
  <div>
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>
import HomePage from "@/views/HomePage.vue";
import PublicarVagaPage from "@/views/PublicarVagaPage.vue";

export default {
  name: "ConteudoLayout",
  props: {
    conteudo: {
      type: String,
      required: true,
    },
  },
  components: {
    HomePage,
    PublicarVagaPage,
  },
};
</script>

<style scoped></style>
