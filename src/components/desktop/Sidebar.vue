<template>
    <div class="sidebar">
      <p class="text-center p-3 heading">Current prices in $CAD</p>
      <table class="table table-striped">
        <tbody>
          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[0]) || {}).logo_url"
            :name="(currencies.data && currencies.data[0] || {}).name"
            :price="Math.round((currencies.data && currencies.data[0] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[1]) || {}).logo_url"
            :name="(currencies.data && currencies.data[1] || {}).name"
            :price="Math.round((currencies.data && currencies.data[1] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[2]) || {}).logo_url"
            :name="(currencies.data && currencies.data[2] || {}).name"
            :price="Math.round((currencies.data && currencies.data[2] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[3]) || {}).logo_url"
            :name="(currencies.data && currencies.data[3] || {}).name"
            :price="Math.round((currencies.data && currencies.data[3] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[4]) || {}).logo_url"
            :name="(currencies.data && currencies.data[4] || {}).name"
            :price="Math.round((currencies.data && currencies.data[4] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[5]) || {}).logo_url"
            :name="(currencies.data && currencies.data[5] || {}).name"
            :price="Math.round((currencies.data && currencies.data[5] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[6]) || {}).logo_url"
            :name="(currencies.data && currencies.data[6] || {}).name"
            :price="Math.round((currencies.data && currencies.data[6] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[7]) || {}).logo_url"
            :name="(currencies.data && currencies.data[7] || {}).name"
            :price="Math.round((currencies.data && currencies.data[7] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[8]) || {}).logo_url"
            :name="(currencies.data && currencies.data[8] || {}).name"
            :price="Math.round((currencies.data && currencies.data[8] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[9]) || {}).logo_url"
            :name="(currencies.data && currencies.data[9] || {}).name"
            :price="Math.round((currencies.data && currencies.data[9] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[10]) || {}).logo_url"
            :name="(currencies.data && currencies.data[10] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[10] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[11]) || {}).logo_url"
            :name="(currencies.data && currencies.data[11] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[11] || {}).price * 100) / 100"
          />

          <SidebarRow
            :img_url="((this.currencies.data && this.currencies.data[12]) || {}).logo_url"
            :name="(currencies.data && currencies.data[12] || {}).name"
            :price="Math.round((currencies.data &&
              currencies.data[12] || {}).price * 100) / 100"
          />

          <SidebarRow
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
</template>

<script>
import axios from 'axios';
import SidebarRow from './SidebarRow.vue';

export default {
  components: { SidebarRow },
  data() {
    return {
      currencies: [],
    };
  },
  mounted() {
    axios
      .get(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.VUE_APP_NOMICS}&ids=BTC,ETH,XRP,ADA,USDT,BNB,DOT,LTC,LINK,USDC,XLM,BCH,UNI,DOGE&interval=1d,30d&convert=CAD&per-page=100&page=1`)
      // eslint-disable-next-line no-return-assign
      .then((response) => this.currencies = response)
      .catch((error) => { console.log(error.response); });
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
  font-size: 14px;
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
</style>
