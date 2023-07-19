<template>
  <div>
    <vagas-favoritas-component />
    <topo-component @navegar="componente = $event" />
    <alerta-component v-if="exibirAlerta" :feedback="alerta.feedback">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>
      <p>{{ alerta.descricao }}</p>
    </alerta-component>
    <conteudo-component :conteudo="componente" />
  </div>
</template>

<script>
import AlertaComponent from "@/components/comuns/AlertaComponent.vue";
import ConteudoComponent from "@/components/layouts/ConteudoComponent.vue";
import TopoComponent from "@/components/layouts/TopoComponent.vue";
import VagasFavoritasComponent from "@/components/comuns/VagasFavoritasComponent.vue";

export default {
  name: "App",
  components: {
    AlertaComponent,
    ConteudoComponent,
    TopoComponent,
    VagasFavoritasComponent,
  },
  data: () => ({
    componente: "HomeComponent",
    exibirAlerta: false,
    alerta: { titulo: "", descricao: "", feedback: "" },
  }),
  mounted() {
    this.emitter.on("alerta", (a) => {
      this.alerta = a;
      this.exibirAlerta = true;
      setTimeout(() => (this.exibirAlerta = false), 4000);
    });
  },
};
</script>

<style></style>
