<template>
    <main class="container p-4">
        <section>
            <p>{{ $t('message.hardware.intro1') }}</p>
            <p>{{ $t('message.hardware.intro2') }}</p>
            <p>{{ $t('message.hardware.intro3') }}</p>
            <p>{{ $t('message.hardware.intro4') }}</p>
            <p>{{ $t('message.hardware.intro5') }}</p>
        </section>
        <section>
            <h2><a href="https://shop.trezor.io/product/trezor-model-t?offer_id=15&aff_id=7069">Trezor Model T</a></h2>
            <div class="img-container">
                <p>{{ $t('message.hardware.trezor') }}</p>
                <a href="https://shop.trezor.io/product/trezor-model-t?offer_id=15&aff_id=7069">
                    <img
                    src="../../public/assets/trezor_lifestyle.jpg"
                    alt="trezor lifestyle"
                    class="img-trezor mx-2">
                </a>
            </div>
        </section>
        <section>
            <h2><a href="https://shop.ledger.com/pages/ledger-nano-x?r=91c03745c56c">Ledger Nano X</a></h2>
            <div class="img-container">
                <p>{{ $t('message.hardware.ledger') }}</p>
                <a href="https://shop.ledger.com/pages/ledger-nano-x?r=91c03745c56c">
                    <img
                    src="../../public/assets/nano_x.png"
                    alt="ledger nano x"
                    class="img-nano mx-2">
                </a>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.container {
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
.img-container {
    display: flex;
    .img-trezor {
        height: 80px;
    }
    .img-nano {
        height: 200px;
    }
}
</style>
