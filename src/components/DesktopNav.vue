<template>
    <div class="wrapper">
        <nav class="nav-container">
            <router-link class="link" to="/platforms">platforms</router-link>
            <router-link class="link" to="/hardware">hardware</router-link>
            <router-link class="link" to="/beginners">beginners</router-link>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    justify-content: flex-end;
}
.brand-container {
    flex-direction: column;
    padding: 20px 0px;
    display: flex;
    text-align: right;
    justify-content: flex-end;
    width: 100%;
}
.nav-container {
    text-align: right;
    display: flex;
    flex-direction: column;
}
.link {
    color: $light;
    text-decoration: none;
    font-family: $brand-font;
    font-weight: 200;
    letter-spacing: $brand-letter-spacing;
    font-size: 30px;
}
</style>
