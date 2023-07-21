<template>
  <div>
    <!-- <slot name="dadosVagas" :vagas="vagas"></slot> -->
    <slot :vagas="vagas">
      <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
        <div class="col">
          <vaga-card v-bind="vaga"></vaga-card>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import VagaCard from "@/components/VagaCard.vue";

export default {
  name: "VagaList",
  data: () => ({
    vagas: [],
  }),
  components: {
    VagaCard,
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
