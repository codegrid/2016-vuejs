const vm = new Vue({
  el: '#app',
  template: `<div>
    {{message}}
  </div>`,
  data() {
    return {
      message: 'Hello Vue.js !!'
    }
  }
})
