<template>
    <div class="desktop-grid container">
        <platform-card
          title="Newton"
          :description="$t('message.grid.description.newton')"
          spread="2%"
          fees="none"
          referral="$20cad">
        </platform-card>
        <platform-card
          title="Shakepay"
          :description="$t('message.grid.description.shakepay')"
          spread="4%"
          fees="none"
          referral="$30cad each">
        </platform-card>
        <platform-card
          title="Wealthsimple"
          :description="$t('message.grid.description.wealthsimple')"
          spread="2%"
          fees="none"
          referral="$20cad">
        </platform-card>
    </div>
</template>

<script>
import PlatformCard from './PlatformCard.vue';

export default {
  components: { PlatformCard },
};
</script>

<style scoped lang="scss">
.desktop-grid {
  display: flex;
}
@media only screen and (min-width: 576px) {
  .desktop-grid {
    flex-direction: column;
    padding-top: 40px;
  }
}
@media only screen and (min-width: 996px) {
  .desktop-grid {
    flex-direction: row;
  }
}
</style>
