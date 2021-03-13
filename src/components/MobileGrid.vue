<template>
    <div class="mobile-grid">
      <p class="description">{{ $t('message.brand.description') }}</p>
      <div class="vertical-light"></div>
      <nav class="nav-container">
        <router-link class="link" to="/platforms">Platforms</router-link>
        <router-link class="link" to="/prices">Prices</router-link>
        <router-link class="link" to="/contact">Contact</router-link>
      </nav>
      <!-- <div class="vertical-gradient"></div> -->
      <div class="vertical-light"></div>
      <router-view />
    </div>
</template>

<style scoped lang="scss">
.mobile-grid {
  padding-top: 10px;
  .description {
  color: $lightest;
  text-align: center;
  padding: 0px 10px;
  }
  .nav-container {
    display: flex;
    align-items: stretch;
    font-family: 'Prompt', sans-serif;
    padding-left: 0;
    .link {
      list-style-type: none;
      padding: .4em;
      flex: 1;
      text-align: center;
      background: $lightest;
      color: $medium;
      text-decoration: none;
      p {
          margin: .2rem auto;
      }
    }
    .router-link-active {
      color: $darkest;
    }
  }
}
.vertical-gradient {
    height: 4px;
    // background: linear-gradient($medium, $darkest);
    background: $darkest;
  }
  .vertical-dark {
    height: 4px;
    background: $dark;
  }
  .vertical-light {
    height: 4px;
    background: $medium;
  }
</style>
