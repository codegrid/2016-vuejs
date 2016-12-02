<template>
  <div class="list-view">
    <div v-if="hasMemo">
      <list-item
        v-for="memo in filteredMemos"
        :memo="memo"
        @remove="remove"
        @select="select(memo.id)"
        @edit="edit(memo.id)">
      </list-item>
    </div>

    <div v-else>
      表示できるメモがありません。
    </div>
  </div>
</template>

<script lang="babel">
import ListItem from './ListItem'
export default{
  props: {
    isEdit: Boolean,
    memos: Array,
    count: Number,
    sort: String,
    tags: Array,
    search: String
  },
  computed: {
    hasMemo() {
      return this.filteredMemos && this.filteredMemos.length !== 0
    },
    filteredMemos() {
      let memos = this.memos.concat()
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
  methods: {
    remove(id) {
      this.$emit('remove', id)
    },
    select(id) {
      this.$emit('select', id)
    },
    edit(id) {
      this.$emit('edit', id)
    }
  },
  components: {
    ListItem
  }
}
</script>
