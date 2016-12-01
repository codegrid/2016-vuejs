const vm = new Vue({
  el: '#app',
  data() {
    return {
      memo: {
        id: 1,
        text: '',
        date: '',
        tags: ''
      }
    }
  },
  template: `
    <div>
      <editor-view @add="add"></editor-view>
      <list-item :memo="memo"></list-item>
    </div>
  `,
  methods: {
    add(newMemo) {
      Object.assign(this.memo, newMemo)
    }
  }
})
