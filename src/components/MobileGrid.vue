<template>
    <div class="mobile-grid">
        <mobile-card
          title="Newton"
          :description="$t('message.grid.description.newton')"
          spread="2%"
          fees="none"
          referral="$20cad">
        </mobile-card>
        <mobile-card
          title="Shakepay"
          :description="$t('message.grid.description.shakepay')"
          spread="4%"
          fees="none"
          referral="$30cad each">
        </mobile-card>
        <mobile-card
          title="Wealthsimple"
          :description="$t('message.grid.description.wealthsimple')"
          spread="2%"
          fees="none"
          referral="$20cad">
        </mobile-card>
    </div>
</template>

<script>
import MobileCard from './MobileCard.vue';

export default {
  components: { MobileCard },
  name: 'MobileGrid',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mobile-grid {
  background: $dark;
  padding: 10px;
  padding-top: 20px;
}

</style>
