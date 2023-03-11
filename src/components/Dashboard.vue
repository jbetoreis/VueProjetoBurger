<template>
  <div id="burgers_table">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th class="order-id">#</th>
          <th>Cliente:</th>
          <th>Pão</th>
          <th>Carne</th>
          <th>Opcionais</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pedido in burgers" :key="pedido.id">
          <td>{{ pedido.id }}</td>
          <td>{{ pedido.nome }}</td>
          <td>{{ pedido.pao }}</td>
          <td>{{ pedido.carne }}</td>
          <td>
            <ul class="list-group">
              <li class="list-group-item p-1" v-for="(opcional, key) in pedido.opcionais" :key="key">{{ opcional }}</li>
            </ul>
          </td>
          <td class="acoes">
            <div>
              <select class="form-select" name="status">
                <option selected>Alterar Status do Pedido</option>
                <option v-for="std in status" :key="std.id" :value="std.tipo" :v-model="std.id" :selected="pedido.status == std.tipo">{{ std.tipo }}</option>
              </select>
              <button type="button" class="btn btn-danger">Cancelar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Dasboad",
  data() {
    return {
      burgers: null,
      burger_id: null,
      status: [],
    };
  },
  methods: {
    async getPedidos(){
      const req = await fetch('http://localhost:3000/burgers');

      const data = await req.json();

      this.burgers = data;
      console.log(this.burgers);
    },
    async getStatus(){
      const req = await fetch('http://localhost:3000/status');

      const data = await req.json();

      this.status = data;
    },
  },
  mounted () {
    this.getPedidos();
    this.getStatus();
  },
};
</script>

<style scoped>
#burgers_table table tbody .acoes div {
  display: flex;
  flex-direction: row;
  align-items: start;
  column-gap: 1rem;
}

#burgers_table table tbody .acoes {
  width: 30%;
}
</style>