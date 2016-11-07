<style scoped lang="scss">
  .list-view {
    border-top: 1px solid #ddd;
  }
</style>

<template>
  <div class="list-view">
    <list-item v-for="memo in filteredMemos" :memo="memo" v-if="isMemo"></list-item>
    <div v-if="!isMemo">
      <div>
        表示できるメモがありません。
      </div>
    </div>
  </div>
</template>

<script lang="babel">
  import * as store from '../store'
  import ListItem from './ListItem.vue'
  export default{
    props: {
      count: Number,
      sort: String,
      tags: Array,
      search: String
    },
    data() {
      return {
        sharedState: store.state
      }
    },
    computed: {
      isMemo() {
        return this.filteredMemos.length !== 0
      },
      filteredMemos() {
        let memos = this.sharedState.memos.concat()

        if (this.sort) {
          switch(this.sort) {
            case 'oldest':
              break
            case 'latest':
              memos.reverse()
              break
            case 'desc':
            case 'asc':
              memos.sort((a, b) => {
                if (this.sort === 'desc') [a, b] = [b, a]
                return (new Date(a.date).getTime() - new Date(b.date).getTime())
              })
              break
          }
        }

        if (this.tags && this.tags.length !== 0) {
          memos = memos.filter((memo) => {
            return memo.tags.some((tag) => {
              return this.tags.includes(tag)
            })
          })
        }

        if (this.search) {
          memos = memos.filter((memo) => {
            return (memo.tags.some((tag) => {
                return tag.includes(this.search)
              }) ||
              memo.text.includes(this.search) ||
              memo.date.includes(this.search)
            )
          })
        }

        if (this.count) {
          memos = memos.splice(0, this.count)
        }
        return memos
      }
    },
    components: {
      ListItem
    }
  }
</script>
