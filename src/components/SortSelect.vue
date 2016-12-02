<template>
  <select v-model="sort">
    <option v-for="option in sortOptions" :value="option.value">
      {{option.label}}
    </option>
  </select>
</template>

<script>
  export default{
    data() {
      return {
        sort: 'latest',
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
      sort() {
        this.$emit('update', {key: 'sort', value: this.sort})
      }
    }
  }
</script>
