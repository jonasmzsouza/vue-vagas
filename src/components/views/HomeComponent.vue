<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga-component />
      </div>
    </div>

    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga-component v-bind="vaga" />
      </div>
    </div>

    <div class="row mt-5">
      <div class="col my-2">
        <indicador-component
          titulo="Vagas abertas"
          indicador="20"
          bg="bg-dark"
          color="text-white"
        />
      </div>

      <div class="col my-2">
        <indicador-component
          titulo="Profissionais cadastrados"
          indicador="50"
          bg="bg-dark"
          color="text-white"
        />
      </div>

      <div class="col my-2">
        <indicador-component
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-light"
          color="text-dark"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IndicadorComponent from "@/components/comuns/IndicadorComponent.vue";
import PesquisarVagaComponent from "@/components/comuns/PesquisarVagaComponent.vue";
import VagaComponent from "@/components/comuns/VagaComponent.vue";

export default {
  name: "HomeComponent",
  components: {
    IndicadorComponent,
    PesquisarVagaComponent,
    VagaComponent,
  },
  data: () => ({
    usuariosOnline: 0,
    vagas: [],
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000);
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },
};
</script>

<style scoped></style>
