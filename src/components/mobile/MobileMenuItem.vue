<template>
    <div class="nav-item">{{ name }}</div>
</template>

<script>
export default {
  props: ['name'],
};
</script>

<style lang="scss" scoped>
.nav-item {
    padding: .8em;
    flex: 1;
    text-align: center;
    background: $medium;
    color: $darkest;
    p {
        margin: .2rem auto;
    }
}
.active {
  font-size: 30px;
}
</style>
