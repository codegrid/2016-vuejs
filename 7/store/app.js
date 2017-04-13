(function() {
  const vm1 = new Vue({
    el: '#vm1',
    template: `
      <div> 
        <input :value="sharedState.message" @input="updateMessage">
      </div>
    `,
    data() {
      return {
        sharedState: store.state
      }
    },
    methods: {
      updateMessage(e) {
        store.setMessageAction(e.target.value)
      }
    }
  })

  const vm2 = new Vue({
    el: '#vm2',
    template: `
      <div>
        <p>{{sharedState.message}}</p>
        <button @click="clear">clear</button>
      </div>
    `,
    data() {
      return {
        sharedState: store.state
      }
    },
    methods: {
      clear() {
        store.clearMessageAction()
      }
    }
  })
})()