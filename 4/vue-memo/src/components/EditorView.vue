<template>
  <div class="editor-view">
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
        // input.tags の文字列を空白で区切って配列に変換する
        return this.input.tags.trim() !== '' ? this.input.tags.trim().split(/\s+/) : []
      }
    },
    methods: {
      save() {
        // this.input のクローンを生成する
        const data = Object.assign({}, this.input, {tags: this.tagsArr})
        // 'add'イベントを自身にトリガーする
        this.$emit('add', data)
      }
    }
  }
</script>
