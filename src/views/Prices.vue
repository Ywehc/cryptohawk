<template>
    <div class="sidebar">
      <div v-if="loading" class="api-loading">
        <p>Updating prices...</p>
      </div>
      <div v-else class="api-loaded">
        <p class="text-center p-3 heading">{{ $t('message.prices') }} $CAD</p>
      <table class="table table-striped">
        <tbody>
          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[0]) || {}).logo_url"
            :name="(currencies.data && currencies.data[0] || {}).name"
            :price="Math.round((currencies.data && currencies.data[0] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[1]) || {}).logo_url"
            :name="(currencies.data && currencies.data[1] || {}).name"
            :price="Math.round((currencies.data && currencies.data[1] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[2]) || {}).logo_url"
            :name="(currencies.data && currencies.data[2] || {}).name"
            :price="Math.round((currencies.data && currencies.data[2] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[3]) || {}).logo_url"
            :name="(currencies.data && currencies.data[3] || {}).name"
            :price="Math.round((currencies.data && currencies.data[3] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[4]) || {}).logo_url"
            :name="(currencies.data && currencies.data[4] || {}).name"
            :price="Math.round((currencies.data && currencies.data[4] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[5]) || {}).logo_url"
            :name="(currencies.data && currencies.data[5] || {}).name"
            :price="Math.round((currencies.data && currencies.data[5] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[6]) || {}).logo_url"
            :name="(currencies.data && currencies.data[6] || {}).name"
            :price="Math.round((currencies.data && currencies.data[6] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[7]) || {}).logo_url"
            :name="(currencies.data && currencies.data[7] || {}).name"
            :price="Math.round((currencies.data && currencies.data[7] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[8]) || {}).logo_url"
            :name="(currencies.data && currencies.data[8] || {}).name"
            :price="Math.round((currencies.data && currencies.data[8] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[9]) || {}).logo_url"
            :name="(currencies.data && currencies.data[9] || {}).name"
            :price="Math.round((currencies.data && currencies.data[9] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[10]) || {}).logo_url"
            :name="(currencies.data && currencies.data[10] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[10] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[11]) || {}).logo_url"
            :name="(currencies.data && currencies.data[11] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[11] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[12]) || {}).logo_url"
            :name="(currencies.data && currencies.data[12] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[12] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[13]) || {}).logo_url"
            :name="(currencies.data && currencies.data[13] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[13] || {}).price * 100) / 100"
          />
        </tbody>
      </table>
      <p class="nomics text-center">
        <a href="https://nomics.com">{{ $t('message.nomics') }}</a>
      </p>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import PricesRow from '../components/PricesRow.vue';

export default {
  components: { PricesRow },
  data() {
    return {
      currencies: [],
      // change apiDataReturned to false to test loader
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.VUE_APP_NOMICS}&ids=BTC,ETH,XRP,ADA,USDT,BNB,DOT,LTC,LINK,USDC,XLM,BCH,UNI,DOGE&interval=1d,30d&convert=CAD&per-page=100&page=1`)
      // eslint-disable-next-line no-return-assign
      .then((response) => this.currencies = response)
      .catch((error) => { console.log(error.response); })
      // eslint-disable-next-line no-return-assign
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped lang="scss">
.sidebar {
    background-color: $light;
}
.heading {
  font-weight: bold;
  color: $darkest;
}
.table {
  font-size: $small-text-size;
  font-weight: bold;
}
.nomics {
  font-size: 12px;
  font-weight: bold;
  a {
    text-decoration: none;
    color: $dark;
  }
}
.api-loading p {
  margin-top: 14em;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}
@media only screen and (min-width: 992px) {
  .sidebar {
    max-width: 250px;
  }
}
</style>
