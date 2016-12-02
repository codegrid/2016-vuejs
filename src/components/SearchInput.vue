<style scoped>
</style>

<template>
  <input v-model="search">
</template>

<script>
  export default{
    data() {
      return {
        search: ''
      }
    },
    watch: {
      search() {
        this.$emit('update', {key: 'search', value: this.search})
      }
    }
  }
</script>
