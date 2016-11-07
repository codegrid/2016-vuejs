<style scoped lang="scss">
  .list {
    height: 100%;
    display: flex;
  }
  .search {
    margin-right: 5px;
    margin-left: 10px;
  }
  .sort {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 7px;
    background-color: #f0f0f0;
  }
  .tags {
    margin-left: 5px;
    flex-shrink: 0;
    input[type="checkbox"] {
      display: none;
    }

    .tag label {
      display: inline-block;
      cursor: pointer;
      opacity: 0.4;
      font-size: 10px;
      background-color: #555;
      color: #fff;
      padding: 2px 4px;
      position: relative;
      margin: 3px 1px;
      &:hover {
        opacity: 1;
      }
    }
    input[type="checkbox"]:checked + label {
      opacity: 1;
    }
  }
  .list-wrapper {
    flex-grow: 1;
    overflow: scroll;
  }
  .editor-view {
    flex-grow: 1;
    border-left: 1px solid #ddd;
  }

  @media all and (max-width: 480px) {
    .list {
      flex-direction: column;
    }
  }
</style>

<template>
  <div class="list">
    <div class="list-wrapper">
      <div class="sort">
        <span><i class="fa fa-search"></i></span><input v-model="search" class="search">
        <select v-model="sort">
          <option v-for="option in sortOptions" :value="option.value">
            {{option.label}}
          </option>
        </select>
      </div>
      <div class="tags">
        <span v-for="tag in allTags" class="tag">
          <input type="checkbox" v-model="selectedTags" :value="tag" :id="tag">

          <label :for="tag">
          <i class="fa fa-tags"></i>
            {{tag}}
          </label>
        </span>
      </div>
      <list-view :sort="sort" :tags="selectedTags" :search="search"></list-view>
    </div>
    <router-view class="editor-view"></router-view>
  </div>
</template>

<script lang="babel">
  import * as store from '../store'
  import ListView from '../components/ListView.vue'
  export default{
    data() {
      return {
        sort: 'latest',
        search: '',
        selectedTags: [],
        allTags: store.getters.allTags(),
        sortOptions: [
          {
            value: 'latest', label: '新しい順'
          },
          {
            value: 'oldest', label: '登録順'
          },
          {
            value: 'asc', label: '日付（昇順）'
          },
          {
            value: 'desc', label: '日付（降順）'
          }
        ]
      }
    },
    watch: {
      '$route': 'setAllTags'
    },
    computed: {
      isEdit() {
        return this.$route.params.id !== undefined
      }
    },
    methods: {
      setAllTags() {
        this.allTags = store.getters.allTags()
      }
    },
    components: {
      ListView
    }
  }
</script>
