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
            {{ vagaFavoritada.titulo }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagasFavoritasOffcanvas",
  data: () => ({
    vagasFavoritadas: [],
  }),
  methods: {
    updateLocalStorage(vaga) {
      const vagas = JSON.parse(localStorage.getItem("vagas"));

      let indexStorage = vagas
        .map((vagaStorage) => vagaStorage.titulo)
        .indexOf(vaga.titulo);

      let vagaStorage = {};
      vagaStorage = {
        ...vagas[indexStorage],
        favoritada: vaga.favoritada,
      };

      vagas[indexStorage] = vagaStorage;
      localStorage.setItem("vagas", JSON.stringify(vagas));
    },
    getIndexArray(vaga) {
      let indexArray = this.vagasFavoritadas
        .map((vagaFavoritada) => vagaFavoritada.titulo)
        .indexOf(vaga.titulo);
      return indexArray;
    },
  },
  mounted() {
    this.emitter.on("favoritarVaga", (vaga) => {
      this.updateLocalStorage(vaga);
      if (this.getIndexArray(vaga) === -1) this.vagasFavoritadas.push(vaga);
    });

    this.emitter.on("desfavoritarVaga", (vaga) => {
      this.updateLocalStorage(vaga);
      if (this.getIndexArray(vaga) !== -1)
        this.vagasFavoritadas.splice(this.getIndexArray(vaga), 1);
    });
  },
};
</script>

<style scoped>
.div-vagas-favoritas {
  position: absolute;
  z-index: 1;
  top: 9px;
  right: 75px;
}

@media (min-width: 576px) {
  .div-vagas-favoritas {
    right: 25vw;
  }
}

@media (min-width: 992px) {
  .div-vagas-favoritas {
    right: 3vw;
  }
}
</style>
