<template>
  <div class="py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente a sua vaga para milhares de profissionais e de graça</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Titulo da vaga</label>
        <input type="text" class="form-control" v-model="titulo" />
        <div class="form-text">Por exemplo: Programador JavaScripte VueJS.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Titulo da vaga</label>
        <textarea
          type="text"
          class="form-control"
          rows="5"
          v-model="descricao"
        ></textarea>
        <div class="form-text">Informe os detalhes da vaga.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Salário</label>
        <input type="number" class="form-control" v-model="salario" />
        <div class="form-text">Informe o salário.</div>
      </div>

      <div class="col">
        <label class="form-label">Modalidade</label>
        <select
          name="modalidade"
          id="modalidade"
          class="form-select"
          v-model="modalidade"
        >
          <option value="" disabled>--Selecione</option>
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">Informe onde as atividade serão realizadas.</div>
      </div>

      <div class="col">
        <label class="form-label">Tipo</label>
        <select name="tipo" id="tipo" class="form-select" v-model="tipo">
          <option value="" disabled>--Selecione</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o tipo de contratação.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button type="button" class="btn btn-primary" @click="salvarVaga()">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicarVagaForm",
  data: () => ({
    titulo: "",
    descricao: "",
    salario: "",
    modalidade: "",
    tipo: "",
    favoritada: false,
  }),
  methods: {
    salvarVaga() {
      let data = new Date(Date.now());
      let vagas = JSON.parse(localStorage.getItem("vagas"));

      if (!vagas) vagas = [];

      if (this.validaFormulario()) {
        vagas.push({
          titulo: this.titulo,
          descricao: this.descricao,
          salario: this.salario,
          modalidade: this.modalidade,
          tipo: this.tipo,
          publicacao: data.toISOString(),
          favoritada: this.favoritada
        });

        localStorage.setItem("vagas", JSON.stringify(vagas));
        this.emitter.emit("alerta", {
          feedback: "sucesso",
          titulo: `A vaga ${this.titulo} foi cadastrada com sucesso!`,
          descricao:
            "Parabéns, a vaga foi cadastrada e poderá ser consultada por milhares de profissionais em nossa plataforma",
        });

        this.resetaFormulario();
      } else {
        this.emitter.emit("alerta", {
          feedback: "erro",
          titulo: "Oops... Não foi possível realizar o cadastro!",
          descricao:
            "Parace que você esqueceu de preencher alguma informação. Faça o ajuste e tente novamente. Obrigado!",
        });
      }
    },
    validaFormulario() {
      let valido = true;

      if (this.titulo === "") valido = false;
      if (this.descricao === "") valido = false;
      if (this.salario === "") valido = false;
      if (this.modalidade === "") valido = false;
      if (this.tipo === "") valido = false;

      return valido;
    },
    resetaFormulario() {
      this.titulo = "";
      this.descricao = "";
      this.salario = "";
      this.modalidade = "";
      this.tipo = "";
      this.favoritada = false;
    },
  },
};
</script>
