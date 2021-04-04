<template>
    <main class="lg-px-4">
        <PageHeader
            :title="this.$t('message.hardware.title')"
            :description="this.$t('message.hardware.description')"
        />
        <section class="p-4">
            <div class="row">
                <div class="col-12">
                <p>{{ $t('message.hardware.intro1') }}</p>
                <p>{{ $t('message.hardware.intro2') }}</p>
                <p>{{ $t('message.hardware.intro3') }}</p>
                <p>{{ $t('message.hardware.intro4') }}</p>
                <p>{{ $t('message.hardware.intro5') }}</p>
            </div>
            <hardware-card
                class="col-lg-6"
                title="Trezor Model T"
                url="https://shop.trezor.io/product/trezor-model-t?offer_id=15&aff_id=7069"
                img_src="trezor_lifestyle.png"
                alt="trezor lifestyle"
                :description="$t('message.hardware.trezor')"/>
            <hardware-card
                class="col-lg-6"
                title="Ledger Nano X"
                url="https://shop.ledger.com/pages/ledger-nano-x?r=91c03745c56c"
                img_src="nano_x.jpg"
                alt="ledger nano x"
                :description="$t('message.hardware.ledger')"/>
            </div>
        </section>
    </main>
</template>

<script>
import HardwareCard from '../components/HardwareCard.vue';
import PageHeader from '../components/PageHeader.vue';

export default {
  components: { HardwareCard, PageHeader },
  metaInfo: {
    title: 'Compare cold storage devices from brands like Ledger and Trezor to optimally protect your cryptocurrency hardware wallet',
  },
};
</script>

<style lang="scss" scoped>
.container {
    display: block;
}
section {
    background: $light;
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

</style>
