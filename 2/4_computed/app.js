const vm = new Vue({
  el: '#app',
  template: `<div>
    <button @click="increment">increment</button>
    <div>{{messageAndCount}}</div>
  </div>`,
  data() {
    return {
      message: 'Hello Vue.js !!',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count += 1
    }
  },
  computed: {
    messageAndCount() {
      return `${this.message}:${this.count}`
    }
  }
})
