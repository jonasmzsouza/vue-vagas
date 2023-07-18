<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente a sua vaga para milhares de profissionais e de graça</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <labal class="form-label">Titulo da vaga</labal>
        <input type="text" class="form-control" />
        <div class="form-text">Por exemplo: Programador JavaScripte VueJS.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <labal class="form-label">Titulo da vaga</labal>
        <textarea type="text" class="form-control" rows="5"></textarea>
        <div class="form-text">Informe os detalhes da vaga.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <labal class="form-label">Salário</labal>
        <input type="number" class="form-control" />
        <div class="form-text">Informe o salário.</div>
      </div>

      <div class="col">
        <labal class="form-label">Modalidade</labal>
        <select name="modalidade" id="modalidade" class="form-select">
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">Informe onde as atividade serão realizadas.</div>
      </div>

      <div class="col">
        <labal class="form-label">Tipo</labal>
        <select name="tipo" id="tipo" class="form-select">
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o tipo de contratação.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <buttton:button class="btn btn-primary">Cadastrar</buttton:button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicarVagaComponent",
};
</script>
