<template>
    <div class="container">
        <h2>Newton</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
            tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
            nulla. </p>
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
