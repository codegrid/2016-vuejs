<style scoped lang="scss">
  .list-item {
    cursor: pointer;
    position: relative;
    padding: 5px;
    border-bottom: 1px solid #ddd;
    &:nth-of-type(2n + 1) {
      background-color: #fcfcfc;
    }
    &-text {
      font-size: 12px;
      .fa {
        width: 12px;
      }
      span {
        font-size: 10px;
        background-color: #555;
        color: #fff;
        padding: 2px 4px;
        position: relative;
        margin-right: 10px;
      }
    }
    &-remove {
      display: none;
      cursor: pointer;
      position: absolute;
      right: 5px;
      top: 0;
      &:hover {
        color: tomato;
      }
    }
    &:hover {
      .list-item-remove {
        display: block;
      }
    }
  }
</style>

<template>
  <div class="list-item" @click="select(memo.id)">
    <div class="list-item-text">
      <i class="fa fa-bookmark"></i> {{memo.id}}
    </div>
    <div class="list-item-text">
      <i class="fa fa-comment"></i> {{memo.text}}
    </div>
    <div class="list-item-text">
      <i class="fa fa-clock-o"></i> {{memo.date}}
    </div>
    <div class="list-item-text">
      <i class="fa fa-tags"></i> <span v-for="tag in memo.tags">{{tag}}</span>
    </div>
      <span class="list-item-remove" @click.stop="remove(memo.id)">
        <i class="fa fa-trash"></i>
      </span>
  </div>
</template>

<script lang="babel">
  import * as store from '../store'
  export default{
    data() {
      return {}
    },
    props: {
      memo: Object
    },
    methods: {
      remove: store.actions.removeMemo,
      select(id) {
        this.$router.push({path: `/list/${id}`, params: {id}})
      }
    }
  }
</script>
