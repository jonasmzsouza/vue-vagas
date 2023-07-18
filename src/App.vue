<template>
  <div>
    <topo-component @navegar="componente = $event" />
    <conteudo-component :conteudo="componente" />
  </div>
</template>

<script>
import TopoComponent from "@/components/layouts/TopoComponent.vue";
import ConteudoComponent from "@/components/layouts/ConteudoComponent.vue";

export default {
  name: "App",
  components: {
    TopoComponent,
    ConteudoComponent,
  },
  data: () => ({
    componente: "HomeComponent",
  }),
};
</script>

<style></style>
