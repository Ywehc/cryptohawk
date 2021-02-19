<template>
  <table class="table table-sm table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Platform</th>
        <th scope="col">Coins</th>
        <th scope="col">Spread</th>
        <th scope="col">Fees</th>
        <th scope="col">Referral</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Newton</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Shakepay</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Wealthsimple</td>
        <td>@twitter</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'MainGrid',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
