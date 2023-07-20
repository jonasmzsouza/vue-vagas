<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga-form></pesquisar-vaga-form>
      </div>
    </div>

    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga-card v-bind="vaga"></vaga-card>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col my-2">
        <indicador-card
          titulo="Vagas abertas"
          indicador="20"
          bg="bg-dark"
          color="text-white"
        ></indicador-card>
      </div>

      <div class="col my-2">
        <indicador-card
          titulo="Profissionais cadastrados"
          indicador="50"
          bg="bg-dark"
          color="text-white"
        ></indicador-card>
      </div>

      <div class="col my-2">
        <indicador-card
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-light"
          color="text-dark"
        ></indicador-card>
      </div>
    </div>
  </div>
</template>

<script>
import IndicadorCard from "@/components/IndicadorCard.vue";
import PesquisarVagaForm from "@/components/PesquisarVagaForm.vue";
import VagaCard from "@/components/VagaCard.vue";

export default {
  name: "HomePage",
  components: {
    IndicadorCard,
    PesquisarVagaForm,
    VagaCard,
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
  mounted() {
    this.emitter.on("filtrarVagas", (vaga) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"));
      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      );
    });
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },
};
</script>

<style scoped></style>
