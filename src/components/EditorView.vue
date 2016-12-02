<template>
  <div class="editor-view">
    <div v-if="input.id">
      <label>ID：</label>
      <input v-model="input.id" disabled>
    </div>
    <div>
      <label>内容：</label>
      <input v-model="input.text" placeholder="メモのタイトル">
    </div>
    <div>
      <label>日付：</label>
      <input type="date" v-model="input.date">
    </div>
    <div>
      <label>タグ：</label>
      <input v-model="input.tags" placeholder="空白区切りで指定">
    </div>
    <div>
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script lang="babel">
  export default{
    props: {
      memo: Object,
      isEdit: Boolean
    },
    watch: {
      $route: 'setMemo'
    },
    mounted() {
      this.setMemo()
    },
    data() {
      return {
        input: {
          text: '',
          date: '',
          tags: ''
        }
      }
    },
    computed: {
      tagsArr() {
        return this.input.tags.trim() !== '' ? this.input.tags.trim().split(/\s+/) : []
      }
    },
    methods: {
      save() {
        const data = Object.assign({}, this.input, {tags: this.tagsArr})
        this.$emit(this.isEdit ? 'update': 'add', data)
      },
      setMemo() {
        if (this.memo) {
          this.input = {
            id: this.memo.id,
            text: this.memo.text,
            date: this.memo.date,
            tags: this.memo.tags.join(' ')
          }
        }
      }
    }
  }
</script>
