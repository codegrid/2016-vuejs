<style scoped>
  .edit {
    height: 100%;
  }
</style>

<template>
  <div class="edit">
    <editor-view :id="id"></editor-view>
  </div>
</template>

<script lang="babel">
  import EditorView from '../components/EditorView.vue'
  export default{
    computed: {
      id() {
        return parseInt(this.$route.params.id, 10)
      }
    },
    components: {
      EditorView
    }
  }
</script>
