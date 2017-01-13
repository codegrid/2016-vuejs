<template>
  <div>
    <list-view
      :memos="sharedState.memos"
      @remove="remove"
      :count="privateState.count"
      :sort="privateState.sort"
    ></list-view>
    <router-link :to="{name: 'items'}">すべて見る</router-link>
  </div>
</template>

<script lang="babel">
  import ListView from '../components/ListView'
  import {mapMutations} from 'vuex'
  export default{
    data() {
      return {
        privateState: {
          count: 3,
          sort: 'latest'
        }
      }
    },
    computed: {
      sharedState() {
        return this.$store.state
      }
    },
    methods: {
      remove(id) {
        this.$store.commit('removeMemo', id)
      }
    },
    components: {
      ListView
    }
  }
</script>

