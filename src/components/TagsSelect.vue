<style scoped>
  .tags {
    padding: 5px;
    font-size: 12px;
  }
</style>

<template>
  <div class="tags">
    <span v-for="tag in allTags">
      <input type="checkbox" v-model="selectedTags" :value="tag" :id="tag">
      <label :for="tag">
        {{tag}}
      </label>
    </span>
  </div>
</template>

<script lang="babel">
  export default{
    props: {
      memos: Array
    },
    data() {
      return {
        selectedTags: []
      }
    },
    computed: {
      allTags() {
        return this.memos.reduce((tags, memo) => {
          memo.tags.forEach((tag) => {
            if (!tags.includes(tag)) {
              tags.push(tag)
            }
          })
          return tags
        }, [])
      }
    },
    watch: {
      selectedTags() {
        this.$emit('update', {key: 'tags', value: this.selectedTags})
      }
    }
  }

</script>
