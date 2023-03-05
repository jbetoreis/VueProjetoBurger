<template>
  <div class="container mt-5">
    <div
      class="col-12 offset-0 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3"
    >
      <form id="burger_form">
        <div class="mb-3">
          <label for="nome" class="form-label">Nome: </label>
          <input
            type="email"
            class="form-control"
            id="nome"
            placeholder="Digite o seu nome"
            v-model="nome"
          />
        </div>
        <div class="mb-3">
          <label for="tipo_pao" class="form-label">Pão</label>
          <select class="form-select" id="tipo_pao" v-model="tipo_pao">
            <option value="" selected>Selecione um Tipo</option>
            <option value="1">One</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="tipo_carne" class="form-label">Carne</label>
          <select class="form-select" id="tipo_carne" v-model="tipo_carne">
            <option value="" selected>Selecione um Tipo</option>
            <option value="1">One</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Adicionais</label>
          <div class="adicionais">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" />
              <span>Salame</span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" />
              <span>Salame</span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" />
              <span>Salame</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <input
            type="submit"
            class="btn_submit col-12 offset-0 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3"
            value="Solicitar"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style scoped>
label {
  border-left: 4px solid orange;
  padding-left: 1rem;
  font-weight: 700;
}

.adicionais {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  flex-wrap: wrap;
}

.adicionais span{
    font-weight: 700;
}

.btn_submit{
    background-color: #222;
    color: rgb(252, 188, 68);
    border: 2px solid rgb(43, 43, 43);
    border-radius: 10px;
    padding: 0.5rem 0;
    font-weight: 700;
    transition: 0.5s;
}

.btn_submit:hover{
    background-color: transparent;
    color: black;
}
</style>