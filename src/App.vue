<template>
  <div>
    <vagas-favoritas-component />
    <topo-component @navegar="componente = $event" />
    <conteudo-component :conteudo="componente" />
  </div>
</template>

<script>
import TopoComponent from "@/components/layouts/TopoComponent.vue";
import ConteudoComponent from "@/components/layouts/ConteudoComponent.vue";
import VagasFavoritasComponent from '@/components/comuns/VagasFavoritasComponent.vue';

export default {
  name: "App",
  components: {
    TopoComponent,
    ConteudoComponent,
    VagasFavoritasComponent,
  },
  data: () => ({
    componente: "HomeComponent",
  }),
};
</script>

<style></style>
