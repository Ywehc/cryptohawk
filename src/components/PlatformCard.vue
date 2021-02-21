<template>
    <div class="container">
        <div class="information">
            <h2 class="title">{{ title }}</h2>
        <p>{{ description }}</p>
        <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">{{ $t('message.grid.coins') }}</th>
                <th scope="col">
                    <span>
                        <img src="/../assets/bitcoin.svg" alt="bitcoin" class="icon">
                    </span>Bitcoin,
                     <span>
                        <img src="/../assets/ethereum.png" alt="bitcoin" class="icon">
                    </span>Etherium</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">{{ $t('message.grid.spread') }}</th>
                <td>{{ spread }}</td>
                </tr>
                <tr>
                <th scope="row">{{ $t('message.grid.fees') }}</th>
                <td>{{ fees }}</td>
                </tr>
                <tr>
                <th scope="row">{{ $t('message.grid.referrals') }}</th>
                <td colspan="2">{{ referral }}</td>
                </tr>
            </tbody>
        </table>
        </div>
        <p class="cta">Go to
            <button type="button" class="btn btn-primary btn-sm">{{ title }}</button>
        </p>
    </div>
</template>

<script>
export default {
  name: 'PlatformCard',
  props: ['title', 'description', 'spread', 'fees', 'referral'],
};
</script>

<style scoped lang="scss">
.container {
    background: $lightest;
    color: $darkest;
    width: 94%;
    border: 5px solid $light;
    border-radius: 5%;
    margin-bottom: 20px;
    padding: 10px;
}
.icon{
    width: 18px;
    margin: 5px;
}
.title {
    font-size: 22px;
}
.cta {
    text-align:center;
    font-weight: bold;
    button {
        background: $attention;
        color: $darkest;
        border-color: $darkest;
        font-weight: bold;
    }
}
@media only screen and (min-width: 576px) {
  .container {
      border-radius: 1%;
  }
}
@media only screen and (min-width: 996px) {
  .container {
      max-width: 29%;
  }
  .information {
      height: 88%;
  }
  .cta {
      height: 12%;
  }
}
</style>
