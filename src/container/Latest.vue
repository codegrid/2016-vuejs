<style scoped>
  .more {
    text-align: center;
    padding: 10px;
  }
  .button {
    background-color: #555;
    color: #fff;
    cursor: pointer;
    border: none;
    width: 100px;
    line-height: 30px;
  }
</style>

<template>
  <div>
    <list-view :count="count" sort="latest"></list-view>
    <div v-if="hasMore" class="more">
      <button @click="more" class="button">もっと見る</button>
    </div>
  </div>
</template>

<script lang="babel">
  import * as store from '../store'
  import ListView from '../components/ListView.vue'
  export default{
    data() {
      return {
        sharedState: store.state,
        count: 3
      }
    },
    computed: {
      hasMore() {
        return this.count < this.sharedState.memos.length
      }
    },
    methods: {
      more() {
        this.count += 5
      }
    },
    components: {
      ListView
    }
  }
</script>
