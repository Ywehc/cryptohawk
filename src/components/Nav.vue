<template>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <div class="brand-container">
        <img src="/../assets/hawk.svg" class="logo">
        <h2>cryptohawk</h2>
      </div>
    </div>
</template>

<style lang="scss">
#nav {
  padding: 4px;
}
.brand-container {
  width: 80%;
  margin: auto;
  text-align: center;
  color: $lightest;
}
.logo {
  width: 40px;
  margin-top: 10px;
  filter: invert(92%) sepia(18%) saturate(145%) hue-rotate(196deg) brightness(99%) contrast(93%);
}
</style>
