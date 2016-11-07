<style scoped lang="scss">
  @import '../node_modules/font-awesome/css/font-awesome.css';
  .app {
    height: 100%;
    display: flex;
  }
  .menu {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background-color: #555;
    color: #fff;
  }
  .contents {
    height: 100%;
    flex-grow: 1;
    overflow: scroll;
    box-sizing: border-box;
  }
  .router-link {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    font-weight: normal;
    font-size: 14px;
    &:link {
      color: inherit;
    }
  }
  .router-link-active {
    background-color: #fcfcfc;
    color: #555;
  }
  @media all and (max-width: 480px) {

  }
</style>
<template>
  <div id="app" class="app">
    <nav class="menu">
      <router-link to="/latest" class="router-link">
        最新
      </router-link>
      <router-link to="/list" class="router-link">
        一覧
      </router-link>
      <router-link to="/new" class="router-link">
        新規
      </router-link>
    </nav>
    <div class="contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import * as store from './store'
export default {
  name: 'app'
}
</script>
