<template>
  <div>
    <list-view :memos="memos" @remove="remove" :count="3" sort="latest"></list-view>
    <router-link :to="{name: 'items'}">すべて見る</router-link>
  </div>
</template>

<script lang="babel">
  import ListView from '../components/ListView'
  export default{
    props: {
      memos: Array
    },
    methods: {
      remove(id) {
        this.$emit('remove', id)
      }
    },
    components: {
      ListView
    }
  }
</script>

