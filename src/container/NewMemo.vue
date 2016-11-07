<style scoped>
  .new-memo {
    height: 100%;
  }
</style>

<template>
  <div class="new-memo">
    <editor-view></editor-view>
  </div>
</template>

<script lang="babel">
  import * as store from '../store'
  import EditorView from '../components/EditorView.vue'
  export default{
    data() {
      return {
        sharedState: store.state
      }
    },
    components: {
      EditorView
    }
  }
</script>
