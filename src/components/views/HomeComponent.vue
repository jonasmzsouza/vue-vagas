<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga-component></pesquisar-vaga-component>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col col-md-4">
        <indicador-component
          titulo="Vagas abertas"
          indicador="20"
          bg="bg-dark"
          color="text-white"
        ></indicador-component>
      </div>

      <div class="col col-md-4">
        <indicador-component
          titulo="Profissionais cadastrados"
          indicador="50"
          bg="bg-dark"
          color="text-white"
        ></indicador-component>
      </div>

      <div class="col col-md-4">
        <indicador-component
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-light"
          color="text-dark"
        ></indicador-component>
      </div>
    </div>
  </div>
</template>

<script>
import IndicadorComponent from "@/components/comuns/IndicadorComponent.vue";
import PesquisarVagaComponent from "@/components/comuns/PesquisarVagaComponent.vue";
export default {
  name: "HomeComponent",
  components: {
    IndicadorComponent,
    PesquisarVagaComponent,
  },
  data: () => ({
    usuariosOnline: 0,
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000);
  },
};
</script>

<style scoped></style>
