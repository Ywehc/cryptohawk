<template>
    <div class="container">
        <h2>{{ $t("message.grid.newton.name")}}</h2>
        <p>{{ $t("message.grid.newton.description")}}</p>
        <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Coins</th>
                <th scope="col">Spreads</th>
                <th scope="col">Fees</th>
                <th scope="col">Referrals</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <!-- <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'MobileCard',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    background: $lightest;
    color: $darkest;
    width: 94%;
    border: 5px solid $light;
    border-radius: 5%;
}

</style>
