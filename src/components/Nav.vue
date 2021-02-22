<template>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
        <img src="/../assets/hawk.svg" class="logo">
        <h2 class="brand-text">cryptohawk</h2>
    </div>
</template>

<style lang="scss">
#nav {
  padding: 4px;
  margin: auto;
  text-align: center;
  color: $lightest;
  display: flex;
  flex-direction: column;
}
.logo {
  width: 40px;
  margin-top: 10px;
  margin: auto;
  filter: invert(92%) sepia(18%) saturate(145%) hue-rotate(196deg) brightness(99%) contrast(93%);
}
.brand-text {
  font-family: 'Prompt', sans-serif;
  font-weight: 200;
  letter-spacing: 1.2px;
  font-size: 22px;
}
@media only screen and (min-width: 576px) {
  #nav {
    justify-content: space-between;
    padding: 10px;
    flex-direction: row;
  }
  .logo {
    margin-top: 0;
    margin-left: 0;
    width: 30px;
  }
}
</style>
