<template>
  <div>
    <div class="div-vagas-favoritas">
      <button
        class="btn btn-success"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Vagas Favoritas
      </button>
    </div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          Vagas Favoritadas
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(vagaFavoritada, index) in vagasFavoritadas"
            :key="index"
          >
            {{ vagaFavoritada }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagasFavoritasComponent",
  data: () => ({
    vagasFavoritadas: [],
  }),
  mounted() {
    this.emitter.on("favoritarVaga", (titulo) => {
      this.vagasFavoritadas.push(titulo);
    });

    this.emitter.on("desfavoritarVaga", (titulo) => {
      let indexArray = this.vagasFavoritadas.indexOf(titulo);
      if (indexArray !== -1) this.vagasFavoritadas.splice(indexArray, 1);
    });
  },
};
</script>

<style scoped>
.div-vagas-favoritas {
  position: absolute;
  z-index: 1;
  top: 70px;
  right: 5px;
}
</style>
