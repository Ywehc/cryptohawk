<template>
    <div class="nav-container">
        <div class="nav-section" @click="navClick">platforms</div>
        <div class="nav-section" @click="navClick">prices</div>
        <div class="nav-section" @click="navClick">contact</div>
    </div>
</template>

<script>
export default {
  methods: {
    navClick(event) {
      this.$emit('menu-selection', event.target.innerHTML);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
    background: $darkest;
    display: flex;
    align-items: stretch;
    font-family: 'Prompt', sans-serif;
    color: $lightest;
}
.nav-section {
    padding: .8em;
    border: 2px solid $lightest;
    flex: 1;
    text-align: center;
    p {
        margin: .2rem auto;
    }
}
</style>
