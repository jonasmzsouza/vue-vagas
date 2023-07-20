<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <publicar-vaga-form></publicar-vaga-form>
      </div>
    </div>
  </div>
</template>

<script>
import PublicarVagaForm from "@/components/PublicarVagaForm.vue";
export default {
  name: "PublicarVagaPage",
  components: {
    PublicarVagaForm,
  },
};
</script>
