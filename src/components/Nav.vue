<template>
    <div id="nav">
        <img src="/../assets/hawk.svg" class="logo">
        <router-link to="/" class="brand-text">{{ $t('message.brand.name') }}</router-link>
    </div>
</template>

<style lang="scss">
#nav {
  padding: 20px 0px;
  margin: auto;
  text-align: center;
  color: $lightest;
  display: flex;
  flex-direction: column;
}
.logo {
  width: 40px;
  margin: auto;
  filter: invert(92%) sepia(18%) saturate(145%) hue-rotate(196deg) brightness(99%) contrast(93%);
}
.brand-text {
  font-family: 'Prompt', sans-serif;
  font-weight: 200;
  letter-spacing: 1.2px;
  font-size: 22px;
  text-decoration: none;
  color: $lightest;
}
.brand-text :hover {
  color: $light;
}
@media only screen and (min-width: 576px) {
  #nav {
    justify-content: space-between;
    padding: 10px;
    flex-direction: row;
  }
  .logo {
    margin-left: 0;
    width: 30px;
  }
}
</style>
