<style scoped lang="scss">
  .input-view {
    flex-grow: 1;
    border-radius: 2px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding: 10px;
    &-buttons {
      justify-content: flex-end;
      display: flex;
      padding: 10px 0 0;
    }
    &-button {
      margin-left: 10px;
      background-color: #555;
      color: #fff;
      cursor: pointer;
      border: none;
      width: 100px;
      line-height: 30px;
    }
    &-item {
      box-shadow: 0 1px 0 rgba(#fff, 1);
      background-color: #fff;
      font-size: 14px;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      label {
        color: #555;
        font-size: 11px;
        text-align: right;
        min-width: 33px;
      }
      input {
        flex-grow: 1;
        box-sizing: border-box;
        padding: 10px 5px;
        outline-offset: -4px;
        outline-width: 1px;
        border: 1px solid #b3b3b3;
        &[disabled] {
          color: #999;
        }
      }
    }
  }
</style>

<template>
  <div class="input-view">
    <div class="input-view-item" v-if="id">
      <label>id：</label>
      <input v-model="id" placeholder="id" disabled>
    </div>
    <div class="input-view-item">
      <label>内容：</label>
      <input v-model="input.text" placeholder="メモの内容">
    </div>
    <div class="input-view-item">
      <label>日付：</label>
      <input type="date" v-model="input.date">
    </div>
    <div class="input-view-item">
      <label>タグ：</label>
      <input v-model="input.tags" placeholder="空白区切りで指定">
    </div>
    <header class="input-view-buttons">
      <button @click="cancel" class="input-view-button">キャンセル</button>
      <button @click="save" class="input-view-button">保存</button>
    </header>
  </div>
</template>

<script lang="babel">
  import * as store from '../store'
  export default{
    props: {
      id: Number
    },
    data() {
      return {
        input: {
          text: '',
          tags: '',
          date: ''
        }
      }
    },
    watch: {
      'id': 'setMemo'
    },
    mounted() {
      this.setMemo()
    },
    methods: {
      setMemo() {
        if (this.id !== undefined) {
          const memo = store.getters.memoById(this.id)
          this.input = {
            id: this.id,
            text: memo.text,
            date: memo.date,
            tags: memo.tags.join(' ')
          }
        }
      },
      save() {
        if (this.id) {
          store.actions.updateMemo(this.input)
        }
        else {
          store.actions.addMemo(this.input)
        }
        this.complete()
      },
      cancel() {
        this.$router.go(-1)
      },
      complete() {
        this.$router.push('/list')
      }
    }
  }
</script>
