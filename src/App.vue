<template>
  <div>
    <vagas-favoritas-offcanvas></vagas-favoritas-offcanvas>
    <app-header @navegar="componente = $event"></app-header>
    <alerta-text v-if="exibirAlerta" :feedback="alerta.feedback">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>
      <p>{{ alerta.descricao }}</p>
    </alerta-text>
    <conteudo-layout :conteudo="componente"></conteudo-layout>
  </div>
</template>

<script>
import AlertaText from "@/components/AlertaText.vue";
import AppHeader from "@/components/AppHeader.vue";
import ConteudoLayout from "@/layouts/ConteudoLayout.vue";
import VagasFavoritasOffcanvas from "@/components/VagasFavoritasOffcanvas.vue";

export default {
  name: "App",
  components: {
    AlertaText,
    AppHeader,
    ConteudoLayout,
    VagasFavoritasOffcanvas,
  },
  data: () => ({
    componente: "HomePage",
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
