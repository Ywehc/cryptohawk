<template>
    <div id="nav">
      <div class="row nav-upper">
        <router-link to="/" class="col brand-text">
          {{ $t('message.brand.name') }}
        </router-link>
        <img src="/../assets/hawk.svg" class="col logo">
      </div>
      <div class="nav-lower d-xl-none">
        <p class="description mt-3">{{ $t('message.brand.description') }}</p>
      </div>
    </div>
</template>

<style lang="scss">
#nav {
  padding: 6px 12px;
  margin: auto;
  color: $lightest;
}
.logo {
  max-width: 4em!important;
  filter: invert(92%) sepia(18%) saturate(145%) hue-rotate(196deg) brightness(99%) contrast(93%);
}
.brand-text {
  font-family: $brand-font;
  font-weight: 200;
  letter-spacing: $brand-letter-spacing;
  font-size: 24px;
  text-decoration: none;
  color: $light;
}
.brand-text:hover{
  color: $lightest;
  text-decoration: none;
}
@media only screen and (min-width: 576px) {
  .brand-text {
    font-size: 22px;
  }
}
</style>
