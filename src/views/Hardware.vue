<template>
    <main class="container p-4">
        <section class="row">
            <div class="col-12">
                <p>{{ $t('message.hardware.intro1') }}</p>
                <p>{{ $t('message.hardware.intro2') }}</p>
                <p>{{ $t('message.hardware.intro3') }}</p>
                <p>{{ $t('message.hardware.intro4') }}</p>
                <p>{{ $t('message.hardware.intro5') }}</p>
            </div>
            <hardware-card
                title="Trezor Model T"
                url="https://shop.trezor.io/product/trezor-model-t?offer_id=15&aff_id=7069"
                img_src="trezor_lifestyle.jpg"
                alt="trezor lifestyle"
                :description="$t('message.hardware.trezor')"/>
            <hardware-card
                title="Ledger Nano X"
                url="https://shop.ledger.com/pages/ledger-nano-x?r=91c03745c56c"
                img_src="nano_x.png"
                alt="ledger nano x"
                :description="$t('message.hardware.ledger')"/>
        </section>
    </main>
</template>

<script>
import HardwareCard from '../components/HardwareCard.vue';

export default {
  components: { HardwareCard },
};
</script>

<style lang="scss" scoped>
.container {
    background: $light;
    display: block;
}
h2 {
    font-size: $main-heading-size;
    a {
        color: $darkest;
    }
}
p {
    font-size: $main-text-size;
}
@media only screen and (min-width: 992px) {
  .container {
      width: 60%;
  }
}
</style>
