<template>
  <div>
    <topo-component />
    <conteudo-component />
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
};
</script>

<style></style>
