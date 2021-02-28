<template>
    <div class="sidebar">
        <table class="table table-striped">
            <tbody>
                <tr>
                <td><img src="/../assets/bitcoin.svg" alt="bitcoin" class="icon"></td>
                <td>{{ currencies.data[0].name }}</td>
                <td>{{ currencies.data[0].price }}</td>
                </tr>
                <tr>
                <td><img src="/../assets/ethereum.png" alt="ethereum" class="icon"></td>
                <td>{{ currencies.data[1].name }}</td>
                <td>{{ currencies.data[1].price }}</td>
                </tr>
                <tr>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </table>
        <p>{{ currencies }}</p>
        <!-- <p v-for="currency in currencies" :key="currency.id"> {{ currencies }} </p> -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      currencies: null,
    };
  },
  mounted() {
    axios
      .get(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.VUE_APP_NOMICS}&ids=BTC,ETH,XRP&interval=1d,30d&convert=CAD&per-page=100&page=1`)
      // eslint-disable-next-line no-return-assign
      .then((response) => this.currencies = response);
  },
};
</script>

<style scoped lang="scss">
.sidebar {
    background-color: $light;
    height: 80vh;
}
.icon {
    width: $coin_icon_width;
    height: $coin_icon_height;
    margin: $coin_icon_margin;
}
</style>
