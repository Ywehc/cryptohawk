<template>
    <div class="mobile-grid">
      <p class="description">{{ $t('message.brand.description') }}</p>
      <nav class="nav-container">
        <router-link class="link" to="/platforms">Platforms</router-link>
        <router-link class="link" to="/prices">Prices</router-link>
        <router-link class="link" to="/contact">Contact</router-link>
      </nav>
      <router-view />
    </div>
</template>

<style scoped lang="scss">
.mobile-grid {
  background-color: $darkest;
  padding-top: 10px;
  .description {
  color: $lightest;
  text-align: center;
  padding: 0px 10px;
  }
  .nav-container {
    background: $darkest;
    display: flex;
    align-items: stretch;
    font-family: 'Prompt', sans-serif;
    color: $lightest;
    padding-left: 0;
    .link {
      list-style-type: none;
      padding: .8em;
      flex: 1;
      text-align: center;
      background: $medium;
      color: $darkest;
      text-decoration: none;
      p {
          margin: .2rem auto;
      }
    }
    .router-link-active {
      color: $lightest;
    }
  }
}
</style>
