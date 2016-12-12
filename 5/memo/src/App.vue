<style lang="scss">
  @import '../static/styles.css';
  html, body {
    color: #555;
    margin: 0;
    padding: 0;
    height: 100vh;
  }
  #app {
    height: 100%;
    display: flex;
    .contents {
      height: 100%;
      flex-grow: 1;
      overflow: scroll;
      box-sizing: border-box;
    }
  }
</style>
<template>
  <div id="app">
    <nav-link></nav-link>
    <router-view class="contents" :memos="memos" @add="add" @remove="remove" :count="3"></router-view>
  </div>
</template>

<script lang="babel">
import NavLink from './components/NavLink'
export default {
  name: 'app',
  data() {
    return {
      memos: [
        {
          id: 1,
          text: 'テスト',
          date: '16-10-28',
          tags: ['タグ1', 'タグ2']
        },
        {
          id: 2,
          text: 'テスト2',
          date: '16-11-28',
          tags: ['タグ2', 'タグ3']
        },
        {
          id: 3,
          text: 'テスト3',
          date: '16-10-28',
          tags: ['タグ3', 'タグ4']
        },
        {
          id: 4,
          text: 'テスト4',
          date: '16-11-28',
          tags: ['タグ4', 'タグ5']
        }
      ]
    }
  },
  computed: {
    nextId() {
      return this.memos.reduce((id, memo) => {
          return id < memo.id ? memo.id : id
        }, 0) + 1
    }
  },
  methods: {
    add(newMemo) {
      newMemo.id = this.nextId
      this.memos.push(newMemo)
    },
    remove(id) {
      const index = this.memos.findIndex((memo) => {
        return memo.id === id
      })
      this.memos.splice(index, 1)
    }
  },
  components: {
    NavLink
  }
}
</script>
