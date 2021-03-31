<template>
    <div class="wrapper">
        <nav class="nav-container">
            <router-link
                class="link"
                to="/platforms">{{ $t('message.nav.platforms') }}</router-link>
            <router-link
                class="link"
                to="/hardware">{{ $t('message.nav.hardware') }}</router-link>
            <router-link
                class="link"
                to="/beginners">{{ $t('message.nav.beginners') }}</router-link>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    justify-content: center;
}
.nav-container {
    display: flex;
    flex-direction: row;
    margin-top: -6px;
}
.link {
    color: $light;
    text-decoration: none;
    font-family: $brand-font;
    font-weight: 200;
    letter-spacing: $brand-letter-spacing;
    font-size: 28px;
    margin: 10px;
}
.router-link-active {
    color: $lightest;
}
@media only screen and (min-width: 992px) {
    .nav-container {
      flex-direction: column;
      text-align: right;
    }
    .wrapper {
        justify-content: flex-end;
    }
    .link {
        font-size: 24px;
        margin: 0;
    }
}
</style>
