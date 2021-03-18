<template>
    <main class="container p-4">
        <section>
            <h2>{{ $t('message.beginners.heading1') }}</h2>
            <article>
                <p>{{ $t('message.beginners.intro1') }}</p>
            </article>
            <h2>{{ $t('message.beginners.heading2') }}</h2>
            <article>
                <p>{{ $t('message.beginners.what') }}</p>
                <p>{{ $t('message.beginners.why') }}</p>
            </article>
            <h2>{{ $t('message.beginners.heading3') }}</h2>
            <article>
                <p>{{ $t('message.beginners.exchanges1') }}
                    <span>
                        <a :href="this.$store.state.platforms.ndax.url">
                            {{ this.$store.state.platforms.ndax.title }}
                        </a>
                        {{ $t('message.beginners.exchanges2') }}
                    </span>
                </p>
                <p>{{ $t('message.beginners.platforms1') }}
                    <span>
                        <a :href="this.$store.state.platforms.wealthsimple.url">
                            {{ this.$store.state.platforms.wealthsimple.title }}
                        </a>
                    </span>
                    {{ $t('message.beginners.platforms2') }}
                </p>
                <p>{{ $t('message.beginners.conclusion1') }}
                    <span>
                        <router-link to="/platforms" class="font-weight-bold">
                            {{ $t('message.beginners.conclusion2') }}
                        </router-link>
                        {{ $t('message.beginners.conclusion3') }}
                    </span>
                </p>
            </article>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.container {
    background: $light;
}
h2 {
    font-size: $main-heading-size;
}
a {
    color: $darkest;
}
p {
    font-size: $main-text-size;
}
</style>
