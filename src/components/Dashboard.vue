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
        <tr>
          <td>1</td>
          <td>José</td>
          <td>Italiano Branco</td>
          <td>Veggie burger</td>
          <td>
            <ul class="list-group">
              <li class="list-group-item p-1">Salame</li>
              <li class="list-group-item p-1">Bacon</li>
            </ul>
          </td>
          <td class="acoes">
            <div>
              <select class="form-select" name="status">
                <option selected>Alterar Status do Pedido</option>
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