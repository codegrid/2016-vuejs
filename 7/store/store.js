const store = {
  debug: true,
  state: {
    message: 'Hello Vue.js!!'
  },
  setMessageAction(newValue) {
    this.debug && console.log(`setMessageAction triggered with ${newValue}`)
    this.state.message = newValue
  },
  clearMessageAction() {
    this.debug && console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}
