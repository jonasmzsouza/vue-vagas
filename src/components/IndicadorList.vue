<template>
  <div>
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

export default {
  name: "IndicatorList",
  components: {
    IndicadorCard,
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
