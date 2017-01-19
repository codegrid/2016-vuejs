<style scoped lang="scss">
  .layout-items {
    display: flex;
    &-left {
      flex-grow: 1;
      overflow: scroll;
    }
    &-right {
      border-left: 1px solid #bbb;
    }
  }
</style>
<template>
  <div class="layout-items">
    <list-view class="layout-items-left"
      :memos="sharedState.memos"
      @remove="remove"
      @select="select"></list-view>
    <router-view class="layout-items-right"
      :memo="selectedMemo"
      @cancel="cancel"
      @add="update"></router-view>
  </div>
</template>

<script lang="babel">
  import ListView from '../components/ListView'
  export default{
    computed: {
      selectedMemo() {
        const id = this.$route.params.id
        if (id !== undefined) {
          const memo = this.sharedState.memos.find((memo) => {
            return memo.id === parseInt(id, 0)
          })
          return memo
        }
      },
      sharedState() {
         return this.$store.state
      }
    },
    methods: {
      remove(id) {
        this.$store.commit('removeMemo', id)
      },
      select(id) {
        this.$router.push({name: 'edit', params: {id}})
      },
      cancel() {
        this.$router.push({name: 'items'})
      },
      update(data) {
        this.$store.commit('updateMemo', data)
        this.$router.push({name: 'items'})
      }
    },
    components: {
      ListView
    }
  }
</script>
