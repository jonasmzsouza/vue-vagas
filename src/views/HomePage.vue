<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga-form></pesquisar-vaga-form>
      </div>
    </div>

    <!-- <span>Multiple slots</span>
    <vaga-list> 
      <template v-slot:dadosVagas="slotProps">
        {{ slotProps.vagas }}
        <hr />
      </template>
      <template v-slot:default="slotProps">
        {{ slotProps.vagas }}
        <hr />
      </template>
    </vaga-list> -->

    <vaga-list></vaga-list>

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
import VagaList from "@/components/VagaList.vue";

export default {
  name: "HomePage",
  components: {
    IndicadorCard,
    PesquisarVagaForm,
    VagaList,
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
};
</script>

<style scoped></style>
