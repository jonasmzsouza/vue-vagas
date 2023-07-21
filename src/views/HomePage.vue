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

    <indicador-list></indicador-list>
  </div>
</template>

<script>
import IndicadorList from "@/components/IndicadorList.vue";
import PesquisarVagaForm from "@/components/PesquisarVagaForm.vue";
import VagaList from "@/components/VagaList.vue";

export default {
  name: "HomePage",
  components: {
    IndicadorList,
    PesquisarVagaForm,
    VagaList,
  },
};
</script>

<style scoped></style>
