<template>
    <div id="footer">
        <div class="locale-changer">
            <select v-model="$i18n.locale">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                    {{ lang }}
                </option>
            </select>
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
    font-size: 20px;
    font-weight: bold;
}
.locale-changer {
    margin: 20px;
    select {
        background: $light;
        color: $darkest;
        border-radius: 5%;
        font-weight: bold;
    }
}
</style>
