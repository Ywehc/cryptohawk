<template>
    <div class="mobile-grid">
      <div class="vertical-light"></div>
      <nav class="nav-container">
        <router-link class="link" to="/platforms">Platforms</router-link>
        <router-link class="link" to="/prices">Prices</router-link>
        <router-link class="link" to="/hardware">Hardware</router-link>
        <router-link class="link" to="/beginners">Beginners</router-link>
      </nav>
      <!-- <div class="vertical-gradient"></div> -->
      <div class="vertical-light"></div>
      <router-view />
    </div>
</template>

<style scoped lang="scss">
.mobile-grid {
  .nav-container {
    display: flex;
    justify-content: space-between;
    font-family: 'Prompt', sans-serif;
    padding: 5px;
    background: $lightest;
    .link {
      list-style-type: none;
      padding: .4em;
      text-align: center;
      background: $lightest;
      color: $medium;
      text-decoration: none;
      font-size: 16px;
      p {
          margin: .2rem auto;
      }
    }
    .router-link-active {
      color: $darkest;
      font-weight: bold;
    }
  }
}
  .vertical-light {
    height: 4px;
    background: $medium;
  }
</style>
