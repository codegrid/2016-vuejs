const state = {
  memos: require('./memos.json')
}

const util = {
  // memos の中から id が一致するメモを返す
  findIndex(memos, id) {
    const targetId = parseInt(id, 10)
    return memos.findIndex((memo) => {
      return memo.id === targetId
    })
  }
}

// process.env.NODE_ENV が production 以外のときにログの出力が有効になる
const debug = process.env.NODE_ENV !== 'production'

const actions = {
  addMemo(newMemo) {
    debug && console.log(`addMemo triggered with`, newMemo)
    // memos の中のメモで一番大きい id に 1 を足した値を返す
    newMemo.id = state.memos.reduce((id, memo) => {
        return id < memo.id ? memo.id : id
      }, 0) + 1
    state.memos.push(newMemo)
  },
  removeMemo(id) {
    debug && console.log(`removeMemo triggered with`, id)
    const index = util.findIndex(state.memos, id)
    state.memos.splice(index, 1)
  },
  updateMemo(memo) {
    debug && console.log(`updateMemo triggered with`, memo)
    const index = util.findIndex(state.memos, memo.id)
    state.memos.splice(index, 1, memo)
  }
}

export default {
  state,
  actions
}
