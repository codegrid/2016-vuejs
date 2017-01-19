const state = {
  memos: require('./memos.json')
}

const util = {
  findIndex(memos, id) {
    const targetId = parseInt(id, 10)
    return memos.findIndex((memo) => {
      return memo.id === targetId
    })
  }
}

const mutations = {
  addMemo(state, newMemo) {
    newMemo.id = state.memos.reduce((id, memo) => {
        return id < memo.id ? memo.id : id
      }, 0) + 1
    state.memos.push(newMemo)
  },
  removeMemo(state, id) {
    const index = util.findIndex(state.memos, id)
    state.memos.splice(index, 1)
  },
  updateMemo(state, memo) {
    const index = util.findIndex(state.memos, memo.id)
    state.memos.splice(index, 1, memo)
  }
}

export default {
  state,
  mutations
}
