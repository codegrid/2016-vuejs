<style lang="scss">
  .layout-items {
    display: flex;
    overflow: hidden;
    .layout-items-list {
      flex-grow: 1;
      border-right: 1px solid #e6e6e6;
      overflow: scroll;
    }
    .layout-items-sort {
      padding: 5px;
    }
    .list-view {

    }
    .list-item {
      cursor: pointer;
    }
    .isEdit .list-item:hover button{
      display: none;
    }
  }
</style>

<template>
  <div class="layout-items">
    <div class="layout-items-list">
      <div class="layout-items-sort">
        <search-input @update="updateCondition"></search-input>
        <sort-select @update="updateCondition" :search="privateState.sort"></sort-select>
        <tags-select :memos="sharedState.memos" @update="updateCondition"></tags-select>
      </div>
      <list-view :memos="sharedState.memos"
        @remove="remove" @select="select"
        :class="{isEdit: isEdit}"
        :sort="privateState.sort"
        :search="privateState.search"
        :tags="privateState.tags">
      </list-view>
      </div>
    <router-view :memo="selectedMemo" :isEdit="isEdit" @update="update"></router-view>
  </div>
</template>

<script lang="babel">
  import store from '../store'
  import ListView from '../components/ListView'
  import SearchInput from '../components/SearchInput'
  import SortSelect from '../components/SortSelect'
  import TagsSelect from '../components/TagsSelect'
  export default{
    data() {
      return {
        sharedState: store.state,
        privateState: {
          tags: [],
          search: '',
          sort: 'latest'
        }
      }
    },
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
      isEdit() {
        return this.$route.meta.edit
      }
    },
    methods: {
      remove(id) {
        store.commit('removeMemo', id)
      },
      select(id) {
        this.$router.push({name: 'item', params: {id}})
      },
      update(memo) {
        store.commit('updateMemo', memo)
        this.$emit('navigation', {name: 'items'})
      },
      updateCondition({key, value}) {
        this.privateState[key] = value
      }
    },
    components: {
      ListView,
      SearchInput,
      SortSelect,
      TagsSelect
    }
  }
</script>
