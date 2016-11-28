const vm = new Vue({
  el: '#app',
  data() {
    return {
      memos: []
    }
  },
  template: `
    <div>
      <editor-view @add="add"></editor-view>
      <list-view :memos="memos"></list-view>
    </div>
  `,
  methods: {
    add(newMemo) {
      newMemo.id = this.nextId
      this.memos.push(newMemo)
    }
  },
  computed: {
    nextId() {
      return this.memos.reduce((id, memo) => {
          return id < memo.id ? memo.id : id
        }, 0) + 1
    }
  }
})
