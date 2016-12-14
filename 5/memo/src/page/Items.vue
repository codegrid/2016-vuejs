<template>
  <div>
    <list-view :memos="memos" @remove="remove"></list-view>
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
