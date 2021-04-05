<template>
    <div class="sidebar">
      <div v-if="loading" class="api-loading">
        <p>{{ $t('message.ui.loading_prices') }}</p>
      </div>
      <div v-else class="api-loaded">
        <PageHeader
          class="d-xs-flex d-sm-none"
          :title="this.$t('message.prices.title')"
          :description="this.$t('message.prices.descriptionMobile')"
        />
        <h2 class="d-none d-sm-block text-center mt-2 heading">{{ $t('message.prices.title') }}</h2>
        <p class="d-none d-sm-block text-center font-weight-bold description">
          {{ $t('message.prices.descriptionDesktop') }}
          <img src="../../public/assets/flag-canada.png" class="flag" alt="Canada flag">
        </p>
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

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[14]) || {}).logo_url"
            :name="(currencies.data && currencies.data[14] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[14] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[15]) || {}).logo_url"
            :name="(currencies.data && currencies.data[15] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[15] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[16]) || {}).logo_url"
            :name="(currencies.data && currencies.data[16] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[16] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[17]) || {}).logo_url"
            :name="(currencies.data && currencies.data[17] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[17] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[18]) || {}).logo_url"
            :name="(currencies.data && currencies.data[18] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[18] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[19]) || {}).logo_url"
            :name="(currencies.data && currencies.data[19] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[19] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[20]) || {}).logo_url"
            :name="(currencies.data && currencies.data[20] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[20] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[21]) || {}).logo_url"
            :name="(currencies.data && currencies.data[21] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[21] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[22]) || {}).logo_url"
            :name="(currencies.data && currencies.data[22] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[22] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[23]) || {}).logo_url"
            :name="(currencies.data && currencies.data[23] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[23] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[24]) || {}).logo_url"
            :name="(currencies.data && currencies.data[24] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[24] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[25]) || {}).logo_url"
            :name="(currencies.data && currencies.data[25] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[25] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[26]) || {}).logo_url"
            :name="(currencies.data && currencies.data[26] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[26] || {}).price * 100) / 100"
          />

          <PricesRow
            :img_url="((this.currencies.data && this.currencies.data[27]) || {}).logo_url"
            :name="(currencies.data && currencies.data[27] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[27] || {}).price * 100) / 100"
          />
        </tbody>
      </table>
      <p class="nomics text-center mx-3">
        <a href="https://nomics.com">{{ $t('message.nomics') }}</a>
      </p>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import PricesRow from '../components/PricesRow.vue';
import PageHeader from '../components/PageHeader.vue';

export default {
  components: { PricesRow, PageHeader },
  data() {
    return {
      currencies: [],
      loading: false,
      flag: '&#127462; ',
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.VUE_APP_NOMICS}&ids=BTC,ETH,XRP,ADA,USDT,BNB,DOT,LTC,LINK,USDC,XLM,BCH,UNI,DOGE,THETA,HEX,FIL,WBTC,LUNA,ALGO,VET,CRO,TRX,FTT,ATOM,AAVE,SOL,KSM&interval=1d,30d&convert=CAD&per-page=100&page=1`)
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
  padding: 0;
}
.heading {
  font-weight: bold;
  color: $darkest;
  font-size: 18px;
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
  margin-top: 6em;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}
.flag {
  width: 20px;
}
@media only screen and (min-width: 992px) {
  .sidebar {
    max-width: 270px;
  }
  .api-loading p {
    margin-top: 14em;
  }
  .api-loaded {
    border: 2px solid $light;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .description {
    font-size: 12px;
  }
}
</style>
