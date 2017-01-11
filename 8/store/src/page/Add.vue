<template>
  <div>
    <editor-view @add="add"></editor-view>
  </div>
</template>

<script lang="babel">
  import EditorView from '../components/EditorView'
  import store from '../store'
  export default{
    methods: {
      add(data) {
        store.actions.addMemo(data)
        this.$router.push({name: 'items'})
      }
    },
    components: {
      EditorView
    }
  }
</script>
