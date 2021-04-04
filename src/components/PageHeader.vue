<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
  props: ['title', 'description'],
};
</script>

<style lang="scss" scoped>
.container {
    background: $darkest;
    color: $lightest;
    display: flex;
    flex-direction: column;
    h2 {
        font-size: 18px;
    }
    p {
        font-size: 14px;
    }
    h2, p {
        margin-top: 14px;
    }
}
@media only screen and (min-width: 992px) {
    h2 {
        font-size: 22px;
    }
    p {
        font-size: 18px;
    }
}
</style>
