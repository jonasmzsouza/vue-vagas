<template>
  <div :class="estiloAlerta" role="alert">
    <slot name="titulo">
      <h5>Titulo da mensagem feedback</h5>
    </slot>
    <hr />
    <slot><p>Mensagem de feedback</p></slot>
  </div>
</template>

<script>
export default {
  name: "AlertaComponent",
  props: {
    feedback: String,
  },
  computed: {
    estiloAlerta() {
      switch (this.feedback) {
        case "sucesso":
          return "alert alert-success";
        case "erro":
          return "alert alert-danger";
        default:
          return "alert alert-success";
      }
    },
  },
};
</script>
