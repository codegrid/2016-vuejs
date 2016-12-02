<style lang="scss">
  @import '../static/styles.css';
  html, body {
    color: #555;
    margin: 0;
    padding: 0;
    height: 100vh;
  }
  #app {
    height: 100%;
    display: flex;
    .contents {
      height: 100%;
      flex-grow: 1;
      box-sizing: border-box;
    }
  }
</style>
<template>
  <div id="app">
    <nav-link></nav-link>
    <router-view class="contents"
      @navigation="navigation">
    </router-view>
  </div>
</template>

<script lang="babel">
import NavLink from './components/NavLink'
import store from './store'

export default {
  name: 'app',
  data() {
    return {
      sharedState: store.state
    }
  },
  methods: {
    navigation(location) {
      this.$router.push(location)
    }
  },
  components: {
    NavLink
  }
}
</script>
