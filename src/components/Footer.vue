<template>
    <div id="footer">
        <div class="locale-changer">
            <img src="../../public/assets/flag-canada.png">
            <select v-model="$i18n.locale">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                    {{ lang }}
                </option>
            </select>
        </div>
        <div class="footer-links">
            <router-link to="/">{{ $t('message.nav.home') }}</router-link> |
            <router-link to="/contact">{{ $t('message.nav.contact') }}</router-link>
            <!-- <router-link to="/privacy">Legal & Privacy</router-link> -->
        </div>
    </div>
</template>

<script>

export default {
  name: 'locale-changer',
  data() {
    return { langs: ['fr', 'en'] };
  },
};
</script>

<style lang="scss" scoped>
#footer {
    min-height: 100px;
    color: $lightest;
    text-align: center;
    padding: 10px;
    font-weight: bold;
}
.locale-changer {
    margin: 20px;
    select {
        background: $lightest;
        color: $darkest;
        border-radius: 5%;
        font-weight: bold;
        margin-left: 5px;
        font-size: 20px;
    }
    img {
        height: 46px;
        margin-right: 5px;
        margin-top: -6px;
    }
}
.footer-links a {
    text-decoration: none;
    color: $lightest;
}
.footer-links :hover {
    color: $medium;
}
</style>
