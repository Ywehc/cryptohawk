<template>
    <div class="container">
        <div class="title-container">
            <h2>{{ title }}</h2>
        </div>
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
        border-style: solid;
        border-width: 0 0 3px 0;
        padding-bottom:5px;
        width:fit-content;
        border-image: linear-gradient(45deg, $light, $dark) 1;
    }
    p {
        font-size: 14px;
    }
    h2, p {
        margin-top: 12px;
    }
    hr {
        width: 20%;
        color: $lightest;
    }
}
@media only screen and (min-width: 992px) {
.container {
    h2 {
        font-size: 24px;
        margin-top: 0;
        }
        p {
            font-size: 18px;
            margin-bottom: 30px;
        }
    }
    h2, p {
        text-align: center;
        margin: auto;
    }
    hr {
        margin: auto;
    }
}
</style>
