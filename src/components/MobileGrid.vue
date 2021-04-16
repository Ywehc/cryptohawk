<template>
    <div class="mobile-grid">
      <div class="vertical-light"></div>
      <nav class="nav-container">
        <router-link class="link" to="/platforms">
          Platforms
          <div class="underline"></div>
        </router-link>
        <router-link class="link" to="/prices-mobile">
          Prices
          <div class="underline"></div>
        </router-link>
        <router-link class="link" to="/hardware">
          Hardware
          <div class="underline"></div>
        </router-link>
        <!-- <router-link class="link" to="/blog">
          Blog
          <div class="underline"></div>
        </router-link> -->
        <router-link class="link" to="/beginners">
          Beginners
          <div class="underline"></div>
        </router-link>
      </nav>
      <div class="vertical-light"></div>
      <router-view />
    </div>
</template>

<style scoped lang="scss">
.mobile-grid {
  .nav-container {
    display: flex;
    justify-content: center;
    font-family: 'Prompt', sans-serif;
    padding: 5px 15px;
    background: $lightest;
    .link {
      list-style-type: none;
      padding: .4em;
      text-align: center;
      background: $lightest;
      color: $medium;
      text-decoration: none;
      font-size: 16px;
      margin: auto 6px;
    }
    .router-link-active {
      color: $darkest;
      font-weight: bold;
      .underline {
        border-bottom: 1.5px solid $light;
        width: 80%;
        margin: auto;
      }
    }
  }
}
  .vertical-light {
    height: 4px;
    background: $medium;
  }
</style>
