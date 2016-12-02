<template>
  <div>
    <editor-view @add="add"></editor-view>
  </div>
</template>

<script lang="babel">
  import store from '../store'
  import EditorView from '../components/EditorView'
  export default{
    methods: {
      add(data) {
        store.commit('addMemo', data)
        this.$emit('navigation', {name: 'items'})
      }
    },
    components: {
      EditorView
    }
  }
</script>
