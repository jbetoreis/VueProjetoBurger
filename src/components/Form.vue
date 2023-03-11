<template>
  <div class="container mt-5">
    <div
      class="col-12 offset-0 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3"
    >
      <Message :msg="msg" v-show="msg"/>
      <form id="burger_form" @submit="createBurguer">
        <div class="mb-3">
          <label for="nome" class="form-label">Nome: </label>
          <input
            type="text"
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
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="tipo_carne" class="form-label">Carne</label>
          <select class="form-select" id="tipo_carne" v-model="tipo_carne">
            <option value="" selected>Selecione um Tipo</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Adicionais</label>
          <div class="adicionais">
            <div v-for="opcional in opcionaisdata" :key="opcional.id" class="form-check">
              <input class="form-check-input" type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo" />
              <span>{{ opcional.tipo }}</span>
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
import Message from './Message.vue';

export default {
  name: "Form",
  data() {
    return {
      paes: null,
      carnes: null,
      opcionaisdata: null,
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      msg: null,
    };
  },
  methods: {
    async getIngredientes(){
      const req = await fetch('http://localhost:3000/ingredientes');
      const data = await req.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
    },
    async createBurguer(e){
      e.preventDefault()
      
      const data = {
        nome: this.nome,
        carne: this.tipo_carne,
        pao: this.tipo_pao,
        opcionais: Array.from(this.opcionais),
        status: "Solicitado",
      }

      const dataJson = JSON.stringify(data)

      const req = await fetch('http://localhost:3000/burgers', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: dataJson,
      });

      const res = await req.json();
      
      this.nome = "";
      this.tipo_carne = "";
      this.tipo_pao = "";
      this.opcionais = [];

      this.msg = 'Pedido realizado com sucesso!'

      setTimeout(() => this.msg = "", 3000);
    }
  },
  mounted(){
    this.getIngredientes();
  },
  components: {
    Message,
  }
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

.adicionais span {
  font-weight: 700;
}

.btn_submit {
  background-color: #222;
  color: rgb(252, 188, 68);
  border: 2px solid rgb(43, 43, 43);
  border-radius: 10px;
  padding: 0.5rem 0;
  font-weight: 700;
  transition: 0.5s;
}

.btn_submit:hover {
  background-color: transparent;
  color: black;
}
</style>