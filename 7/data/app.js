(function() {

  const dataSource = {
    message: 'Hello Vue.js!!'
  }

  const vm1 = new Vue({
    el: '#vm1',
    template: `
      <div> 
        <input v-model="message">
      </div>
    `,
    data() {
      return dataSource
    }
  })

  const vm2 = new Vue({
    el: '#vm2',
    template: `
      <div>
        <p>{{message}}</p>
        <button @click="clear">clear</button>
      </div>
    `,
    data() {
      return dataSource
    },
    methods: {
      clear() {
        this.message = ''
      }
    }
  })

  document.querySelector('#button').addEventListener('click', (e) => {
    dataSource.message += 'button clicked!!'
  })

})()