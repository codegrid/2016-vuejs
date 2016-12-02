<style>
  .root-button {
    display: block;
    background-color: #555;
    color: #fff;
    text-decoration: none;
    width: 200px;
    text-align: center;
    line-height: 40px;
    margin: 10px auto;
  }
</style>
<template>
  <div>
    <list-view :memos="sharedState.memos" :count="privateState.count" :sort="privateState.sort" @remove="remove"></list-view>
    <router-link :to="{name: 'items'}" class="root-button">すべて見る</router-link>
  </div>
</template>

<script lang="babel">
  import store from '../store'
  import ListView from '../components/ListView'
  export default{
    data() {
      return {
        privateState: {
          count: 3,
          sort: 'latest'
        },
        sharedState: store.state
      }
    },
    methods: {
      remove(id) {
        store.commit('removeMemo', id)
      }
    },
    components: {
      ListView
    }
  }
</script>
