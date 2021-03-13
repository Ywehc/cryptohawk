<template>
    <div class="wrapper">
        <h4 class="tab-content-header">{{title}}</h4>
    </div>
</template>

<script>

export default {
  props: ['title', 'description', 'spread', 'fees', 'referral', 'spread_buying', 'spread_selling', 'coins', 'image_coins', 'coin_ownership'],
};
</script>

<style scoped lang="scss">

@import 'public/scss/_mobile-card.scss';

.table {
  font-size: 14px;
}
.coins-container {
  max-width: 50px;
}
.coins {
  display: flex;
}
</style>
